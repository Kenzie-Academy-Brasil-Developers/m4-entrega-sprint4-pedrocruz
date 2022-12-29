import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { IUser, IUserRequest } from "../interfaces/users";
import { userWithoutPasswordSerializer } from "../serializers/user.serializers";

export const createUserService = async (
  userData: IUserRequest
): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const createUser = userRepository.create(userData);

  await userRepository.save(createUser);

  const userWithoutPassword = await userWithoutPasswordSerializer.validate(
    createUser,
    {
      stripUnknown: true,
    }
  );

  return userWithoutPassword;
};
