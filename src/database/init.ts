import { User, Event } from '../models';
import config from '../config/config';

const isDev = config.NODE_ENV === 'development';

const dbInit = async () => {
  try {
    await User.sync({ alter: isDev });
    await Event.sync({ alter: isDev });

    // eslint-disable-next-line no-console
    console.log('DB Initializated');
  } catch (error: any) {
    throw new Error(error);
  }
};

export default dbInit;
