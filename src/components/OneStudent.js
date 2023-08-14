import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import{Link} from "react-router-dom";
import {useParams} from "react-router-dom";

import { useStudentContext } from './StudentProvider';

export default function SingleStudent(){
    const{id}= useParams();
    const schoolId= parseInt(id);
    const {singleStudent, setSingleStudent}= useStudentContext();

    useEffect(()=>{
    async function fetchSingleStudent(){
        const{data}= await axios.get(`/api/students/${id}`);
        console.log(data);
        setSingleStudent(data);
    }
    fetchSingleStudent();
},[id]);
    if(!singleStudent){
        return <div>Loading...</div>;
    }
    return(
        <div>
        <p>{singleStudent.firstName}</p>
          { console.log(singleStudent)}
            <h1> Single Wizard Student</h1>
            <p>{singleStudent.firstName}, {singleStudent.lastName}</p>
            <img src={singleStudent.imageURL} />
            <p>{singleStudent.magicalAbiliyScore}</p>
           
            <h1> Campus of the Student</h1>
            <ul>
    
           
                <Link to ={`/wizarding-schools/${singleStudent.Campus.id}`}><li key={singleStudent.Campus.id}>{singleStudent.Campus.name}</li></Link>
              
        </ul>
        </div>
    );
}