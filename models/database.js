
var constring = "postgres://postgres:Asdf!234@localhost:5432/Axis";

module.exports.connect = function(){
var knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'Asdf!234',
    database : 'Axis',
    port: 5432
  }
});

return knex;
};


