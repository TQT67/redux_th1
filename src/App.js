import logo from "./logo.svg";
import "./App.css";
import React from "react";
import TodoApp from "./features/todo/toDoApp";

import store from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <TodoApp />
      </Provider>
    </>
  );
}

export default App;
