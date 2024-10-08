import { login } from "../authentificationAction";
import fetchUserProfile from "../actionUserProfile";

const initialState = {
  isAuthentificated: false,
  token: null,
  username: null,
};

const authentificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case login.fulfilled.type:
      console.log("Token après connexion réussie:", action.payload.token);
      return {
        ...state,
        isAuthentificated: true,
        token: action.payload.token,
      };

    case fetchUserProfile.fulfilled.type:
      return {
        ...state,
        username: action.payload.username, // Récupération du nom d'utilisateur
      };

    case login.rejected.type:
      return {
        ...state,
        isAuthentificated: false,
        token: null, // Réinitialiser le token en cas d'erreur
        username: null,
      };
    default:
      return state;
  }
};

export default authentificationReducer;
