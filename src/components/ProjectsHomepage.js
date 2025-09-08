import React from "react";
import ProjectKoruImg from "../assets/koru_project_img.png";
import BoomerangCapa from "../assets/capa_boomerang_pequena.png";
import TocareBanner from "../assets/Tocare_banner.png";
import UXToolkitBanner from "../assets/ux toolkit_banner.svg";
import "../App.css";
import ProjectUICard from "./CardUIProject";
import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;       
  justify-content: center; 
  gap: 2rem; 
  padding: 4rem 2rem;
  box-sizing: border-box;
`;

export const CardWrapper = styled.div`
  flex: 0 0 320px;
  max-width: 320px;
`;

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
   <CardsContainer>
        <CardWrapper>
          <ProjectUICard
            image={UXToolkitBanner}
            title="UX Toolkit"
            year="2025"
            tags={[
              "Master's thesis",
              "Research Project",
              "UX/UI Design",
              "Front-end",
            ]}
            link="/project-UXToolkit"
          />
        </CardWrapper>
        <CardWrapper>
          {" "}
          <ProjectUICard
            image={BoomerangCapa}
            title="Boomerang"
            year="2024"
            tags={[
              "UX/UI Design",
              "Branding",
              "Front-end",
              "Challenge Based Learning",
            ]}
            link="/project-Boomerang"
          />
        </CardWrapper>
                <CardWrapper>
          {" "}
          <ProjectUICard
            image={TocareBanner}
            title="ToCare"
            year="2024"
            tags={["Case Study", "1 Week Challenge", "UX/UI Design"]}
            link="/project-ToCare"
          />
        </CardWrapper>
        <CardWrapper>
          {" "}
          <ProjectUICard
            image={ProjectKoruImg}
            title="Koru Mobile App"
            year="2023"
            tags={[
              "Final Bachelor's Degree Project",
              "UX/UI Design",
              "Branding",
              "Front-end",
            ]}
            link="/project-Koru"
          />
        </CardWrapper>
      </CardsContainer>
    </div>
  );
};

export default ProjectsHomePage;
