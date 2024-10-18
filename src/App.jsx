import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import AppRouter from "./AppRouter";
import "./css/main.min.css";

function App() {
  console.log("état du store", store.getState());

  return (
    <Provider store={store}>
      <Router>
        <AppRouter />
      </Router>
    </Provider>
  );
}

export default App;
