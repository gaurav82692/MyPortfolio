import SideBar from './Component/SideBar';
import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <SideBar/>
    </BrowserRouter>
  );
}

export default App;
