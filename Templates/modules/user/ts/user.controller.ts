import { Request, Response } from 'express';
import * as userService from './user.service.js';

export const getUsers = async (req: Request, res: Response) => {
  const users = await userService.getUsers();
  res.json({ success: true, data: users });
};

export const getUser = async (req: Request, res: Response) => {
  const user = await userService.getUserById(req.params.id);
  res.json({ success: true, data: user });
};

export const createUser = async (req: Request, res: Response) => {
  const user = await userService.createUser(req.body);
  res.status(201).json({ success: true, data: user });
};

export const updateUser = async (req: Request, res: Response) => {
  const user = await userService.updateUser(req.params.id, req.body);
  res.json({ success: true, data: user });
};

export const deleteUser = async (req: Request, res: Response) => {
  await userService.deleteUser(req.params.id);
  res.json({ success: true });
};