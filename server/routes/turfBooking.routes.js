import express from 'express';
import { fetchAvailableTurfs, saveBooking } from '../controllers/turfBookingController.js';

const router = express.Router();

router.post('/fetchavailableturfs', fetchAvailableTurfs);
router.post('/savebooking', saveBooking);

export default router;
