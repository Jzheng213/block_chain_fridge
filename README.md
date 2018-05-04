Setup: 
1. npm install (Backend)
2. cd into front end & npm install  (FrontEnd)
3. install sequelize-cli -global
4. cd into base dir & npm setup (this should run webpack after setup)
5. go to server/config/config.json and change your username to match your default psql username


3. cd into server folder
   * change config/config.json username to match your default name
   * sequelize db:migrate
   * sequelize db:seed:all

4. cd to base dir
   * npm build
   * npm webpack

5. cd into frontend and run
   * npm build

6. Starting Server
   * in base dir run
     * if webpack isn't already running, npm webpack
     * npm start - to run back end server
   * in frontend dir run
     * npm start - to run front end server
