import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/users";
import { createSessionService } from "../services/createSession.service";

export const createSessionController = async (req: Request, res: Response) => {
  const sessionData: IUserLogin = req.body;
  const [status, token] = await createSessionService(sessionData);
  return res.status(status as number).json({ token });
};
