import React from "react";
import FormLog from "../components/FormLog";

const LoginPage = () => {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle "></i>
        <h1 className="sign-in-title">Sign In</h1>
        <FormLog />
      </section>
    </main>
  );
};

export default LoginPage;
