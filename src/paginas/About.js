import React from "react";
import NavbarAbout from "../components/Navbar_about";
import Skills from "../components/Skills";
import "../App.css";
import Contactos from "../components/Contactos";
import HeroAbout from "../components/heroAbout";
import Origens from "../components/Origens";

const About = () => {
  return (
    <div>
      <NavbarAbout/>
      <HeroAbout/>
      <Origens/>
   {/* <PercursoAcademico /> */}
      <Skills />
      <Contactos />
    </div>
  );
};

export default About;
