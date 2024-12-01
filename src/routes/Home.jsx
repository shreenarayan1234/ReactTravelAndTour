import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://media.istockphoto.com/id/1612516313/photo/island-paradise-isolated-travel-and-tourism-ads-3d-illustration.jpg?s=1024x1024&w=is&k=20&c=v4rK_8AWjMsngBO0w6KW5CXqHNMrNjDxc55IiNn5Tco="
        alt="Hero Image"
        title="Your Journy Your Story"
        text="Choose Your Favouriate Destination"
        url="/"
        btnClass="show"
        buttonText="Travel Plan"
        
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  );
};

export default Home;
