
import Hero from "../components/main/Hero";
import Discovery from "../components/main/Discovery";
import CarScroll from "../components/main/CarScroll";
import CityScroll from "../components/main/CityScroll";
import OwnACar from "../components/main/OwnACar";
import Footer from "../components/main/Footer";
import Header from "../components/main/Header"
function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div
        style={{
          backgroundColor: "#f3f3f3",
          paddingTop: "100px",
        }}
      >
        <Discovery />
        <CarScroll />
        <CityScroll />
        <OwnACar />
        <Footer />
      </div>
    </>
  );
}

export default Home;
