import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

/* Write a component to display a list of all wizarding schools (at least their names and images)
Write a context to manage wizarding schools in your application state
Display the all-wizarding schools component when the url matches /wizarding-schools */


export default function  WizardSchool(){
    const [campuses, setCampuses]=useState([[]]);
    useEffect(() =>{
        async function fetchCampuses(){
            const{data}= await axios.get("/campuses");
            console.log(data);
            setCampuses(data);
        }
        fetchCampuses();
    },[])

    return(
        <div>
        <h1> Campsuses List </h1>
        <ul>
        {campuses.map((campuses)=>(
            <p>{campuses.name},{campuses.location}</p>
        ))}
            </ul>
        </div>
    )
}