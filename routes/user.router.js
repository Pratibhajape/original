// const express = require('express');
// const router = express.Router();
// const User = require('../models/user.model')

// router.get('/',async (req,res) =>{
//  try{
//     const getalluser = await User.find();
//     res.json(getalluser);
//  }catch(err){
//     res.json({message:err});
//  }

// });

// router.post('/',async (req,res) =>{  
//       const user = new User({
//          username: req.body.username,
//          email: req.body.email,
//          password: req.body.password
//       });
      
//       try{
//       const savedpost = await user.save();
//       res.json(savedpost);

//    }catch(err){
//       res.json({message:err});
//    }
// })


// router.post('/:username',async (req,res) =>{  
   
//    try{
     
//    const user = await User.find({username:req.params.username});
//    res.json(user);

// }catch(error){
//    res.json({message:error});
// }
// });

// //DELETE POST

// router.delete('/:userId', async (req,res)=>{
//    try{
//        const removeUser = await User.remove({ _id: req.params.userId});
//        res.json("User deleted");
//    }catch(err){
//        res.json({message: err});
//    }
// });

// // UPDATE POST

// router.patch('/:id',async (req,res)=>{
//    try{
//        const updateUsername= await User.updateOne(
//            {_id: req.params.id},
//            {$set:{username: req.body.username}}
//            );
//        res.json(updateUsername) 
//    }catch(err){
//        res.json({message: err});
//    }

// });


// module.exports=router;



const express = require('express');

const router = express.Router();

const User = require('../models/User.model')

//  GET BACK ALL THE POSTS

router.get('/', async (req, res) => {
    try{
        const getallUser = await User.find();
        res.json(getallUser);
    }catch(err){
        res.json({message:err});
    }
    
})


// SUBMITS A POST
router.post('/', async (req,res)=>{
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    try{
        const savedPost = await user.save();
        res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
});


//SPECIFIC USER
router.get('/:username', async (req,res)=>{
    try{
        const user = await User.find({username: req.params.username});
        res.json(user);
    }catch(err){
        res.json({message: err});
    }
});



//DELETE POST

router.delete('/:userId', async (req,res)=>{
    try{
        const removeUser = await User.remove({ _id: req.params.userId});
        res.json("User deleted");
    }catch(err){
        res.json({message: err});
    }
});

// UPDATE POST

router.patch('/:id',async (req,res)=>{
    try{
        const updateUsername= await User.updateOne(
            {_id: req.params.id},
            {$set:{username: req.body.username}}
            );
        res.json(updateUsername) 
    }catch(err){
        res.json({message: err});
    }

});


module.exports = router;