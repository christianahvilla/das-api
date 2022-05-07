import express, { Application } from 'express';

import cors from 'cors';

import config from './config/config';
import db from './database/connection';
import authRoutes from './routes/auth.routes';

class Server{
    private app: Application;
    private port: number;
    private paths = {
        auth: '/api/auth',
    }

    constructor(){
        this.app = express();
        this.port = config.PORT;

        this.dbConnection();

        this.middlewares();

        this.routes();

    }

    async dbConnection(){
        try {
            await db.authenticate();
            console.log('DB Online');
        } catch (error: any) {
            throw new Error(error);
        }
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.paths.auth, authRoutes);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto: ', this.port);
        })
    }

}

export default Server;
