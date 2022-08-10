const express = require('express');

const router = express.Router();

const Signin = require('../models/signin.model')

//  GET BACK ALL THE POSTS

router.get('/', async (req, res) => {
    try{
        const getallSignin = await Signin.find();
        res.json(getallSignin);
    }catch(err){
        res.json({message:err});
    }
    
})


// SUBMITS A POST
router.post('/', async (req,res)=>{
    const signin = new Signin({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    try{
        const savedPost = await signin.save();
        res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
});


// //SPECIFIC USER
router.get('/:username', async (req,res)=>{
    try{
        const signin= await Signin.find({username: req.params.username});
        res.json(signin);
    }catch(err){
        res.json({message: err});
    }
});



// //DELETE POST

router.delete('/:signinId', async (req,res)=>{
    try{
        const removeSignin = await User.remove({ _id: req.params.signinId});
        res.json("User deleted");
    }catch(err){
        res.json({message: err});
    }
});

// // UPDATE POST

router.patch('/:id',async (req,res)=>{
    try{
        const updateusername= await Signin.updateOne(
            {_id: req.params.id},
            {$set:{username: req.body.username}}
            );
        res.json(updateusername) 
    }catch(err){
        res.json({message: err});
    }

});


module.exports = router;