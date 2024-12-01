import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg"
import Footer from "../components/Footer"
import AboutUs from "../components/AboutUs";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={AboutImg}
        alt="Hero Image"
        title="About"
        url="/"
        
      />
      <AboutUs/>
      <Footer/>
    </>
  );
};

export default About;
