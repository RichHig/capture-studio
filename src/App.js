import Collection from "./components/Collection";
import FinalSection from "./components/FinalSection";
import FirstCase from "./components/FirstCase";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SecondCase from "./components/SecondCase";
import ThirdCase from "./components/ThirdCase";
import Work from "./components/Work";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Work />
      <FirstCase />
      <SecondCase />
      <ThirdCase />
      <Collection />
      <FinalSection />
      <Footer />
    </div>
  );
}

export default App;
