import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/app.errors";

export const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: id,
  });

  if (!user.isActive) {
    throw new AppError("User is not active", 400);
  } else {
    user.isActive = false;

    await userRepository.save(user);

    return {};
  }
};
