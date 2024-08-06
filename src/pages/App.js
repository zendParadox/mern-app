import React from "react";
import { AppRoutes, store } from "../config";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </div>
  );
}

export default App;
