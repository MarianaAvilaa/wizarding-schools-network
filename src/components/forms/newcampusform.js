import React from "react";
import axios from "axios";
import {useState} from "react";
import { useCampusContext } from "../CampusesProvider";


/* Write a component to display a form for adding a new wizarding school that contains inputs for at least the name and location.
 Display this component as part of the wizarding schools view, alongside the list of wizarding schools

 Submitting the form with a valid name/location should:
 Make an Axios request that causes the new wizarding school to be persisted in the database
 Add the new wizarding school to the list of wizarding schools without needing to refresh the page */
 /* 
export default function newCampus(){
    const [name, setName]= useState("");
    const [location,setLocation]= useState("");
    const {addCampus} = useCampusContext();

    async function handleSubmit(event){
        try{
            const {data}= await axios.post("/api/campuses",{
                name,
                location,
            });
            addCampus(data);
        }catch(err){
            console.error(err);
        }
    }
    return(
        <>
        <form id="campus-form" onSubmit={handleSubmit}>
          <label htmlFor="campusname">campus Name:</label>
          <input
            name="campusname"
            value={campusName}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="campuslocation">Location:</label>
          <input
            name="campuslocation"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button type="submit">Go</button>
        </form>
      </>
    );

} */