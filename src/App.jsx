import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter";
import "./css/main.css";

function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
