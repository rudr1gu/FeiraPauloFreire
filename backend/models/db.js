const Sequelize = require('sequelize');
const sequelize = new Sequelize('portifolio','root','', {
    host: "localhost",
    dialect: "mysql"
})

var db ={};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;