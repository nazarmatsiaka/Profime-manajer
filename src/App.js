import React from 'react';
import Routers from "./router/routers";
import ModalContextProvider from "./context/ModalContext";
import ModalContainer from "./components/Modals/ModalContainer";

function App() {
  return (
    <ModalContextProvider>
        <ModalContainer />
        <Routers />
    </ModalContextProvider>
  );
}

export default App;
