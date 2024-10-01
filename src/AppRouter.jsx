import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AccountsPage from "./pages/AccountsPage";
import LoginPage from "./pages/LoginPage";
import PageTemplate from "./pages/PageTemplate";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PageTemplate />}>
        <Route index element={<Home />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/AccountsPage" element={<AccountsPage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
