import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/app.errors";

export const ensureAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user.isAdm) {
    next();
  } else {
    throw new AppError("missing adm permissions", 403);
  }
};
