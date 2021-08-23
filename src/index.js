import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import App from "./App";
import "./index.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const ReactRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<ReactRedux />, document.getElementById("root"));
