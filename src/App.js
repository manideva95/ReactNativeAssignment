import React from "react";
import { Provider } from "react-redux";
import Router from "./Router/Router.js";
import store from "./store/store.js";

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;

