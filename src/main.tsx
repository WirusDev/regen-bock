import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "intersection-observer";
import Navbar from "./components/basic/NavBar";
import Footer from "./components/basic/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className='bg-navbar-gradient bg-cover bg-right'>
      <Navbar />
      <App />
      <Footer />
    </div>
  </React.StrictMode>
);
