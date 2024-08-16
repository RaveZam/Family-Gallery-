import React, { Suspense, lazy } from "react";
import "./App.css";
import Hero from "./hero/Hero";
import { useRef } from "react";
// import Gallery from "./gallery/Gallery";
const Gallery = lazy(() => import("./gallery/Gallery"));
import Header from "./headercomponents/Header";
import Aboutus from "./aboutme/Aboutus";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

function App() {
  const myComponentRef = useRef(null);

  const scrollToGallery = () => {
    console.log("clicked");
    myComponentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header scrollToGallery={scrollToGallery} />
      <Hero scrollToGallery={scrollToGallery} />
      <Aboutus />
      <Suspense>
        <div ref={myComponentRef}>
          <Gallery />
        </div>
        {/* ref={galleryRef} */}
      </Suspense>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
