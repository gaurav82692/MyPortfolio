import SideBar from './Component/SideBar';
import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter,HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
    <SideBar/>
    </HashRouter>
  );
}

export default App;
