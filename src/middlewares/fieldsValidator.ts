import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

// eslint-disable-next-line consistent-return
const fieldsValidation = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }
  next();
};

export default fieldsValidation;
