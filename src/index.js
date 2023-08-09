import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Root from "./components/Root";
import { StudentProvider } from "./components/StudentProvider";
import { CampusProvider } from "./components/CampusesProvider";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <CampusProvider>
    <StudentProvider>
      <Router>
        <Root />
      </Router>
    </StudentProvider>
    </CampusProvider>
  </React.StrictMode>
);
