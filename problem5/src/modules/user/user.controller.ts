import { Request, Response, NextFunction } from 'express';
import * as userService from './user.service';

export const getUsers = async (req: Request, res: Response) => {
  const { page, perPage, search } = req.query;
  //@ts-ignore
  const result = await userService.getUsers({ page, perPage, search });
  res.send(result);
};

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await userService.getUser(id!);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body;
    const result = await userService.createUser(data);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body;
    const { id } = req.params;
    const result = await userService.updateUser(id!, data);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await userService.deleteUser(id!);
    res.json(result);
  } catch (error) {
    next(error);
  }
};