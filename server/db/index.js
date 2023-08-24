"use strict";

const {db,Sequelize} = require("./db");
const{STRING,FLOAT,INTEGER}= require("sequelize");
/* 
name - not empty or null
imageUrl - with a default value
location - not empty or null
description - extremely large text */

// Require your models and make your associations
const Campuses= db.define("Campuses",{
  name:{
    type:Sequelize.STRING,
    allowNull:false,
   
  },
  imageUrl:{
    type: Sequelize.STRING,
    
  },
  address:{
    type: Sequelize.STRING,
    allowNull:false,
  },
  description:{
    type: Sequelize.TEXT,
  },
});
/* 
firstName - not empty or null

 lastName - not empty or null

 email - not empty or null; must be a valid email

 imageUrl - with a default value

 magicalAbilityScore - decimal between 0.0 and 10.0

 Students may be associated with at most one wizarding school.

 Likewise, wizarding schools may be associated with many student */
const Students= db.define("Student",{
  firstName:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName:{
    type:Sequelize.STRING,
    allowNull: false,
  },
  email:{
    type:Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
    },
  },
  imageUrl:{
    type:Sequelize.STRING,
    allowNull: false,
  },
  magicalAbilityScore:{
  type:Sequelize.FLOAT,
  allowNull: false,
  },

});
Students.belongsTo(Campuses);
Campuses.hasMany(Students);

module.exports = {
  db,Students,Campuses,
};
