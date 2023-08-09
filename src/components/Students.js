import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useStudentContext } from './StudentProvider';



export default function  WizardStudents(){
    const {students,setStudents} = useStudentContext();
    useEffect(() =>{
        async function fetchStudents(){
            const{data}= await axios.get("/api/students");
            console.log(data);
            setStudents(data);
        }
        fetchStudents();
    },[])

    return(
        <div>
        <h1> Student List </h1>
        <ul>
        { students.map((studentss)=>(
            <p>{studentss.firstName},{studentss.email}</p>
        ))}
            </ul>
        </div>
    )
}