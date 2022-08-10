const express = require('express');

const router = express.Router();

const Student = require('../models/student.model')

//  GET BACK ALL THE POSTS

// router.get('/', async (req, res) => {
//     try{
//         const getallStudent = await Student.find();
//         res.json(getallStudent);
//     }catch(err){
//         res.json({message:err});
//     }
    
// })


// SUBMITS A POST
// router.post('/', async (req,res)=>{
//     const student = new Student({
//         rollno: req.body.rollno,
//         studentname: req.body.studentname,
//         age: req.body.age ,
//         marks: req.body.marks
//     });

//     try{
//         const savedPost = await student.save();
//         res.json(savedPost);
//     }catch(err){
//         res.json({message: err});
//     }
// });


// //SPECIFIC USER
// router.get('/:studentname', async (req,res)=>{
//     try{
//         const student = await Student.find({studentname: req.params.studentname});
//         res.json(student);
//     }catch(err){
//         res.json({message: err});
//     }
// });



// DELETE POST

// router.delete('/:studentId', async (req,res)=>{
//     try{
//         const removeStudent = await Student.remove({ _id: req.params.studentId});
//         res.json("Student deleted");
//     }catch(err){
//         res.json({message: err});
//     }
// });

// // UPDATE POST

// router.patch('/:id',async (req,res)=>{
//     try{
//         const updateStudentname= await Student.updateOne(
//             {_id: req.params.id},
//             {$set:{studentname: req.body.studentname}}
//             );
//         res.json(updateStudentname) 
//     }catch(err){
//         res.json({message: err});
//     }

// });




router.get('/', async (req, res) => {
    try{
        const getallStudent = await Student.find();
        res.json(getallStudent);
    }catch(err){
        res.json({message:err});
    }
    
})


router.post('/', async (req,res)=>{
    const student = new Student({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email ,
       
    });

    try{
        const savedPost = await student.save();
        res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
});

router.delete('/:studentId', async (req,res)=>{
    try{
        const removeStudent = await Student.remove({ _id: req.params.studentId});
        res.json("Student deleted");
    }catch(err){
        res.json({message: err});
    }
});

router.patch('/:id',async (req,res)=>{
    try{
        const updateStudentname= await Student.updateOne(
            {_id: req.params.id},
            {$set:{studentname: req.body.studentname}}
            );
        res.json(updateStudentname) 
    }catch(err){
        res.json({message: err});
    }

});


module.exports = router;