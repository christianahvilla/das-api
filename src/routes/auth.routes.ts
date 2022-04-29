import { Router, Request, Response } from 'express';
import {login} from '../controllers/auth.controller'

const router = Router();

router.post('/login', (req: Request, res: Response) => {
    //  TODO: Middlewares to validate data
    const loginData = req.body;
    login(loginData);

    res.status(200).json({
        msg: 'Si funciona we'
    })
})


export default router;
