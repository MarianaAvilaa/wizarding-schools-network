import React from "react";
import Campuses from "./Campuses";
import Students from "./Students";
/* 
    This is you entry point for your routes
*/
const Main = () => {
  return (
    <div>
      <h1>Welcome to the Wizarding Schools Network!</h1>
      {<Campuses/>}
       {<Students/>}
    </div>
  );
};

export default Main;
