import { login, logout } from "../authentificationAction";
import fetchUserProfile from "../actionUserProfile";
import { updateUsername } from "../usernameAction";

const initialState = {
  isAuthentificated: !!localStorage.getItem("token"),
  token: localStorage.getItem("token") || null,
  username: localStorage.getItem("username") || null,
};

const authentificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case login.fulfilled.type:
      console.log("Token après connexion réussie:", action.payload.token);
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("username", action.payload.username);
      return {
        ...state,
        isAuthentificated: true,
        token: action.payload.token,
        username: action.payload.username,
      };

    case fetchUserProfile.fulfilled.type:
      return {
        ...state,
        username: action.payload.username, // Récupération du nom d'utilisateur
      };

    //gérer la mise à jour du username

    case updateUsername.fulfilled.type:
      localStorage.setItem("username", action.payload.username);
      return {
        ...state,
        username: action.payload.username,
      };

    // Gérer la déconnexion

    case logout.type:
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      return {
        ...state,
        isAuthentificated: false,
        token: null,
        username: null,
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
