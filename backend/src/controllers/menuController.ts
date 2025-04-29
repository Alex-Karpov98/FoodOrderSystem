import { Request, Response } from 'express';
import * as menuService from '../services/menuService';

export const getMenu = async (req: Request, res: Response) => {
  const menuItems = await menuService.getMenu();
  res.json(menuItems);
};

export const createMenuItem = async (req: Request, res: Response) => {
  const newItem = await menuService.createMenuItem(req.body);
  res.status(201).json(newItem);
};
