const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
const Todo = require('../models/todomodel');


/**
 * for creating the task
 *  */ 

exports.createTodo = asyncHandler(async(req,res) =>{
    const{task,active}= req.body;
    const  todo = await Todo.create({task,active});
    res.status(201).json({
        success:true,
        data: todo,
        message:'Task is created successfully'
    })

})

/**for updating the task */

exports.updateTask = asyncHandler(async(req,res) =>{
    const{task,active}= req.body;
    const existTask =await Todo.findOne({_id:req.params.id})
    if(existTask){
        existTask.task=task;
        existTask.active= active;const updatedTask = await existTask.save();
        res.status(200).json({
            sucess: true,
            data:updatedTask,
            message: 'Task is updated Succesfully'
        })
    }
    else{
        res.status(401).json({
            sucess: false,
            data:null,
            message: 'Task  is not found'
        })
    }

})
/**for deleting  the task
 * 
*/

exports.deleteTask = asyncHandler(async(req,res) =>{
    const existTask =await Todo.findOne({_id:req.params.id})
    if(existTask){
       await existTask.remove();
        res.status(200).json({
            sucess: true,        
            message: 'Task is Deleted Succesfully'
        })
    }
    else{
        res.status(401).json({
            sucess: false,
            data:null,
            message: 'Task  is not found'
        })
    }

})


/**to Get   the Data
 * 
*/

exports.getTask = asyncHandler(async(req,res) =>{
    const existTask =await Todo.findOne({_id:req.params.id})
    if(existTask){
       
        res.status(200).json({
            sucess: true,   
            data:existTask,  
            message: 'Task  fetched Succesfully'
        })
    }
    else{
        res.status(401).json({
            sucess: false,
            data:null,
            message: 'Task  is not found'
        })
    }

})



/**to Get all   the Data
 * 
*/

exports.getallTask = asyncHandler(async(req,res) =>{
    const allTask =await Todo.find({})
    if(allTask){
       
        res.status(200).json({
            sucess: true,   
            data:allTask,  
            message: 'all Task(s) fetched Succesfully'
        })
    }
    else{
        res.status(401).json({
            sucess: false,
            data:null,
            message: 'Task  is not found'
        })
    }

})


