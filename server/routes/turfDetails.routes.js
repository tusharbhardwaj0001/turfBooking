import express from 'express';
import { fetchDetails } from '../controllers/turfDetailsController.js';

const router = express.Router();

router.post('/fetchdtls', fetchDetails);

export default router;
