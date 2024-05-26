// infoTurfController.js

import InfoTurf from '../models/info_turf.js'; 
import express from 'express';

const router = express.Router();

export const buttonPress = async (req, res) => {
    try {
        let resp;
        const infodtls = await InfoTurf.find({ adminid: req.body.tokenid });
        if (infodtls.length === 0) {
            const timings = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
            const listimings = timings.map(time => ({ time, status: "NA" }));
            const info = {
                adminid: req.body.tokenid,
                turfname: "",
                location: "",
                pricewithlight: "",
                pricewithoutlight: "",
                starttimewithoutlight: "",
                endtimewithoutlight: "",
                turftiming: listimings
            };
            resp = { "Status": "Save", "Message": "Information Does Not Exist", "info": info };
        } else if (infodtls.length === 1) {
            resp = { "Status": "Edit", "Message": "Information Exists", "info": infodtls[0] };
        } else {
            resp = { "Status": "Failed", "Message": "Unable to fetch Turf Information" };
        }
        res.status(200).json(resp);
    } catch (error) {
        const resp = { "Status": "Failed", "Message": "Error in fetching Turf Information" };
        res.status(500).json(resp);
    }
};

export const saveInfo = async (req, res) => {
    try {
        let resp;
        const infodtls = await InfoTurf.find({ adminid: req.body.tokenid });
        if (infodtls.length > 0) {
            resp = { "Status": "Failed", "Message": "Information Already Exists. Please Edit." };
        } else {
            const infoturf = new InfoTurf(req.body.info);
            await infoturf.save();
            resp = { "Status": "Success", "Message": "Information Saved Successfully" };
        }
        res.status(200).json(resp);
    } catch (error) {
        const resp = { "Status": "Failed", "Message": "Error in saving Turf Information" };
        res.status(500).json(resp);
    }
};

export const editInfo = async (req, res) => {
    try {
        let resp;
        const infodtls = await InfoTurf.find({ adminid: req.body.tokenid });
        if (infodtls.length === 1) {
            const info = req.body.info;
            infodtls[0].set(info);
            await infodtls[0].save();
            resp = { "Status": "Success", "Message": "Information Edited Successfully" };
        } else {
            resp = { "Status": "Failed", "Message": "Information Does Not Exist. Cannot Edit" };
        }
        res.status(200).json(resp);
    } catch (error) {
        const resp = { "Status": "Failed", "Message": "Error in editing Turf Information" };
        res.status(500).json(resp);
    }
};

