import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { Identifier } from 'sequelize/types';
import config from '../config/config';
/*
  Interface only used in this file to extend the return datavalues
  of the verify token function
*/
interface PayloadToken {
  uid: Identifier
}

const JWTValidate = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('auth-token');
  //  Validate if there is a token in the request
  if (!token) {
    return res.status(401).json({
      msg: 'There is not a token in the request',
    });
  }
  try {
    //  Verify the token
    const { uid } = jwt.verify(token, config.JWT_KEY) as PayloadToken;
    if (!uid) {
      return res.status(401).json({ msg: 'Invalid Token' });
    }
    return next();
  } catch (error) {
    return res.status(401).json({ msg: 'Invalid Token!' });
  }
};

export default JWTValidate;
