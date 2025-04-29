import { Request, Response } from 'express';
import * as orderService from '../services/orderService';

export const createOrder = async (req: Request, res: Response) => {
  const newOrder = await orderService.createOrder(req.body);
  res.status(201).json(newOrder);
};
