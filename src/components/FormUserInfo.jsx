import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from "../redux/actions/usernameAction";
import fetchUserProfile from "../redux/actions/actionUserProfile";
import { useNavigate } from "react-router-dom";

const FormUserInfo = () => {
  const [username, setUsername] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const currentUsername = useSelector((state) => state.username);
  const currentFirstName = useSelector((state) => state.firstName);
  const currentLastName = useSelector((state) => state.lastName);

  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile(token));
    }
  }, [token, dispatch]);

  //met à jour l'état de username chaque fois que currentUsername change dans le store redux
  useEffect(() => {
    setUsername(currentUsername);
  }, [currentUsername]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (token && username) {
      try {
        await dispatch(updateUsername({ username, token })).unwrap();
        setConfirmationMessage("The username has been successfully changed.");
        navigate("/AccountsPage");
      } catch (error) {
        setConfirmationMessage("Failed to update username.");
      }
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setUsername(currentUsername);

    setConfirmationMessage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label>User name</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label>First Name</label>
          <input type="text" id="firstName" value={currentFirstName} disabled />
        </div>
        <div className="input-wrapper">
          <label>Last Name</label>
          <input type="text" id="lastName" value={currentLastName} disabled />
        </div>

        <button type="submit" className="sign-in-button">
          Save
        </button>
        <button onClick={handleCancel} className="sign-in-button">
          Cancel
        </button>
      </form>
      {confirmationMessage && <p>{confirmationMessage}</p>}
    </div>
  );
};

export default FormUserInfo;
