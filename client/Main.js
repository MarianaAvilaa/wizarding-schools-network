import React from "react";
import Campuses from "./Campuses";
import Students from "./Students";
const Main = () => {
    return (
      <div id="main">
        <h1>Welcome to Wizard School</h1>
       {<Campuses/>}
       {<Students/>}
      </div>
      
    );
  };
  
  export default Main;