const express = require('express')
const app = express();
const sequelize = require('./utils/database')
const todoRouters = require('./routers/todo')
const PORT = process.env.PORT || 3000 //объект для работы с портами, по умолчанию port 3000
const path = require('path')
// const { join } = require('path') //


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json()) //подключам возможномть парсинга json-файла
app.use('/api/todo', todoRouters)

app.use((req, res) => {
  res.sendFile('/index.html')
})
async function start() {
  try {
    await sequelize.sync() // соединить с бд,sync-метод подкл. sequalize 
  }
  catch (e) {
    console.log(e)
  }
}
start()
app.listen(PORT)