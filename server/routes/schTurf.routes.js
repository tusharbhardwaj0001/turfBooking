import express from 'express';
import { scheduleTurf } from '../controllers/schTurfController.js';

const router = express.Router();

router.post('/schedule', scheduleTurf);

export default router;
