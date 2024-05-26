import UsrProfile from '../models/user_profile.js';

export const register = async (req, res) => {
    try {
        const profiledtls = await UsrProfile.find({ emailid: req.body.emailid });
        if (profiledtls.length > 0) {
            const resp = { 
                "Status": "Failed", 
                "Message": "User profile already exists" 
            };
            return res.status(400).json(resp);
        } else {
            const profobj = new UsrProfile(req.body);
            await profobj.save();
            const resp = { 
                "Status": "Success", 
                "Message": "User profile created successfully" 
            };
            return res.status(201).json(resp);
        }
    } catch (error) {
        console.error(error);
        const resp = { 
            "Status": "Failed", 
            "Message": "Error in registering user profile" 
        };
        return res.status(500).json(resp);
    }
}

export const saveProfile = async (req, res) => {
    try {
        const profiledtls = await UsrProfile.find({ userid: req.body.userId });
        if (profiledtls.length > 0) {
            const resp = { 
                "Status": "Failed", 
                "Message": "Profile Details Already Saved. Please Edit." 
            };
            return res.status(400).json(resp);
        } else {
            const profobj = new UsrProfile(req.body.profile);
            profobj["userid"] = req.body.userId;
            await profobj.save();
            const resp = { 
                "Status": "Success", 
                "Message": "Profile Details Saved Successfully" 
            };
            return res.status(200).json(resp);
        }
    } catch (error) {
        console.error(error);
        const resp = { 
            "Status": "Failed", 
            "Message": "Error in saving Profile Details" 
        };
        return res.status(500).json(resp);
    }
}

export const editProfile = async (req, res) => {
    try {
        const usrdtls = await UsrProfile.findOne({ emailid: req.body.emailid });
        if (usrdtls) {
            usrdtls.username = req.body.profile.username;
            usrdtls.emailid = req.body.emailid;
            usrdtls.phoneno = req.body.profile.phoneno;
            await usrdtls.save();
            const resp = { 
                "Status": "Success", 
                "Message": "Profile Details Edited Successfully" 
            };
            return res.status(200).json(resp);
        } else {
            const resp = { 
                "Status": "Failed", 
                "Message": "Profile Details Does Not Exist. Cannot Edit" 
            };
            return res.status(404).json(resp);
        }
    } catch (error) {
        console.error(error);
        const resp = { 
            "Status": "Failed", 
            "Message": "Error in editing Profile Details" 
        };
        return res.status(500).json(resp);
    }
}


export const userDetails = async (req, res) => {
    try {
        const profiledtls = await UsrProfile.find({ emailid: req.body.emailId});
        if (profiledtls.length == 0) {
            const resp = { 
                "Status": "Failed", 
                "Message": "User profile doesn't exists" 
            };
            return res.status(400).json(resp);
        } else {
            const resp = { 
                "Status": "Success", 
                "Message": "User profile fetched",
                "user" : profiledtls[0]
            };
            return res.status(201).json(resp);
        }
    } catch (error) {
        console.error(error);
        const resp = { 
            "Status": "Failed", 
            "Message": "Error in get user profile" 
        };
        return res.status(500).json(resp);
    }
 
}