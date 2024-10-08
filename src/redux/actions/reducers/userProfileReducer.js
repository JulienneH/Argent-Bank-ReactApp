import { createSlice } from "@reduxjs/toolkit";
import fetchUserProfile from "../actionUserProfile";

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    username: null,
    userId: null,
    isLoading: false, //indicateur de la requête en cours
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    //pour gérer les fonctions async
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        //pour définir comment l'état doit etre MAJ pour chaque etat de l'action
        state.isLoading = true; //  requête en cours
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.isLoading = false; // Requête terminée
        state.username = action.payload.username;
        state.userId = action.payload.userId;
        state.error = null;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.isLoading = false; // Requête terminée
        state.error = action.payload;
      });
  },
});

// Exporter le reducer
export default userProfileSlice.reducer;
