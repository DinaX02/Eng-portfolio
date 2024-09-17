import React from "react";
import ProjectKoruImg from "../assets/koru_project_img.png";
import BoomerangCapa from "../assets/capa_boomerang_pequena.png";
import { Link } from "react-router-dom";
import TocareBanner from "../assets/Tocare_banner.png";
import "../App.css";

const ProjectsHomePage = () => {
  return (
    <div id="projetos" className="altura_projetos"> 
    
  <div className="container_projectsHp">
  <div className="instagram-info">
  <p className="paragrafo_intro_sizes">My work</p>

<p className="fontsize_tags"><span className="title_marcado_koru">Projects.</span></p>
</div>
</div>         

 <div className="instagram-container">



      <div className="instagram-info">
        
        <p style={{marginTop:10, fontSize:19}}>The following projects showcase my skills and experience through real examples of my work. Each project has a brief description, highlighting my skills and the tasks I was responsible for.
        </p>
        

      </div>
      <div className="other-info">
        <p style={{marginTop:10, fontSize:19}}>These examples not only reflect my ability to solve complex problems, work with different technologies and manage projects effectively, but also demonstrate my dedication to achieving good results.</p>
      </div>
    </div> 
      <section className="portfolio">

<div className="project-card">
  <img src={ProjectKoruImg} alt="koru" />
  <div className="project-info">
    <h2>Koru Mobile App</h2>
   <div style={{display: "flex", flexDirection:"row"}}>
           <p className="tags_projetos">UX/UI Design</p><p className="tags_projetos">Branding</p><p className="tags_projetos">Front-end</p></div>
    <Link to={"/project-Koru"}>Ver detalhes</Link>
  </div>
</div>

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

export default ProjectsHomePage;
