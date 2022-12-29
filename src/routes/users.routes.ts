import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
} from "../controllers/user.controllers";
import { ensureAdmMiddleware } from "../middlewares/ensureAdm.middleware";
import { ensureAuthMiddleware } from "../middlewares/Auth.Middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/datalsValid.middleware";
import { verifyUserNotExistMiddleware } from "../middlewares/verifyUserNotExist.middleware";
import { verifyUserEmailExistsMiddleware } from "../middlewares/verifyUserEmailExists.middleware";
import { verifyFieldsMiddleware } from "../middlewares/verifyFields.middleware";
import {
  updateUserSerializer,
  userSerializer,
} from "../serializers/user.serializers";

export const userRoutes = Router();

userRoutes.get(
  "",
  ensureAuthMiddleware,
  ensureAdmMiddleware,
  listUsersController
);
userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSerializer),
  verifyUserEmailExistsMiddleware,
  createUserController
);
userRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  verifyFieldsMiddleware,
  verifyUserNotExistMiddleware,
  ensureDataIsValidMiddleware(updateUserSerializer),
  updateUserController
);
userRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureAdmMiddleware,
  verifyUserNotExistMiddleware,
  deleteUserController
);
