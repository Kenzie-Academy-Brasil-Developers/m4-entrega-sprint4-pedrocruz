import { NextFunction, Request, Response } from "express";
import { AppError } from "./app.errors";

export const handleError = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    console.log(error);
    return res.status(error.statusCode).send({
      message: error.message,
    });
  }

  console.log(error);

  return res.status(500).json({
    message: "Internal server error",
  });
};
