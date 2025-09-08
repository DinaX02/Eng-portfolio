import React from "react";
import "../App.css";

const AcademicalTimeline = () => {
  const linhaStyle = {
    marginTop: 20,
    width: "200px",
    height: "5px",
    backgroundColor: "#A767FB",
    position: "absolute",
    right: "0",
  };

  const numeroStyle = {
    marginTop: 5,
    position: "absolute",
    right: "15px",
    color: "#A767FB",
    fontSize: "46px",
    fontWeight: "bold",
  };

  return (
    <div className="skills_div">
      <div className="linhasss_roxos">
        <div style={linhaStyle}>
          <p style={numeroStyle}>02</p>
        </div>
      </div>
      <div className="instagram-container">
        <div className="instagram-info">
          <p className="paragrafo_intro_sizes">Educational level</p>

          <p className="fontsize_tags">
            <span className="title_marcado_koru">Academic Path.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademicalTimeline;
