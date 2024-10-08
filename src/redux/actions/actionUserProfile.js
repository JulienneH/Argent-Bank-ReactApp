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

      return {
        token: token,
        userId: profileData.body.id,
        username: profileData.body.userName,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default fetchUserProfile;
