import React from "react";
// import HorizontalTimeline from "react-horizontal-timeline";
import "../App.css";

const PercursoAcademico = () => {
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
    <p className="paragrafo_intro_sizes">A nível Educacional</p>

    <p className="fontsize_tags">
      <span className="title_marcado_koru">Percurso Académico.</span>
    </p>
{/* 
    <p style={{ marginTop: 40, fontSize: 19 }}>
      Através do{" "}
      <span className="title_marcado_skills">UX/UI Design</span> e do{" "}
      <span className="title_marcado_skills">
        Desenvolvimento Front-end
      </span>
      , sou capaz de criar experiências envolventes e únicas no utilizador
      , combinando o design com o conhecimento técnico para o
      desenvolvimento de soluções web que cativam e satisfazem os seus
      utilizadores.
    </p> */}
  </div></div></div>
  );
};

export default PercursoAcademico;
