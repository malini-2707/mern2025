const express = require('express');
const todoRoute = express.Router();
const {getTodo,postTodo,getTodoById,putTodo,deleteTodo} = require('../controllers/todoControllers')
todoRoute.get('/',getTodo);
todoRoute.get('/:id',getTodoById);
todoRoute.put('/edit/:id',putTodo);
todoRoute.post('/create',postTodo);
todoRoute.delete('/delete/:id',deleteTodo);

module.exports = todoRoute