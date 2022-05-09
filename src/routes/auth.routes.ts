import { Router, Request, Response } from 'express';
import { check } from 'express-validator';
import login from '../controllers/auth.controller';
import fieldsValidation from '../middlewares/fieldsValidator';

const router = Router();

router.post('/login', [
  check('email', 'Is not a valid email').isEmail(),
  check('password', 'Is not a valid Password').notEmpty(),
  fieldsValidation,
], async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const { token, user } = await login(email, password);

    res.status(200).header('auth-token', token).json(user);
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
});

export default router;
