import React from "react";
import "../App.css";
import boomerangMockupOverview from "../assets/mockup_overview_boomerang_2.png"

const InfoProj4 = ()=> {
    return(

<div className="info_p4">
<div className="instagram-container">

<div className="instagram-info"> 
<p className="fontsize_tags"><span className="title_marcado_boomerang">Overview.</span></p>
<p className="paragrafo_origens">Project developed in a CBL context in the first year of a master's degree in Communication and Web Technologies at the University of Aveiro.
<br></br><br></br>
Boomerang is a peer-to-peer clothes rental platform whose core mission is to reduce textile waste, contributing directly to reducing environmental impact.
<br></br><br></br>
By extending the useful life of clothes, it not only reduces the carbon footprint, but also creates economic opportunities for users, promoting a circular economy. In addition to the tangible benefits, by choosing to rent rather than buy, users become active advocates of sustainability, participating in a conscious community.
<br></br><br></br>
This app is not just a platform, but a voice in the global discussion on sustainable fashion. 
</p>

<p className="fontsize_tags"><span className="title_marcado_boomerang">Tasks.</span></p>

<div className="tarefas_boomerang">
        <div className="tags_boomerang">UX/UI Design</div>
        <div className="tags_boomerang">Branding</div>
        <div className="tags_boomerang">Front-end</div>
        <div className="tags_boomerang">Accessibility</div>
        </div>
        <div className="links_koruu_2"  style={{marginTop:"2em", marginBottom:"1em"}}>
<div className="links_boomerang" style={{paddingRight:20}}><h3>Link:</h3><a href="https://guileless-bienenstitch-7518c4.netlify.app/" target="blank"><p style={{marginLeft:10}}>Website</p></a></div>
<div className="links_boomerang"><h3>Link:</h3><a href="https://www.instagram.com/app_boomerang/" target="blank"><p style={{marginLeft:10}}>Instagram</p></a></div></div>        
</div>


<div className="other-info">
<img className="img_vision" src={boomerangMockupOverview} alt="Boomerang mockup  overview"/>
</div>
</div>  
</div>

    )
}   

export default InfoProj4





