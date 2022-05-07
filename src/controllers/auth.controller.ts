import bcrypt from 'bcryptjs';
import User from '../models/user.model';
import generateJWT from '../helpers/jwtGenerator';

const login = async (email: string, password: string) => {
  try {
  //  Verify if the user exists in DB
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error('Invalid Credentials');
    }
    //  Verify the password
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      throw new Error('Invalid Credentials');
    }
    const token: any = await generateJWT(user.id);

    return {
      user: user.email,
      token,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default login;
