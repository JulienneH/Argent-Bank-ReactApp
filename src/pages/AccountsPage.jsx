import React from "react";
import AccountSection from "../components/AccountSection";
import EditButton from "../components/EditButton";
import { useSelector } from "react-redux";

const AccountsPage = () => {
  const isAuthentificated = useSelector((state) => state.isAuthentificated);
  const username = useSelector((state) => state.username);
  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          {isAuthentificated ? (
            <h1>
              Welcome back
              <br />
              {username}
            </h1>
          ) : (
            <h1>Merci de vous identifier</h1>
          )}
          <EditButton />
        </div>
        <h2 className="sr-only">Accounts</h2>
        <AccountSection
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <AccountSection
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <AccountSection
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
    </>
  );
};

export default AccountsPage;
