import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./Main";
import Campuses from "./Campuses";
import Students from "./Students";

const Root = () => {
  return (
    <div className="navigation">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/wizarding-schools" element ={<Campuses />} />
        <Route path="/Students" element ={<Students/>} />

      </Routes>
    </div>
  );
};

export default Root;
