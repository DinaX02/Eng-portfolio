import React from "react";
import "../App.css";
import imgKoru_1 from "../assets/content_koru.png"

const InfoProj1 = ()=> {
    return(
<div className="info_p1_koru">

<div className="instagram-container">

<div className="instagram-info"> 
<p className="fontsize_tags"><span className="title_marcado_koru">Overview.</span></p>
<p className="paragrafo_origens">This project aims to develop a voting platform designed primarily for competitions where the organisers want to add an interactive component to increase participation and investment in, for example, projects or ideas.
<br></br><br></br>
The application was developed as part of the Koru Project and is an event tracking platform that allows event organisers to create and manage events efficiently, while providing event participants with a personalised and interactive experience.
<br></br><br></br>
The focus of the application is the dynamics of voting on the projects shown at the event in question. In other words, this project aims to facilitate the process of creating and managing voting activities on projects within a live event. 
</p>

<p className="fontsize_tags" style={{marginTop:"2em"}}><span className="title_marcado_koru">Tasks.</span></p>

<div className="tarefas_boomerang">
        <div className="tags_koru">UX/ UI Design</div>
        <div className="tags_koru">Branding</div>
        <div className="tags_koru">Front-end</div>
        </div>
<div className="links_koruu_2"  style={{marginTop:"2em", marginBottom:"1em"}}>
<div className="links_koruu" style={{paddingRight:20}}><h3>Link:</h3><a href="https://jovial-salamander-313a31.netlify.app/" target="blank"><p style={{marginLeft:10}}>Website</p></a></div>
<div className="links_koruu"><h3>Link:</h3><a href="https://www.instagram.com/koru.app/" target="blank"><p style={{marginLeft:10}}>Instagram</p></a></div></div>        
</div>



<div className="other-info">
<img className="img_vision" src={imgKoru_1} alt="Boomerang Koru overview"/>
</div>
</div>  
</div>
    )
}   

export default InfoProj1





