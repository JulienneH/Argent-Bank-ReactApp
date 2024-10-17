import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from "../redux/actions/usernameAction";

const FormUserInfo = () => {
  const [username, setUsername] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const currentUsername = useSelector((state) => state.username);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (token && username) {
      try {
        await dispatch(updateUsername({ username, token })).unwrap();
        setConfirmationMessage("The username has been successfully changed.");
      } catch (error) {
        setConfirmationMessage("Failed to update username.");
      }
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();
    // Réinitialiser le champ de username à la valeur actuelle
    setUsername(currentUsername);
    setConfirmationMessage("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label>User name</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Met à jour l'état local
          />
        </div>
        <div className="input-wrapper">
          <label>First Name</label>
          <input type="text" />
        </div>
        <div className="input-wrapper">
          <label>Last Name</label>
          <input type="text" />
        </div>

        <button type="submit" className="sign-in-button">
          Save
        </button>
        <button onClick={handleCancel} className="sign-in-button">
          Cancel
        </button>
      </form>
      {confirmationMessage && <p>{confirmationMessage}</p>}
    </>
  );
};

export default FormUserInfo;
