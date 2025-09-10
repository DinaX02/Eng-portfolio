import React  from 'react';
import imgPercursoAcademicoSvg from "../assets/ilustrationPercursoAcademicoENG.svg"
import "../App.css";
import styled from 'styled-components';

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  align-items: center;
`;

const ButtonPlanoCurricular = styled.button`
  display: inline-block;
  text-align: center;
  padding: 0.6rem 1.2rem;
  background-color: #1c1c1c;
  color: rgba(189, 139, 255, 0.9) !important;
  border-radius: 12px;
  font-size: 0.85rem;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;

const Separator = styled.hr`
  width: 50px;
  border: 0;
  border-top: 2px solid #A767FB;
  margin: 0.5rem 0;
`;

const Averages = styled.div`
  font-size: 0.9rem;
  color: #333;
  margin-top: 0.5rem;
`;

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
    <div className="into_divvv">
    <div className="skills_div">
    <div className="linhasss_roxos">
    <div style={linhaStyle}>
      <p style={numeroStyle}>02</p>
    </div>
  </div>
    <div className="instagram-container">
    <div className="instagram-info">
    <p className="paragrafo_intro_sizes">Academic level - Universidade de Aveiro</p>

    <p className="fontsize_tags">
      <span className="title_marcado_koru">Path.</span>
    </p>
    <p className='tituloEtapasAcademicas'>Bachelor's Degree in Multimedia and Communication Technologies (2020-2023)</p>
        <p className="paragrafo_percurso">This Bachelor's degree provided a link between theory and practice in the various stages of multimedia creation - from design and planning to development and evaluation - equipping me with technical skills (audiovisual, 3D, game creation, mobile applications and dynamic web pages) and a critical view of communication processes and human-computer interaction. On a personal level, it strengthened my curiosity, ability to solve complex problems and work in a team; on a professional level, it gave me the versatility to design and produce innovative content, adaptable to different industry sectors, promoting efficiency, innovation and user experience.
        </p>
          <ButtonsContainer>
              <ButtonPlanoCurricular
        as="a"
        href="https://www.ua.pt/pt/c/1531/p"
        target="_blank"
        rel="noopener noreferrer"
      >
        Study plan
      </ButtonPlanoCurricular>
      <Separator />
 <Averages>
        <p style={{fontSize:"18px"}}>Final average: <strong>15,4</strong></p>
      </Averages>
</ButtonsContainer>
         <p className='tituloEtapasAcademicas'>Master's Degree in Communication and Web Technologies (2023-2025)</p>
          <p className="paragrafo_percurso">MCTW mainly deepened my specialisation in UX/UI Design and Web Development, focusing on the conceptualisation, development, and evaluation of web solutions based on Challenge-Based Learning methodologies. Here, I developed key skills in creating sustainable digital products, designing responsive and inclusive interfaces, and evaluating user experience. The experience of proposing solutions to real challenges reinforced my autonomy, strategic thinking, and entrepreneurial spirit. Professionally, it prepared me to lead web projects, integrating current and emerging technologies and ensuring the accessibility, usability, and positive social impact of the project in question.
        </p>
 <ButtonsContainer>
              <ButtonPlanoCurricular
        as="a"
        href="https://www.ua.pt/pt/c/508/p"
        target="_blank"
        rel="noopener noreferrer"
      >
        Study plan
      </ButtonPlanoCurricular>
            <Separator />
 <Averages>
        <p style={{fontSize:"18px"}}>Final average:<strong> 17,3</strong></p>
      </Averages>
      </ButtonsContainer>
  </div>
        <div className="other-info">
<img className="img_vision" src={imgPercursoAcademicoSvg} alt="Ilustracao Percurso Académico"/> 
      </div>
</div></div></div>
  );
};

export default PercursoAcademico;
