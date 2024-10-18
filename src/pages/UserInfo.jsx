import React, { useEffect } from "react";
import FormUserInfo from "../components/FormUserInfo";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardsAccounts from "../components/CardsAccounts";

const UserInfo = () => {
  const isAuthentificated = useSelector((state) => state.isAuthentificated);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthentificated) {
      navigate("/ErrorPage");
    }
  }, [isAuthentificated, navigate]);

  if (!isAuthentificated) {
    return null;
  }

  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle "></i>
          <h1>Edit User Info</h1>
          <FormUserInfo />
        </section>
        <CardsAccounts />
        <CardsAccounts />
        <CardsAccounts />
      </main>
    </>
  );
};

export default UserInfo;
