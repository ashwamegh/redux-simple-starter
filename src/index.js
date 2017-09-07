// Global imports
import React from "react";
import ReactDOM from "react-dom";
// Provider Api to wrapup store and provide it to the sub component
import { Provider } from "react-redux";

// Local Imports
import { mainStore } from "./store.js";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const store = mainStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
