import React from "react";

const CardsAccounts = ({ balance, accountName, transactionCount }) => {
  return (
    <section className="cards">
      <div className="cards_content">
        <p className="cards_title">
          {accountName}
          Argent Bank Checking (X3448{transactionCount})
        </p>
        <p className="cards_amount">$49,098.43{balance}</p>
        <p className="cards_balance">Available balance</p>
      </div>
      <i className="fa-solid fa-chevron-right cards_icon"></i>
    </section>
  );
};

export default CardsAccounts;
