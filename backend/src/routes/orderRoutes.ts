import express from 'express';
import * as orderController from '../controllers/orderController';

const router = express.Router();

router.post('/', orderController.createOrder);

export default router;
