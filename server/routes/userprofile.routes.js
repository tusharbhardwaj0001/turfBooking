import express from 'express';
import { register, saveProfile, editProfile, userDetails } from '../controllers/userProfileController.js';

const router = express.Router();


// final route to register a new user
router.post('/register', register);


router.post('/save', saveProfile);
router.post('/edit', editProfile);



// get the user details
router.get('/user', userDetails);

export default router;
