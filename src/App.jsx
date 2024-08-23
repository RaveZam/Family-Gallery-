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
import ScrolltoTop from "./scrolltotop/ScrolltoTop";

function App() {
  const myComponentRef = useRef(null);
  const myContactRef = useRef(null);
  const myAboutusRef = useRef(null);

  const scrollToGallery = () => {
    myComponentRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    myContactRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollToAbout = () => {
    myAboutusRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
      <ScrolltoTop />
      <Header
        scrollToGallery={scrollToGallery}
        scrollToContact={scrollToContact}
        scrollToAbout={scrollToAbout}
      />

      <Hero scrollToGallery={scrollToGallery} />
      <div ref={myAboutusRef}>
        <br />
        <Aboutus />
      </div>
      <Suspense>
        <div ref={myComponentRef}>
          <Gallery />
        </div>
        {/* ref={galleryRef} */}
      </Suspense>
      <div ref={myContactRef}>
        <Contact />
      </div>

      <Footer
        scrollToGallery={scrollToGallery}
        scrollToContact={scrollToContact}
        scrollToAbout={scrollToAbout}
      />
      <div></div>
    </div>
  );
}

export default App;
