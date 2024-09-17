import React, {useState, useEffect} from "react";
import ProjectKoruImg from "../assets/koru_project_img.png";
// import ZetflickstKoruImg from "../assets/zetflicks_proj_3.png";
import BoomerangCapa from "../assets/capa_boomerang_pequena.png"
import { Link } from "react-router-dom";
import "../App.css";
import ImgDinisProjetos from "../assets/projetos_page_svg.svg";
import ImgDinisProjetos2 from "../assets/projetos_page_2_v2.svg";
import TocareBanner from "../assets/Tocare_banner.png";

const ProjectssALONEE = () => {

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  useEffect(() => {
    // Função para verificar a largura da tela e atualizar o estado hovered
    const handleScreenSizeChange = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 423) {
        setHovered(false);
      }
    };

    // Adiciona o listener para verificar a largura da tela quando o componente é montado
    window.addEventListener("resize", handleScreenSizeChange);

    // Remove o listener quando o componente é desmontado para evitar vazamento de memória
    return () => {
      window.removeEventListener("resize", handleScreenSizeChange);
    };
  }, []);

  return (
    <div className="spacee_single_perojts" id="intro">
      {/* <p className="big_title">Projetos.</p> */}
      {/* <p className="content_intro_heroAjustee  space_bottt">
        Os seguintes projetos mostram as minhas competências e experiência
        através de exemplos reais do meu trabalho. Cada projeto tem uma breve
        descrição e e os respetivos links para os seus protótipos com Live demo.
        <br></br>
        <br></br>
        Estes exemplos refletem a minha capacidade de resolver problemas
        complexos, trabalhar com diferentes tecnologias e gerir projetos de
        forma eficaz.
      </p> */}
      
    <img
      className="projetos_foto_circulo"
      src={hovered ? ImgDinisProjetos2 : ImgDinisProjetos}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      alt="projetos_DINIS"
    />
<section className="portfolio">

        <div className="project-card">
          <img src={ProjectKoruImg} alt="koru" />
          <div className="project-info">
            <h2>Koru Mobile App</h2>
           {/*<p>{project.description}</p>*/} 
           <div style={{display: "flex", flexDirection:"row"}}>
           <p className="tags_projetos">UX/UI Design</p><p className="tags_projetos">Branding</p><p className="tags_projetos">Front-end</p></div>
            <Link to={"/project-Koru"}>Ver detalhes</Link>
          </div>
        </div>


 {/*
        <div className="project-card">
          <img src={ZetflickstKoruImg} alt="zetflicks" />
          <div className="project-info">
            <h2>Zetflicks</h2>
          <p>{project.description}</p>
            <span>UI Design e Front-end</span>
            <Link to={"/project2"}>Ver detalhes</Link>
          </div>
        </div>*/} 


        
        {/* <div className="project-card">
          <img src={SubmersoImg} alt="submerso" />
          <div className="project-info">
            <h2>Submerso</h2>
           
            <span>Design e Front-end</span>
            <Link to={"/project3"}>Ver detalhes</Link>
          </div> /project-ToCare
        </div> */}

          <div className="project-card">
          <img src={BoomerangCapa} alt="Boomerang" />
          <div className="project-info">
            <h2>Boomerang</h2>
           <div style={{display: "flex", flexDirection:"row"}}>
           <p className="tags_projetos">UX/UI Design</p><p className="tags_projetos">Branding</p><p className="tags_projetos">Front-end</p></div>
            <Link to={"/project-Boomerang"}>Ver detalhes</Link>
          </div>
        </div>

          <div className="project-card">
          <img src={TocareBanner} alt="Boomerang" />
          <div className="project-info">
            <h2>ToCare</h2>
           <div style={{display: "flex", flexDirection:"row"}}>
           <p className="tags_projetos">Case Study</p><p className="tags_projetos">UX/UI Design</p></div>
            <Link to={"/project-ToCare"}>Ver detalhes</Link>
          </div>
        </div>

    </section>

    </div>
  );
};

export default ProjectssALONEE;

