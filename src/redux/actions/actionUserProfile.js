import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async (token, thunkAPI) => {
    try {
      const profileResponse = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      if (!profileResponse.ok) {
        throw new Error("Erreur lors de la récupération du profil utilisateur");
      }

      const profileData = await profileResponse.json();

      console.log("Profil de l’utilisateur:", profileData);
      localStorage.setItem("username", profileData.body.userName);
      localStorage.setItem("firstName", profileData.body.firstName);
      localStorage.setItem("lastName", profileData.body.lastName);

      return {
        token: token,
        userId: profileData.body.id,
        username: profileData.body.userName,
        firstName: profileData.body.firstName,
        lastName: profileData.body.lastName,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default fetchUserProfile;
