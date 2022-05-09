# DAS-API
DAS-API is the backend API for the DAS project

### Built with
* [Node JS](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Express](https://expressjs.com) - Fast, unopinionated, minimalist web framework for Node.js
* [Typescript](https://www.typescriptlang.org) - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
* [MySQL](https://www.mysql.com) - An open source database manager
* [Sequelize](https://sequelize.org) - Sequelize is a modern TypeScript and Node.js ORM for Postgres, MySQL, MariaDB, SQLite and SQL Server, and more
* [Docker](https://www.docker.com) - Docker, a subset of the Moby project, is a software framework for building, running, and managing containers on servers and the cloud.
* And More..
## Prerequisites
* Node v10.16.0
* NPM 8.0.0
## Installing
* Clone or download repository.
```bash
git clone git@github.com:christianahvilla/das-api.git
```
* Install dependencies and libraries
```bash
npm i
```
## Configuring
Create a .env file on the source of the project
and follow the .env.example to create all the environment variables
| Name                          | Description                         | Values                                  |
| -------------------------- | ---------------------------------| --------------------------------------------|
|NODE_ENV           | Set the environment for the project           | 'development' or 'production'      |
|PORT|Port to run the API| Any available port number|
|JWT_KEY|Key to sign the auth tokens|Any string key|
|DB_HOST|IP/Hostname for the Database server|Any hostname string|
|DB_DATABASE|The database name|Any string|
|DB_USERNAME|The username for the database|Any string|
|DB_PASSWORD|The password for the database user|Any string|
## Start the Docker Database (Optional)
Follow the docker guide to install Docker
* Run the docker mysql server
```bash
docker-compose up
```
## Run the project
* Compile the typescript project
```bash
npm run postinstall
```
* Start the NodeJs Engine
```bash
npm start
```
## All the Node scripts
| Script                          | Description                         | Usage                          |
| ----------------------------- | ------------------------------------| ------------------------------------|
|watch-node|Start Nodemon|npm run-script watch-node|
|watch-ts|Run the tsc command in watch mode|npm run-script watch-ts|
|postinstall|Compile just one time|npm run postinstall|
|start|Start the NodeJs Environment|npm start|
|test|Run the Jest tests|npm run test|
|lint|Run eslint formater|npm run lint|

## Authors
* **Pedro Antonio García Castañeda** - *Backend Developer* - [Santander Global Tech](https://santandergto.com)

* **Christian Alejandro Herrejon Villa** - *Full Stack Developer* - [Apex Systems](https://www.apexsystems.com/)
## License
This project is licensed under the GNU License - see the LICENSE file for details
