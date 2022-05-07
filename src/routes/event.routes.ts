import { Router, Request, Response } from 'express';
import { check } from 'express-validator';
import { create, update } from '../controllers/event.controller';
import fieldsValidation from '../middlewares/fieldsValidator';
import JWTValidate from '../middlewares/jwtValidator';

const router = Router();

router.post('/', [
  JWTValidate,
  check('id', 'Is not a valid id').isLength({ min: 6, max: 36 }),
  check('patient', 'Is not a valid patient').isLength({ min: 6, max: 36 }),
  check('treatment', 'Is not a valid treatment').isLength({ min: 6, max: 36 }),
  check('start_date', 'Is not a valid start_date').isLength({ min: 10, max: 10 })
    .matches(/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/),
  check('start_hour', 'Is not a valid start_hour').isLength({ min: 5, max: 5 })
    .matches(/^([0-1][0-9]|2[0-3])(\/|-|:)([0-5][0-9])$/),
  check('end_date', 'Is not a valid end_date').isLength({ min: 10, max: 10 })
    .matches(/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/),
  check('end_hour', 'Is not a valid end_hour').isLength({ min: 5, max: 5 })
    .matches(/^([0-1][0-9]|2[0-3])(\/|-|:)([0-5][0-9])$/),
  fieldsValidation,
], async (req: Request, res: Response) => {
  try {
    const event = await create(req.body);
    res.status(200).json(event);
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
});

router.put('/:id', [
  JWTValidate,
  check('id', 'Is not a valid id').isLength({ min: 6, max: 36 }),
  check('patient', 'Is not a valid patient').optional().isLength({ min: 6, max: 36 }),
  check('treatment', 'Is not a valid treatment').optional().isLength({ min: 6, max: 36 }),
  check('start_date', 'Is not a valid start_date').optional().isLength({ min: 10, max: 10 })
    .matches(/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/),
  check('start_hour', 'Is not a valid start_hour').optional().isLength({ min: 5, max: 5 })
    .matches(/^([0-1][0-9]|2[0-3])(\/|-|:)([0-5][0-9])$/),
  check('end_date', 'Is not a valid end_date').optional().isLength({ min: 10, max: 10 })
    .matches(/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/),
  check('end_hour', 'Is not a valid end_hour').optional().isLength({ min: 5, max: 5 })
    .matches(/^([0-1][0-9]|2[0-3])(\/|-|:)([0-5][0-9])$/),
  fieldsValidation,
], async (req: Request, res: Response) => {
  try {
    const idEvent = req.params.id;
    const event = await update(idEvent, req.body);
    res.status(200).json(event);
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
});

export default router;
