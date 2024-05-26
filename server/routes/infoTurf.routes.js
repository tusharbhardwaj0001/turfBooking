// infoTurfRoutes.js

import express from 'express';
import { buttonPress, saveInfo, editInfo } from '../controllers/infoTurfController.js';

const router = express.Router();

router.post('/buttonpress', buttonPress);
router.post('/save', saveInfo);
router.post('/edit', editInfo);

export default router;
