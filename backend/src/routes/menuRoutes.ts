import express from 'express';
import * as menuController from '../controllers/menuController';

const router = express.Router();

router.get('/', menuController.getMenu);
router.post('/', menuController.createMenuItem);

export default router;
