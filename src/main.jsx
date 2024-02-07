import React from 'react';
import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import {  RouterProvider } from "react-router-dom";
import './index.css';
// This is where all your routes are located
import { router } from "./Routes.jsx";
import { useGlobalState } from "./hooks/useGlobalState.jsx";


export const Context = createContext(null);


const defaultGlobalState = {
  message: null,
  demo: [{title: "FIRST", background: "white", initial: "white"},
         {title: "SECOND", background: "white", initial: "white"}]
}


const Main = () => {
  const globalState = useGlobalState(defaultGlobalState);
  // TODO: Esto es necesario ?
  if (window) {
    window.globalState = globalState;
  };

  // Aquí el useEffect()
  
  return (
    <React.StrictMode>  
      <Context.Provider value={globalState}>
          <RouterProvider router={router} />
      </Context.Provider>
    </React.StrictMode>
  );
};


ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
