const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-completed','root','2804As@123',{
    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize;