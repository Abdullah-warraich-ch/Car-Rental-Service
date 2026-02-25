import "./App.css";
import Header from "./components/main/Header";
import Hero from "./components/main/Hero";
import Discovery from "./components/main/Discovery";
import CarScroll from "./components/main/CarScroll";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <div style={{ backgroundColor: "#e4e4e4", paddingTop: "100px" }}>
        <Discovery />
        <CarScroll />
      </div>
    </>
  );
}

export default App;
