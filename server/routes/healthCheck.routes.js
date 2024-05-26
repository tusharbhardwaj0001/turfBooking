import express from 'express';

const router = express.Router();


router.get("/", (req, res) => {
    console.log("inside this ")
    return res.status(200).json({
        message: "Working perfectly"
    })
});



export default router;
