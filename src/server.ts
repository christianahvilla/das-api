import express, { Application } from 'express';

import cors from 'cors';

import config from './config/config';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import eventRoutes from './routes/event.routes';
import dbInit from './database/init';

class Server {
  private app: Application;

  private port: number;

  private paths = {
    auth: '/api/auth',
    users: '/api/users',
    events: '/api/events',
  };

  constructor() {
    this.app = express();
    this.port = config.PORT;

    dbInit();

    this.middlewares();

    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.paths.auth, authRoutes);
    this.app.use(this.paths.users, userRoutes);
    this.app.use(this.paths.events, eventRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      // eslint-disable-next-line no-console
      console.log('Servidor corriendo en el puerto: ', this.port);
    });
  }
}

export default Server;
