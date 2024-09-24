import React from "react";
import coverToCare from "../assets/cover_tocaree.png";
import "../App.css";
import setaBack from "../assets/Arrow 1 (1).svg";
import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

const ContentP5 = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <header className="header_proj4">
        <div onClick={goBack} className="seta_rounded">
          <img
            className="seta_back_projects"
            src={setaBack}
            alt="goBackArrow"
          />
        </div>
        {/* <h1>Submerso </h1> */}
      </header>
      <div className="div_content_p4">
        <img
          className="img-pc_movies"
          src={coverToCare}
          alt="mockup ToCare"
        />
        <div className="content_p4">
          <h1 className="title_tocare_hero">ToCare</h1>

          <p className="fontsize_tags">
            <span className="text_marcado_tocare">Tags.</span>
          </p>

          <div
            style={{
              width: "auto",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              maxWidth: "600px",
            }}
          >
            <div className="tags_tocare">Challenge</div>
            <div className="tags_tocare_big">Design Thinking</div>
            <div className="tags_tocare">Inovation</div>
            <div className="tags_tocare">Health</div>
            <div className="tags_tocare_big">Elderly carers</div>
          </div>

          <p className="fontsize_tags">
            <span className="text_marcado_tocare">Tools.</span>
          </p>

          <div
            style={{
              width: "auto",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              maxWidth: "600px",
            }}
          >
            <div className="tags_tocare">FigJam</div>
            <div className="tags_tocare">Jira</div>
            <div className="tags_tocare_big">Paper and pen</div>
            <div className="tags_tocare">Figma</div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentP5;
