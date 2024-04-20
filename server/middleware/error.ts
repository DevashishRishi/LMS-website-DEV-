import { NextFunction, Request, Response } from "express";
import ErrorHandeler from "../utils/ErrorHandeler";

export const ErrorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";

  if (err.name === "CastError") {
    const message = "Resource not Found. Invalid: ${err.path}";
    err = new ErrorHandeler(message, 400);
  }

  if (err.code === 11000) {
    const message = "Duplicate ${Object.keys(err.keyValue)} entered";
    err = new ErrorHandeler(message, 400);
  }

  if (err.code === "JsonWebTokenError") {
    const message = "Json web token is invalid, try again";
    err = new ErrorHandeler(message, 400);
  }

  if (err.code === "TokenExpiredError") {
    const message = "Json web token is expired, try again";
    err = new ErrorHandeler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
