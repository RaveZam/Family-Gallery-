import { useState } from "react";
import "./App.css";
import Hero from "./hero/Hero";
import Gallery from "./gallery/Gallery";
import Header from "./headercomponents/Header";

function App() {
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);

  return (
    <div>
      <Header />
      {console.log(isHeroLoaded)}
      <Hero onLoad={() => setIsHeroLoaded(true)} />
      {/* <Landingpage /> */}
      {isHeroLoaded ? <Gallery /> : ""}
    </div>
  );
}

export default App;
