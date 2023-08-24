import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useCampusContext } from './CampusesProvider';
import { Link } from 'react-router-dom';
import NewCampus from './forms/NewCampusForm';
//import {newCampus} from "../forms/newCampusform";
/* Write a component to display a list of all wizarding schools (at least their names and images)
Write a context to manage wizarding schools in your application state
Display the all-wizarding schools component when the url matches /wizarding-schools */


export default function  WizardSchool(){
    const {campuses, setCampuses}= useCampusContext();
    useEffect(() =>{
        async function fetchCampuses(){
            const{data}= await axios.get("/api/campuses");
            console.log(data);
            setCampuses(data);
        }
        fetchCampuses();
    },[]);

    const handleAddCampus= (newCampus) =>{
        setCampuses((prevCampus)=>[...prevCampus,newCampus]);
    };


    return(
        <div>
        <h1> Campsuses List </h1>
        <ul>
        {campuses.map((campusess)=>(
            <div>
            <p>{campusess.name}</p>
            <Link to={`/wizarding-schools/${campusess.id}`}>{campusess.name}
            </Link>
            </div>
        ))}
            </ul>
        <h2> Adding Another Campus</h2>
        <NewCampus onAddCampus={handleAddCampus} />
        
       
           
        </div>
    )

    //Location is not showing
}