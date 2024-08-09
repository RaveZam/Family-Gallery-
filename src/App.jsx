import "./App.css";
import Hero from "./hero/Hero";
import Gallery from "./gallery/Gallery";
import Header from "./headercomponents/Header";
const [isHeroLoaded, setIsHeroLoaded] = useState(false);
function App() {
  return (
    <div>
      <Header />

      <Hero onLoad={() => setIsHeroLoaded(true)} />
      {/* <Landingpage /> */}
      {isHeroLoaded && (
        <>
          <Gallery />
        </>
      )}
    </div>
  );
}

export default App;
