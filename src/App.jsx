import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/main/Main";
import ContextProvider from "./context/Context";

const App = () => {
  return (
    <ContextProvider>
      <Sidebar />
      <Main />
    </ContextProvider>
  );
};

export default App;
