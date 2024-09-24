import React from "react";
import "../App.css";
import NavbarProjectToCare from "../components/Navbar_projectToCare.js";
import ContentP5 from "../components/content_proj5.js";
import InfoProj5 from "../components/infoProj5.js";
import ContactosToCare from "../components/ContactosToCare.js";
import InfoProj52 from "../components/infoProj5_2.js";
import InfoProj5DesignProcess from "../components/infoProj5_DesignProcess.js";
import InfoProj5Wireframes from "../components/infoProj5_Wireframes.js";
import InfoProj5Screens from "../components/infoProj5_Screens.js";
import InfoProj5Final from "../components/infoProj5_Final.js";

const Project5 = ()=> {


    return(
        <div>
           <NavbarProjectToCare/> 
           <ContentP5/>
            <InfoProj5/>
          <InfoProj52/>
          <InfoProj5DesignProcess/>
          <InfoProj5Wireframes/>
          <InfoProj5Screens/>
          <InfoProj5Final/>
           <ContactosToCare/>
   
        </div>
    )
}

export default Project5





