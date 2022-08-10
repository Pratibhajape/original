const express = require('express');
const mongoose=require ('mongoose');

const signinSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    address:String,
    mobile_no:Number
 }) ;

module.exports = mongoose.model('signin',signinSchema);