import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateUsername = createAsyncThunk(
  "user/updateUsername",
  async ({ username, token }, thunkAPI) => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          body: JSON.stringify({ userName: username }),
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Échec de la mise à jour du username"
        );
      }

      const data = await response.json();

      console.log("Username après modification :", data);

      return {
        username: data.body.userName,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
