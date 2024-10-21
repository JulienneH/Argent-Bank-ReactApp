import { login, logout } from "../authentificationAction";
import fetchUserProfile from "../actionUserProfile";
import { updateUsername } from "../usernameAction";

const initialState = {
  isAuthentificated: !!localStorage.getItem("token"),
  token: localStorage.getItem("token") || null,
  username: localStorage.getItem("username") || null,
  firstName: localStorage.getItem("firstName") || null,
  lastName: localStorage.getItem("lastName") || null,
};

// Fonction pour mettre à jour l'état avec les informations de l'utilisateur
const updateUserState = (state, payload) => ({
  ...state,
  username: payload.username,
  firstName: payload.firstName,
  lastName: payload.lastName,
});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case login.fulfilled.type:
      console.log("Token après connexion réussie:", action.payload.token);
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("username", action.payload.username);
      localStorage.setItem("firstName", action.payload.firstName);
      localStorage.setItem("lastName", action.payload.lastName);
      return {
        ...updateUserState(state, action.payload),
        isAuthentificated: true,
        token: action.payload.token,
      };

    case fetchUserProfile.fulfilled.type:
      return updateUserState(state, action.payload);

    case updateUsername.fulfilled.type:
      localStorage.setItem("username", action.payload.username);
      return {
        ...state,
        username: action.payload.username,
      };

    case logout.type:
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("firstName");
      localStorage.removeItem("lastName");
      return {
        ...state,
        isAuthentificated: false,
        token: null,
        username: null,
        firstName: null,
        lastName: null,
      };

    case login.rejected.type:
      return {
        ...state,
        isAuthentificated: false,
        token: null, // Réinitialiser le token en cas d'erreur
        username: null,
        firstName: null,
        lastName: null,
      };

    default:
      return state;
  }
};

export default userReducer;
