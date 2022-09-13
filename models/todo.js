const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const todo = sequelize.define('Todo', {
  id: {
    primaryKey: true, //поле-внешний ключ
    autoIncrement: true,
    allowNull: false, //запретить поле, чтобы не было отрицательным
    type: Sequelize.INTEGER
  },
  done: {
    allowNull: false,
    type: Sequelize.BOOLEAN, // тип ответа
  },
  title: Sequelize.STRING,
  // data: {
  //   allowNull: false,
  //   type: Sequelize.DATE
  // }
})

module.exports = todo