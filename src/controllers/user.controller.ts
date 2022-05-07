/* eslint-disable no-param-reassign */
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import User, { UserInput, UserOutput } from '../models/user.model';

const create = async (payload: UserInput): Promise<UserOutput> => {
  const userExists = await User.findOne({ where: { email: payload.email } });
  if (userExists) {
    throw new Error(`The user with the email ${payload.email} is already registered`);
  }
  const phoneExists = await User.findOne({ where: { phone: payload.phone } });
  if (phoneExists) {
    throw new Error(`The user with the phone ${payload.phone} is already registered`);
  }
  const salt = bcrypt.genSaltSync();
  payload.password = bcrypt.hashSync(payload.password, salt);
  payload.id = uuidv4();
  const { dataValues } = await User.create(payload);

  if (!dataValues) {
    throw new Error('Something goes wrong creating the user!');
  }
  //  Password deleted from object
  delete dataValues.password;

  return dataValues;
};

export default create;
