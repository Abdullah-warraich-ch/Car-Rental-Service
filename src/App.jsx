import "./App.css";
import Header from "./components/main/Header";
import Hero from "./components/main/Hero";
import Discovery from "./components/main/Discovery";
import CarScroll from "./components/main/CarScroll";
import CityScroll from "./components/main/CityScroll";
import OwnACar from "./components/main/OwnACar";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <div style={{ backgroundColor: "#e4e4e4", paddingTop: "100px" }}>
        <Discovery />
        <CarScroll />
        <CityScroll />
        <OwnACar />
      </div>
    </>
  );
}

export default App;
