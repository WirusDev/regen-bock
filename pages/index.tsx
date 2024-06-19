/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
// import "./index.css";
import ParalaxAnimation from "../components/animated/ParalaxScroll";

import CardGrid from "../components/basic/CardGrid";
import BockAufRegen from "../components/basic/BockAufRegen";
import ProductFotos from "../components/basic/ProductFotos";
import Products from "../components/basic/Products";
import Zeit from "../components/basic/Zeit";

import HomeVideo from "../components/basic/Video";

const App: React.FC = () => {
  return (
    <>
      <section className='max-w-screen-xl mx-auto px-4'>
        <HomeVideo />
        <BockAufRegen />
        <CardGrid />
      </section>
      <ParalaxAnimation />
      <section className='max-w-screen-xl mx-auto px-4'>
        <ProductFotos />
        <Products />
        <Zeit />
      </section>
    </>
  );
};

export default App;
