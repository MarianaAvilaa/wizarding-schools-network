import React, { useState, useContext, createContext } from "react";

const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [singleStudent, setSingleStudent] = useState(null);

  return (
    <StudentContext.Provider value={{ students, setStudents , singleStudent, setSingleStudent}}>
      {children}
    </StudentContext.Provider>
  );
}

export const useStudentContext = () => useContext(StudentContext);




/* //import React from "react";
import React, {useState, useContext, createContext} from 'react';
const StudentContext=createContext();

export  function StudentProvider({children}){
    const [student, setStudent] = useState(null);
    const [allStudents, setAllStudents] = useState([]);
    return(
        <StudentContext.Provider value={{student,setStudent,allStudents, setAllStudents}}>
            {children}
        </StudentContext.Provider>
    );

};
export const useStudentContext = () => useContext(StudentContext);
 */
