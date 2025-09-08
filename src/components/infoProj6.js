import React from "react";
import "../App.css";
import uxToolkitOverview from "../assets/coverWEBSITE uxtoolkit.png"

const InfoProj6 = ()=> {
    return(

<div className="info_p6">

<div className="instagram-container">

<div className="instagram-info"> 
<p className="fontsize_tags"><span className="title_marcado_uxtoolkit">Overview.</span></p>
<p className="paragrafo_origens">This study stems from a problem clearly identified by UI designers and developers who face difficulties in applying UX methodologies to digital products due to a limited perception of their strategic value, lack of adequate resources, multidisciplinary teams, and tight deadlines that shorten product planning phases.<br></br><br></br>The proposed solution is a <strong>hybrid toolkit</strong> consisting of a physical component (37 cards, manual and three practical exercises) and a digital component (interactive web platform) that aims to guide UX decisions in a practical and collaborative way.
<br></br><br></br>
The development(al) research methodology was chosen for its exploratory and iterative nature, allowing both components to be continuously prototyped, tested and refined with teachers/researchers, Communication Sciences and Technologies students and UX/UI professionals.
<br></br><br></br>
The results show that the UX Toolkit not only consolidates UX best practices, but also adapts to the real needs of users, facilitating technical decision-making at each stage of digital product development.
</p>

<p className="fontsize_tags"><span className="title_marcado_uxtoolkit">Tasks.</span></p>

<div className="tarefas_boomerang">
    <div className="tags_uxtoolkit_big">Scientific Research</div>
        <div className="tags_uxtoolkit">UX/UI Design</div>
        <div className="tags_uxtoolkit">Front-end</div>
        </div>  

        <div className="links_uxtoolkit" style={{paddingRight:20}}><h3>Link:</h3><a href="https://uxtoolkit.netlify.app/" target="blank"><p style={{marginLeft:10}}>Plataforma Digital | UX Toolkit</p></a></div> 
</div>


<div className="other-info">
<img className="img_vision" src={uxToolkitOverview} alt="UX Toolkit website imagem overview"/>
</div>
</div>  
</div>

    )
}   

export default InfoProj6





