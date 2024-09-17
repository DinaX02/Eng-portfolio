import React from "react";
import "../App.css";
import imgVisaoGeRAL from "../assets/visao_geral.png";

const Introduction = () => {
  return (
    <div id="intro" className="into_divvv">
      <div className="instagram-container">
        <div className="instagram-info">
          <p className="paragrafo_intro_sizes">Introduction</p>

          <p className="fontsize_tags">
            <span className="title_marcado_koru">Overview.</span>
          </p>

          <p className="paragrafo_origens">
          My portfolio reflects my ability to combine creativity with the technical solutions needed to fulfil the challenges I face.<br></br>
            <br></br>When creating my designs, I pay attention to every detail, from the choice of colour palettes and typography to the selection of icons and illustrations. My aim is always to strike a balance between aesthetics and functionality, ensuring that every element in the design has a clear purpose and meets the needs of the users.
          </p>
        </div>
        <div className="other-info">
          <img
            className="img_vision"
            src={imgVisaoGeRAL}
            alt="imgCoverVisaoGeral"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;

