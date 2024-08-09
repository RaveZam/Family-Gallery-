import React, { Suspense, lazy } from "react";
import "./App.css";
import Hero from "./hero/Hero";
import Gallery from "./gallery/Gallery";
// const Gallery = lazy(() => import("./gallery/Gallery"));
import Header from "./headercomponents/Header";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      {/* <Landingpage /> */}
      <Gallery />
    </div>
  );
}

export default App;
