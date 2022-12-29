import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/app.errors";

export const verifyUserNotExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRegistred = AppDataSource.getRepository(User);

  const user = await userRegistred.findOneBy({
    id: req.params.id,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return next();
};
