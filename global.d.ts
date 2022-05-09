/* eslint-disable @typescript-eslint/no-unused-vars */
/*
    This file is to set the .env variables
    visible and the editor can autocomplete them
*/
namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    PORT: string;
    JWT_KEY: string;
    DB_DATABASE: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_HOST: string;
  }
}
