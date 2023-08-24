import React, { useState, useContext, createContext } from "react";

const CampusContext = createContext();

export function CampusProvider({ children }) {
  const [campuses, setCampuses] = useState([]);
  const [singleCampuses, setSingleCampuses] = useState(null);

  // const addCampus =(newCampus) => {
  //   setCampuses((prevCampus) => [...prevCampus,newCampus]);
  // };
  return (
    <CampusContext.Provider value={{ campuses, setCampuses , singleCampuses, setSingleCampuses}}>
      {children}
    </CampusContext.Provider> 
  );
}

export const useCampusContext = () => useContext(CampusContext);