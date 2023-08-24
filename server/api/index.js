"use strict";
const router = require("express").Router();
const { AutomaticPrefetchPlugin } = require("webpack");
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
        console.log(campuses);
        res.send(campuses);
    }catch(err){
        console.log(err.message);
        next(err);
    }

    
});

// Routes to add new campus and student

router.post("/campuses",async (req, res,next)=>{
try{
    const campus= await Campuses.create(req.body);
    res.send(campus);
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

//Route to delete wizardschool and student based on Id

router.delete("/campuses/:id",async(req,res,next)=>{
    const campus= await Students.findOne({
        where :{id:req.params.id},
    });
    if(campus){
        await campus.destroy();
        res.status(204).send();
    }else{
        res.status(404).send("Wizard School not found");
    }
});

router.delete("/students/:id",async(req,res,next)=>{
    const student= await Students.findOne({
        where:{id:req.params.id},
    });
    if(student){
        await student.destroy();
        res.status(204).send();
    }else{
        res.status(404).send("Wizard School not found");
    }

});
//Updating a Wizard School and Student

router.put("/campus/:id",async(req,res,next)=>{
    try{
        const campus= await Campuses.findByPk(req.params.id);
        campus.update(req.body);
        res.send(campus);
    }
    catch(err){
        next(err);
    }
});


router.put("/students/:id",async(req,res,next)=>{
    try{
        const student= await Students.findByPk(req.params.id);
        student.update(req.body);
        res.send(student);
    }
    catch(err){
        next(err);
    }
});






module.exports = router;
