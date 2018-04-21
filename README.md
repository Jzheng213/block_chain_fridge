### Setting Up Migration and Models using Sequelize and Node.JS

1.  Change config/config.json file to match your postgres username and password on your personal computer  

2.  Run `node_modules/.bin/sequelize db:create`. This creates the postgres database on your computer.

3.  Then run `node_modules/.bin/sequelize model:generate --name ${Model's Name} --attributes ${attributeName}:type,${attributeName:type},etc.`  
Here is an example of a model: `node_modules/.bin/sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string`

4.  The step above generates the migration and model file. Once you are satisfied with the model, use `node_modules/.bin/sequelize db:migrate` to add the model to the database. Last migration can be undone use `db:migrate:undo`. You can also use `db:migrate:undo:all`to revert all changes.

5. Read http://docs.sequelizejs.com/manual/tutorial/migrations.html for further instruction about seeding and steps we have not tested out yet.
