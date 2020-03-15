import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import SimpleForm from "./components/simpleform";

const reducer = combineReducers({
  form: reduxFormReducer // mounted under "form"
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

function App() {
  return (
    <Provider store={store}>
      <div>
        <h2>Form</h2>

        <SimpleForm />
      </div>
    </Provider>
  );
}

export default App;
