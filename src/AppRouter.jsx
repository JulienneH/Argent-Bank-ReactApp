import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AccountsPage from "./pages/AccountsPage";
import LoginPage from "./pages/LoginPage";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/AccountsPage" element={<AccountsPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
