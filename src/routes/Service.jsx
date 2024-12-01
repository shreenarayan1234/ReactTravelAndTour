import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg"
import Footer from "../components/Footer"
import Trip from "../components/Trip"

const Service = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={AboutImg}
        alt="Hero Image"
        title="Service"
        url="/"
        
      />
      <Trip/>
      <Footer/>
    </>
  );
};

export default Service;
