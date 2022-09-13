const { Router } = require('express')
// const router = requre('exprss').router
const Todo = require('../models/todo')
const router = Router()

router.get('/', (req, res) => {
  try {

  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'serverError'
    }) //проблема с сервером
  }
  // res.json({ a: 1 }) //мы создаём json строку, передаём объект: свойство a, значение :1
})
router.post('/', async (req, res) => {
  try {
    const todo = await Todo.create({
      title: req.body.title,
      done: false
    })
    res.status(201).json({ todo }) //объект был создан,закодирован и передан в базу
  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'serverError'
    }) //проблема с сервером
  }
})

router.put('/:id', (req, res) => {  //put-изменение свойства
  try {

  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'serverError'
    }) //проблема с сервером
  }

})
router.delete('/:id', (req, res) => {
  try {

  } catch (e) {
    console.log(e)
    res.status(500).json({
      message: 'serverError'
    }) //проблема с сервером
  }

})


module.exports = router





