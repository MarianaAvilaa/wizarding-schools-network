import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import{Link} from "react-router-dom";
import {useParams} from "react-router-dom";
//import { useCampusContext,singleCampuses,setSingleCampuses } from './CampusesProvider';
import { useStudentContext } from './StudentProvider';


export default function SingleCampus(){
    
const {id} = useParams();
const schoolId = parseInt(id);
console.log(schoolId);
const {allStudents} = useStudentContext();
const schoolStudents=allStudents.filter(student => student.campusId === schoolId);
const [singleCampuses, setSingleCampuses]= useState(null);

useEffect(()=> {
    async function fetchSingleCampus(){
        const{data}= await axios.get(`/api/campuses/${id}`);
        console.log(data);
        setSingleCampuses(data);
    }
    fetchSingleCampus();
},[id]);

return(
    <div>
        <h1> Single Wizard School</h1>
        <p> {singleCampuses.name}</p>
        <img src={singleCampuses.imageUrl} />
        <p>{singleCampuses.address}</p>
        <p>{singleCampuses.description}</p>
        <h1> Current Students of this School</h1>
        <ul>
            {schoolStudents.map(student =>(
                <Link to ={`/Students/${student.id}`}><li key={student.id}>{student.firstName}</li></Link>
            ))}
        </ul>
    </div>
);
}