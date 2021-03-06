'use strict';

const express = require('express');
const router = express.Router();

const Todo = require('../models/todo');

//base url: /api/todos

// PUT /api/todos/15423123sfddsfsd52423/toggle
router.put('/:id/toggle', (req, res) => {

//model method
  Todo.toggle(req.params.id, (err, savedTodo) => {
    //find the todo by id
    //toggle isComplete
    //save the todo
    //pass the update todo into the call back
    res.status(err ? 400 : 200).send(err || savedTodo);
  });
})


//instance method
  // Todo.findById(req.params.id, (err, todo) => {
  //   todo.toggle((err, newTodo) => {
  //
  //   })
  // })


router.route('/')
.get((req, res) => {
  Todo.find({}, (err, todos) => {
    res.status(err ? 400 : 200).send(err || todos);
  });
})
.post((req, res) => {
  Todo.create(req.body, (err, newTodo) => {
    res.status(err ? 400 : 200).send(err || newTodo);
  });
})


router.route('/:id')
.get((req, res) => {
  Todo.findById(req.params.id, (err, todo) => {
    res.status(err ? 400 : 200).send(err || newTodo);
  });
})
.put((req, res) => {
  Todo.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true},  (err, todo) => {
    res.status(err ? 400 : 200).send(err || todo);
  });
})
.delete((req, res) => {
  Todo.findByIdAndRemove(req.params.id, err => {
    res.status(err ? 400 : 200).send(err);
  })
})










module.exports = router;
