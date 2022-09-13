const Sequelize = require('sequelize')
const DB_NAME = 'test'
const USER_NAME = 'todo'
const PASSWORD = ''
const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
  dialect: 'mysql',
  //драйвер взаимодействия с бд
})


module.exports = sequelize