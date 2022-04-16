const express = require('express');
const router = express.Router();
const {createTodo, updateTask,deleteTask,getTask,getallTask} = require("../controllers/todocontroller");
router.route('/').post(createTodo);
router.route('/:id').put(updateTask);
router.route('/:id').delete(deleteTask);
router.route('/:id').get(getTask);
router.route('/').get(getallTask);
module.exports = router