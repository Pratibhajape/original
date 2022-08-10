const express = require('express');

const router = express.Router();

const Login = require('../models/login.model')

//  GET BACK ALL THE POSTS

router.get('/', async (req, res) => {
    try{
        const getalllogin = await Login.find();
        res.json(getallLogin);
    }catch(err){
        res.json({message:err});
    }
    
})


// SUBMITS A POST
router.post('/', async (req,res)=>{
    const login = new Login({
        username: req.body.username,
        password: req.body.password
    });

    try{
        const savedPost = await login.save();
        res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
});


//SPECIFIC USER
router.get('/:username', async (req,res)=>{
    try{
        const login = await Login.find({username: req.params.username});
        res.json(login);
    }catch(err){
        res.json({message: err});
    }
});



//DELETE POST

router.delete('/:loginId', async (req,res)=>{
    try{
        const removeLogin = await Login.remove({ _id: req.params.loginId});
        res.json("login deleted");
    }catch(err){
        res.json({message: err});
    }
});

// // UPDATE POST

router.patch('/:id',async (req,res)=>{
    try{
        const updateusername= await Login.updateOne(
            {_id: req.params.id},
            {$set:{username: req.body.username}}
            );
        res.json(updateusername) 
    }catch(err){
        res.json({message: err});
    }

});



router.post('/lg', function(req, res, next) 
{ const username = req.body.username;
    const password = req.body.password; 
    if(user.username == username && user.password == password)
    {
       res.end("form submitted successfully");
    } else{
      res.end("Username or password is incorrect")
    }
  
    console.log(username);
    console.log(password);

  });


module.exports = router;