//Instantiate database 

//model dependencies 
const Sequelize = require('sequelize')

//entry point
const db = new Sequelize('Cap-Backend', 'postgres', 'ht2077',{
    host: 'localhost',
    dialect: 'postgres'
});

//Export sequelize 
module.exports = db;