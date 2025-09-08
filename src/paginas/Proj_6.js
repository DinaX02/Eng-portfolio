import React from "react";
import "../App.css";
import NavbarUXToolkit from "../components/Navbar_uxToolkit.js";
import ContentP6 from "../components/content_proj6.js";
import InfoProj6 from "../components/infoProj6.js";
import ContactosUXToolkit from "../components/ContactosUXToolkit.js";
import InfoProj6DesignProcess from "../components/infoProj6_DesignProcess.js";
import InfoProj6UXToolkitFisica from "../components/infoProj6_ux_toolkit_fisica.js";
import InfoProj6UXToolkitDigital from "../components/infoProj6_ux_toolkit_digital.js";
const Project6 = ()=> {


    return(
        <div>
           <NavbarUXToolkit/> 
           <ContentP6/>
           <InfoProj6/>
        <InfoProj6DesignProcess/>
          <InfoProj6UXToolkitFisica/>
          <InfoProj6UXToolkitDigital/>
           <ContactosUXToolkit/>
   
        </div>
    )
}

export default Project6





