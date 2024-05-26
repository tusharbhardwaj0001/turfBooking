
import express from 'express';
import { register, login, userLogin } from '../controllers/credController.js';

const router = express.Router();

router.post('/register', register);

// user login url
router.post('/login', userLogin);

export default router;
