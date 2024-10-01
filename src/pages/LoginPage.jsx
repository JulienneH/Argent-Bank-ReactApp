import React from "react";
import FormLog from "../components/FormLog";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LoginPage = () => {
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <FormLog />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;
