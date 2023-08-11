import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <Link to ="/wizarding-schools"> Wizard Schools</Link>
           <p> </p>
            <Link to="/Students">Wizard Students</Link>
        </nav>
    );
}
export default NavBar;