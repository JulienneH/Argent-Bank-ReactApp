import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions/authentificationAction";
import fetchUserProfile from "../redux/actions/actionUserProfile"; // Assurez-vous que le chemin est correct

const FormLog = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Dispatch l'action login et attend la réponse
    const resultAction = await dispatch(login({ email: username, password }));

    // Vérifie si la connexion a réussi
    if (login.fulfilled.match(resultAction)) {
      const token = resultAction.payload.token; // Récupérer le token depuis le login

      // Dispatch l'action pour récupérer le profil
      await dispatch(fetchUserProfile(token)); // Récupérer le profil avec le token
      navigate("/AccountsPage");
    } else {
      setErrorMessage("Email ou mot de passe incorrect");
      console.error("Échec de la connexion :", resultAction.error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};

export default FormLog;
