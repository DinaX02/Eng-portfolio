import React from "react";
import coverBoomerang from "../assets/img_cover_boomerang.png";
import "../App.css";
import setaBack from '../assets/Arrow 1 (1).svg'
import { useNavigate } from "react-router-dom";

const ContentP4 = () => {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }


  return (
    <div>
                <header className="header_proj4">
    <div onClick={goBack} className="seta_rounded">
    <img className="seta_back_projects" src={setaBack} alt="goBackArrow"/></div>
</header>

    <div className="div_content_p4">
      <img
        className="img-pc_movies"
        src={coverBoomerang}
        alt="mockupBoomerang"
      />
      <div className="content_p4">
        <h1 className="title_boomerang_hero">Boomerang</h1>

        <p className="fontsize_tags"><span className="text_marcado_boomerang">Tags.</span></p>

<div style={{width: "auto", display: "flex", flexWrap:"wrap", alignItems:"center", maxWidth: "600px"}}>
        <div className="tags_boomerang">Clothes Rental</div><div className="tags_boomerang">Peer-to-Peer</div><div className="tags_boomerang">Sustainability</div> <div className="tags_boomerang">E-commerce</div><div className="tags_boomerang_big">Online Community</div>
</div>

        <p className="fontsize_tags"><span className="text_marcado_boomerang">Tools.</span></p>

        <div style={{width: "auto", display: "flex", flexWrap:"wrap", alignItems:"center", maxWidth: "600px"}}>
        <div className="tags_boomerang">Figma</div> <div className="tags_boomerang">Jira</div><div className="tags_boomerang">React js</div><div className="tags_boomerang">Material UI</div> <div className="tags_boomerang">PwA</div><div className="tags_boomerang">Redux</div><div className="tags_boomerang">Silktide</div><div className="tags_boomerang">Acess Monitor</div><div className="tags_boomerang">Axe DevTools</div><div className="tags_boomerang">Node js</div><div className="tags_boomerang">GitHub</div><div className="tags_boomerang">Netlify</div>
</div>
      </div>
    </div>    </div>
  );
};

export default ContentP4;
