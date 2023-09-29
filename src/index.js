import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import store from './store';


const log = console.log;

log("Hello");
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
