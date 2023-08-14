import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./Main";
import Campuses from "./Campuses";
import Students from "./Students";
import OneCampus from "./OneCampus";
import OneStudent from "./OneStudent";
import NavBar from "./NavBar";
import { CampusProvider } from "./CampusesProvider";
import { StudentProvider } from "./StudentProvider";

const Root = () => {
  return (
    <div className="navigation">
      <NavBar />
      <CampusProvider/>
      <StudentProvider />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/wizarding-schools" element ={<Campuses />} />
        <Route path="/Students" element ={<Students/>} />
        <Route path="/wizarding-schools/:id" element={<OneCampus/>} />
        <Route path= "/students/:id" element={<OneStudent/>} />
      </Routes>
      <StudentProvider/>
      <CampusProvider/>
    </div>
  );
};

export default Root;
