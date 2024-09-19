import React from "react";
import teleKOru from  "../assets/mobilee_context_koru.png"
import "../App.css";
import setaBack from '../assets/Arrow 1 (1).svg'
import { useNavigate } from "react-router-dom";

const ContentP1 = ()=> {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    
return (
<div>
            <header className="header_proj4">
<div onClick={goBack} className="seta_rounded">
<img className="seta_back_projects" src={setaBack} alt="goBackArrow"/></div>
{/* <h1>Submerso </h1> */}
</header>

<div className="div_content_p4">
  <img
    className="img-pc_movies"
    src={teleKOru}
    alt="mockupKoru"
  />
  <div className="content_p4">
    <h1 className="title_koru_hero">Koru</h1>

    <p className="fontsize_tags"><span className="text_marcado_koru">Tags.</span></p>

<div style={{width: "auto", display: "flex", flexWrap:"wrap", alignItems:"center", maxWidth: "600px"}}>
    <div className="tags_koru">Mobile App</div><div className="tags_koru_big">Event Organisation
</div><div className="tags_koru">Investment</div> <div className="tags_koru">Voting</div><div className="tags_koru">Digital Coins</div>
</div>

    <p className="fontsize_tags"><span className="text_marcado_koru">Tools.</span></p>

    <div style={{width: "auto", display: "flex", flexWrap:"wrap", alignItems:"center", maxWidth: "600px"}}>
    <div className="tags_koru">Figma</div><div className="tags_koru">React Native</div><div className="tags_koru">GitHub</div>
</div>
  </div>
</div>
</div>

    )
}

export default ContentP1





