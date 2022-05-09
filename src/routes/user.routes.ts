import { Router, Request, Response } from 'express';
import { check } from 'express-validator';
import fieldsValidation from '../middlewares/fieldsValidator';
import create from '../controllers/user.controller';

const router = Router();

router.post('/', [
  check('email', 'Is not a valid email').isEmail(),
  check('name', 'Is not a valid name').isLength({ min: 2 }),
  check('last_name', 'Is not a valid last_name').isLength({ min: 2 }),
  check('phone', 'Is not a valid phone number').isLength({ min: 7 }),
  check('password', 'Is not a valid password').isLength({ min: 6 }),
  fieldsValidation,
], async (req: Request, res: Response) => {
  try {
    const user = await create(req.body);

    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
});

export default router;
