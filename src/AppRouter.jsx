import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AccountsPage from "./pages/AccountsPage";
import LoginPage from "./pages/LoginPage";
import PageTemplate from "./pages/PageTemplate";
import UserInfo from "./pages/UserInfo";
import ErrorPage from "./pages/ErrorPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PageTemplate />}>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/AccountsPage" element={<AccountsPage />} />
        <Route path="/EditPage" element={<UserInfo />} />
        <Route path="/ErrorPage" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
