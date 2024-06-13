const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Parcial','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;