import { Routes, Route } from "react-router-dom";
import About from "./components/landingPage/About";
import FeaturedProjects from "./components/landingPage/FeaturedProjects";
import Footer from "./components/landingPage/Footer";
import Header from "./components/landingPage/Header";
import Hero from "./components/landingPage/Hero";
import Experience from "./components/landingPage/Experience";
import Education from "./components/landingPage/Education";
import Skills from "./components/landingPage/Skills";
import Certification from "./components/landingPage/Certification";


function App() {

  return (
    <div className="bg-gray-100 min-h-screen">

      <Header />
      <div id="home"><Hero/></div>
      <div id="about"><About/></div>
      <div id="skills"><Skills/></div>
      <div id="education"><Education/></div>
      <div id="experience"><Experience/></div>
      <div id="certificate"><Certification/></div>
      <div id="projects"><FeaturedProjects/></div>
      <Footer/>
    </div>
    
  );
}

export default App;