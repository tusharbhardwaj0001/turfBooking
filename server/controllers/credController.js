// authController.js

import bcrypt from 'bcryptjs';
import CredUser from '../models/cred_user.js';
import userProfileSchema from '../models/user_profile.js';

const register = async (req, res) => {
    try {
        const data = await CredUser.find({ userid: req.body.credentials.userid });
        let resp;
        if (data.length > 0) {
            resp = { 
                "Status": "Failed", 
                "Message": "User ID Already Exists" 
            };
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.credentials.password, salt);
            const newuser = new CredUser({
                userid: req.body.credentials.userid,
                password: hash
            });
            await newuser.save();
            resp = { 
                "Status": "Success", 
                "Message": "Registered Successfully" 
            };
        }
        res.status(200).json(resp);
    } catch (error) {
        const resp = { 
            "Status": "Failed", 
            "Message": "Error in registration" 
        };
        res.status(500).json(resp);
    }
};

const login = async (req, res) => {
    try {
        const data1 = await CredUser.find({ userid: req.body.credentials.userid });
        let resp;
        if (data1.length === 1) {
            const hash = data1[0].password;
            const value = bcrypt.compareSync(req.body.credentials.password, hash);
            if (value === false) {
                resp = { 
                    "Status": "Failed", 
                    "Message": "Incorrect Password" 
                };
            } else {
                resp = { 
                    "Status": "Success", 
                    "tokenid": data1[0]._id 
                };
            }
        } else {
            resp = { 
                "Status": "Failed", 
                "Message": "User ID Does Not Exist" 
            };
        }
        res.status(200).json(resp);
    } catch (error) {
        const resp = { 
            "Status": "Failed", 
            "Message": "Error in login" 
        };
        res.status(500).json(resp);
    }
};


const userLogin = async (req, res) => {
    try {
        const data1 = await userProfileSchema.find({ emailid: req.body.credentials.emailid });
        let resp;
        if (data1.length === 1) {
            const hash = data1[0].password;
            const value = req.body.credentials.password;
            if (value === false) {
                resp = { 
                    "Status": "Failed", 
                    "Message": "Incorrect Password" 
                };
            } else {
                resp = { 
                    "Status": "Success", 
                    "tokenid": data1[0]._id 
                };
            }
        } else {
            resp = { 
                "Status": "Failed", 
                "Message": "User ID Does Not Exist" 
            };
        }
        res.status(200).json(resp);
    } catch (error) {
        const resp = { 
            "Status": "Failed", 
            "Message": "Error in login" 
        };
        res.status(500).json(resp);
    }
};


export { register, login, userLogin};
