const express = require('express');
const app = express();

const mongoose=require ('mongoose');
const bodyParser = require('body-parser');

const port=3000;

app.use(bodyParser.json());
const userRouter = require('./routes/user.router');
const studentRouter = require('./routes/student.router');
const signinRouter=require('./routes/signin.router');
const loginRouter=require('./routes/login.routes');


app.use('/user', userRouter);
app.use('/student', studentRouter);
app.use('/signin',signinRouter);
app.use('/login',loginRouter);



async function connectDb(){

  await mongoose.connect('mongodb://127.0.0.1:27017/Excercise');
  console.log("Connected") }

  
connectDb();

app.listen(3000);

module.exports=app;