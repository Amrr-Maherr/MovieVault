import Footer from "./Components/Footer.jsx";
import HeroSection from "./Components/HeroSection.jsx";
import Navbar from "./Components/Navbar.jsx";
import Pricing from "./Components/Pricing.jsx";
export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection />
      <Pricing/>
      <Footer/>
    </>
  );
}
