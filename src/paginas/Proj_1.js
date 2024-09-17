import React from "react";
import NavbarProject from "../components/Navbar_project";
// import HeroProject1 from "../components/hero_proj1";
import ContentP1 from "../components/content_proj1";
import InfoProj1 from "../components/infoProj1";
import Contactos from "../components/Contactos";
import InfoProj12 from "../components/infoProj1_2";
import InfoProj13 from "../components/infoProj1_3";
import InfoProj14 from "../components/infoProj1_4";
import InfoProj5 from "../components/infoProj1_5";
import InfoProj1DesignSystem from "../components/infoProj1_DesignSystem";
import InfoProj1DesignProcess from "../components/infoProj1_DesignProcess";
import "../App.css";

const Project_1 = ()=> {


    return(
        <div>
            <NavbarProject />
<ContentP1/>
<InfoProj1/>
<InfoProj5/>
<InfoProj1DesignProcess/>
<InfoProj1DesignSystem/>
<InfoProj12/>
<InfoProj13/>
<InfoProj14/>
<Contactos/>
        </div>
    )
}

export default Project_1





