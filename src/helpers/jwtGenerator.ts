import jwt from 'jsonwebtoken';
import config from '../config/config';

const generateJWT = (uid = '') => (
  new Promise((resolve) => {
    const payload = uid;
    //  Create a token with the sign function
    jwt.sign(payload, config.JWT_KEY, (err, token) => {
      if (err) {
        throw new Error(`The token can't be created: ${err}`);
      } else {
        resolve(token);
      }
    });
  })
);

export default generateJWT;
