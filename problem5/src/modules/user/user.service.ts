import { ApiError } from '../../middlewares/error.middleware';
import { IUser, User } from '../../models';
import httpStatus from 'http-status';

export const getUsers = async (
  { page = 1, perPage = 10, search }: { page: number, perPage: number, search?: string }
): Promise<IUser[]> => {
  const condition: Record<string, any> = {};
  if (search) {
    condition['name'] = { $regex: search };
  }
  const users = await User.find(condition, {}, { skip: (page - 1) * perPage, limit: perPage });

  return users;
}

export const getUser = async (id: string): Promise<IUser> => {
  const user = await User.findById(id);

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  return user;
}

export const createUser = async (data: IUser): Promise<{ id: string }> => {
  const user = await User.create(data);
  return { id: user._id.toString() };
}

export const updateUser = async (id: string, data: IUser): Promise<{ id: string }> => {
  await User.findOneAndUpdate({ _id: id }, data);
  return { id };
}

export const deleteUser = async (id: string): Promise<{ id: string }> => {
  await User.deleteOne({ _id: id });
  return { id };
}
