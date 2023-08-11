"use strict";
const router = require("express").Router();
const{db,Campuses, Students}= require("../db");
// require your database and place your routes here
router.get("/students",async(req,res,next) =>{
    try{
        const students= await Students.findAll();
        console.log(students);
        res.send(students);
    }catch(err){
        next(err);
    }

}); 

router.get("/campuses",async(req,res,next) =>{

    try{
        const campuses= await Campuses.findAll();
        res.send(campuses);        
    }catch(err){
        next(err);
    }
})

//Routes based on ID

router.get("/students/:id",async(req,res,next)=>{
    try{
        const students= await Students.findOne({
            where:{id:req.params.id},
            include: Campuses,
        });
        res.send(students);
    }catch(err){
        next(err);
    }
    
});
router.get("/campuses/:id",async(req,res,next)=>{
    try{
        const campuses= await Campuses.findOne({
            where:{id:req.params.id},
            include: Students,
        });
        res.send(campuses);
    }catch(err){
        next(err);
    }
    
});

// Routes to add new campus and student

router.post("/campuses",async (req, res,next)=>{
try{
    const campuse= await Campuses.create(req.body);
    res.send(campuse);
}catch(errr){
    next(errr);
}
});

router.post("/students",async(req,res,next)=>{
try{
    const student= await Students.create(req.body);
    res.send(student);
}catch(err){
    next(err);
}
});





module.exports = router;
