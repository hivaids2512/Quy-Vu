import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

export class ApiError extends Error {
  isOperational: boolean;
  status: number;
  constructor(statusCode: number, message: string, isOperational = true, stack = '') {
    super(message);
    this.status = statusCode;
    this.isOperational = isOperational;
    this.message = message;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export const errorHandler = (err: any, _req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }

  const status = err.status || httpStatus.INTERNAL_SERVER_ERROR;

  res.status(status);
  res.setHeader('Content-Type', 'application/json');

  return res.json({ error: err.message });
}
