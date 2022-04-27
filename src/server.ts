import express, { Application } from 'express';
import cors from 'cors';

class Server{
    private app: Application;
    private port: string;
    private paths = {

    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '9000';

        //  TODO: DBConnection

        //  TODO: Middlewares

        //  TODO: Routes

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto: ', this.port);
        })
    }

}

export default Server;