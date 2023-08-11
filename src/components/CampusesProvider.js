import React, { useState, useContext, createContext } from "react";

const CampusContext = createContext();

export function CampusProvider({ children }) {
  const [campuses, setCampuses] = useState([]);
  const [singleCampuses, setSingleCampuses] = useState(null);

  return (
    <CampusContext.Provider value={{ campuses, setCampuses , singleCampuses, setSingleCampuses}}>
      {children}
    </CampusContext.Provider> 
  );
}

export const useCampusContext = () => useContext(CampusContext);