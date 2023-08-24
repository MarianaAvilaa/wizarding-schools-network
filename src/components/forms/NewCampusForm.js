import React from "react";
import axios from "axios";
import {useState} from "react";

import { useCampusContext } from "../CampusesProvider";


/* Write a component to display a form for adding a new wizarding school that contains inputs for at least the name and location.
 Display this component as part of the wizarding schools view, alongside the list of wizarding schools

 Submitting the form with a valid name/location should:
 Make an Axios request that causes the new wizarding school to be persisted in the database
 Add the new wizarding school to the list of wizarding schools without needing to refresh the page */
 
export default function NewCampus(){

    const [name, setName]= useState("");
    const [address,setAddress]= useState("");
    const {addCampus} = useCampusContext();

    async function handleSubmit(event){
      event.preventDefault();
      console.log("handle");
        try{
            const {data}= await axios.post("/api/campuses",{
                name,
                address,
            });
            console.log(data);
            addCampus(data);
            console.log("Adding:");
           
        }catch(err){
            console.error(err);
        }
    }
    return(
        <>
        <form id="Campus-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            /> <br />
        <label htmlFor="address">address:</label>
        <input
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            />
            <button type="submit">Go</button>
            </form> 
      </>
    );

} 