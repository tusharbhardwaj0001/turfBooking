import express from 'express';
import { fetchUserHistory } from '../controllers/userHistoryController.js';

const router = express.Router();

router.post('/buttonpress', fetchUserHistory);

export default router;
