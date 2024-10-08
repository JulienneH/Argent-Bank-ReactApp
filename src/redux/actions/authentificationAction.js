import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("auth/login", async (credentials) => {
  const response = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Échec de la connexion");
  }

  const data = await response.json();

  console.log("Données de l’utilisateur après connexion réussie :", data);

  return {
    token: data.body.token,
    username: data.body.username,
  };
});
