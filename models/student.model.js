const express = require('express');
const mongoose=require ('mongoose');

const studentSchema = mongoose.Schema({
    rollno: Number,
    studentname: String,
    age: Number,
    marks:[{
        sub1: Number,
        sub2: Number,
        sub3: Number
    }]
}) ;

module.exports = mongoose.model('student',studentSchema);
