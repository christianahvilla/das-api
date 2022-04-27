import dotenv from 'dotenv';
import Server from './src/server';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
dotenv.config();

const server = new Server();
server.listen();
