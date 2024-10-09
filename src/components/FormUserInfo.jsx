import React from "react";

const FormUserInfo = () => {
  return (
    <>
      <form>
        <div className="input-wrapper">
          <label>User name</label>
          <input type="text" id="username" />
        </div>
        <div className="input-wrapper">
          <label>First Name</label>
          <input />
        </div>
        <div className="input-wrapper">
          <label>Last Name</label>
          <input />
        </div>

        <button type="submit" className="sign-in-button">
          Save
        </button>
        <button type="submit" className="sign-in-button">
          Cancel
        </button>
      </form>
    </>
  );
};
export default FormUserInfo;
