// credAdminController.js

import bcrypt from 'bcryptjs';
import CredAdmin from '../models/cred_admin.js';

const register = async (req, res) => {
    try {
        const data = await CredAdmin.find({ userid: req.body.credentials.userid });
        let resp;
        if (data.length > 0) {
            resp = { "Status": "Failed", "Message": "User ID Already Exists" };
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.credentials.password, salt);
            const newuser = new CredAdmin({
                userid: req.body.credentials.userid,
                password: hash
            });
            await newuser.save();
            resp = { "Status": "Success", "Message": "Registered Successfully" };
        }
        res.status(200).json(resp);
    } catch (error) {
        const resp = { "Status": "Failed", "Message": "Error in Registration" };
        res.status(500).json(resp);
    }
};

const login = async (req, res) => {
    try {
        const data1 = await CredAdmin.find({ userid: req.body.credentials.userid });
        let resp;
        if (data1.length === 1) {
            const hash = data1[0].password;
            const value = bcrypt.compareSync(req.body.credentials.password, hash);
            if (value === false) {
                resp = { "Status": "Failed", "Message": "Incorrect Password" };
            } else {
                resp = { "Status": "Success", "tokenid": data1[0]._id };
            }
        } else {
            resp = { "Status": "Failed", "Message": "User ID Does Not Exist" };
        }
        res.status(200).json(resp);
    } catch (error) {
        const resp = { "Status": "Failed", "Message": "Error in login" };
        res.status(500).json(resp);
    }
};




export { register, login};
