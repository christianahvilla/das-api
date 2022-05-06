import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import User, { UserInput, UserOutput } from '../models/user.model';

const create = async (payload: UserInput): Promise<UserOutput> => {
  const {
    email,
    name,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    last_name,
    phone,
  } = payload;
  const userExists = await User.findOne({ where: { email } });
  if (userExists) {
    throw new Error(`The user with the email ${email} is already registered`);
  }
  const phoneExists = await User.findOne({ where: { phone } });
  if (phoneExists) {
    throw new Error(`The user with the phone ${phone} is already registered`);
  }

  const salt = bcrypt.genSaltSync();
  const password = bcrypt.hashSync(payload.password, salt);
  const id = uuidv4();
  const data = {
    id,
    email,
    name,
    last_name,
    phone,
    password,
  };
  const { dataValues } = await User.create(data);

  if (!dataValues) {
    throw new Error('Something goes wrong creating the user!');
  }
  //  Password deleted from object
  delete dataValues.password;

  return dataValues;
};

export {
  create,
};
