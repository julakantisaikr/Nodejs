const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const path = require('path');
const todoRoute = require('./routes/todo');


const connectDB = require('./config/db');
connectDB();


const app = express();
app.use(express.json())


if (process.env.MODE === 'development') {
    app.use(morgan('dev'))
}
const PORT = process.env.PORT || 5000;
app.use('/api/task',todoRoute)


app.get('/',(req,res) =>{
    res.send('api is running good')
})

app.listen(parseInt(PORT),console.log(`server is Running on Port ${PORT}`.yellow.bold));

