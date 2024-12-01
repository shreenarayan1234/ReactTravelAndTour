import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/3.jpg"
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={AboutImg}
        alt="Hero Image"
        title="Contact"
        url="/"
      />
      <ContactForm/>
      <Footer/>
    </>
  );
};

export default Contact;
