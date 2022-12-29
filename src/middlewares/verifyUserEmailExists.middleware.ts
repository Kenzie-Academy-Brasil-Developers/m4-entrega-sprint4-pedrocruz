import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/app.errors";

export const verifyUserEmailExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRegistred = AppDataSource.getRepository(User);

  const user = await userRegistred.findBy({
    email: req.body.email,
  });

  if (user.length > 0) {
    throw new AppError("User already registred", 400);
  }

  next();
};
