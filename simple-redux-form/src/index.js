import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import showResults from "./showResults";
import SimpleForm from "./SimpleForm";
import RFFormat from "./components/RFFormat";
import App from "./App";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ width: "80%", padding: 15 }}>
      <h2>Simple Form</h2>
      <SimpleForm onSubmit={showResults} />
      <RFFormat />
      <h2>File Upload</h2>
      <App />
    </div>
  </Provider>,
  rootEl
);
