import React, { useState, useEffect } from "react";
import "../App.css";
import { QRCodeCanvas } from "qrcode.react";
import TecnologiasUtilizadas from "../assets/tecnologias_usadas_boomerang.png";
import AcessibilidadeBommerang from "../assets/Acessibilidade_boomerang.png";
import ResultadosAcessibilidadeBoomerang from "../assets/Resultados_Acessibilidade_boomerang.png";
import DiagramDesenvolvimentoProcess from "../assets/process_desenvolvimento_boomerang.png";
import styled from "styled-components";

const InfoProj4DesignProcess = () => {
  const [activeTab, setActiveTab] = useState("tecnologias");
  const [viewImage, setViewImage] = useState(null);

  useEffect(() => {
    if (viewImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [viewImage]);

  const openImageView = (imageUrl) => {
    setViewImage(imageUrl);
  };

  const closeImageView = () => {
    setViewImage(null);
  };

  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="info_p4">
      {viewImage && (
        <ImageViewModal onClick={closeImageView}>
          <ImageView>
            <img src={viewImage} alt="Imagem em tamanho maior" />
          </ImageView>
        </ImageViewModal>
      )}
      <div className="containerDesignProcess">
        <p className="fontsize_tags">
          <span className="title_marcado_boomerang">Development.</span>
        </p>
        <p className="paragrafo_design_process">
        This project was developed over the course of <strong>a year</strong>, and after the Ideation and Design phases were completed came the most labour-intensive phase of the project, Development, which was marked mainly by Front-end and Back-end development and the constant concern for its Accessibility.
        </p>
        <ImageContainer>
          <img
            className="img_diagram"
            src={DiagramDesenvolvimentoProcess}
            alt="Design Process Diagram"
            onClick={() => openImageView(DiagramDesenvolvimentoProcess)}
          />
        </ImageContainer>


        <TabsContainer>
          <TabButton
            onClick={() => handleTabClick("tecnologias")}
            active={activeTab === "tecnologias"}
          >
            Technologies Used
          </TabButton>
          <TabButton
            onClick={() => handleTabClick("acessibilidade")}
            active={activeTab === "acessibilidade"}
          >
            Accessibility Details
          </TabButton>
          <TabButton
            onClick={() => handleTabClick("resultadosAcessibilidade")}
            active={activeTab === "resultadosAcessibilidade"}
          >
            Results Accessibility
          </TabButton>
        </TabsContainer>
        <ImageContainer>
          {activeTab === "tecnologias" && (
            <img
              className="img_diagram"
              src={TecnologiasUtilizadas}
              alt="Tecnologias utilizadas no desenbvolvimento da Boomerang"
              onClick={() => openImageView(TecnologiasUtilizadas)}
            />
          )}
          {activeTab === "acessibilidade" && (
            <img
              className="img_diagram"
              src={AcessibilidadeBommerang}
              alt="Ferramentas utilizadas para meder a Acessibilidade da Boomerang"
              onClick={() => openImageView(AcessibilidadeBommerang)}
            />
          )}
          {activeTab === "resultadosAcessibilidade" && (
            <img
              className="img_diagram"
              src={ResultadosAcessibilidadeBoomerang}
              alt="Resultados obtidos na Acessibilidade do Projeto Boomerang"
              onClick={() => openImageView(ResultadosAcessibilidadeBoomerang)}
            />
          )}
        </ImageContainer>

           <div className="links_koruu_2" style={{ marginTop: "2em", marginBottom: "1em", display:"flex", flexDirection:"column"}}>
          <div className="links_boomerang" style={{ paddingRight: 20 }}>
            <h3>Link:</h3>
            <a href="https://github.com/DinaX02/Boomerang" target="_blank" rel="noopener noreferrer">
              <p style={{ marginLeft: 10 }}>Front-end Repository</p>
            </a>
          </div>
          <div className="links_boomerang" style={{ textAlign: "center", marginTop: "20px", display:"flex", flexDirection:"column"}}>
            <QRCodeCanvas value="https://664e68495c92c646f698fe82--idyllic-daffodil-41744f.netlify.app/" />
            <p>Project with Mock-up Data</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageViewModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ImageView = styled.div`
  max-width: 90%;
  height: auto;
  overflow: hidden;
  border-radius: 8px;
  background-color: #00c17c;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const TabsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 1em;
    justify-content: center;
`;
const TabButton = styled.button`
  background-color: ${(props) => (props.active ? "#00c17c" : "transparent")};
  color: ${(props) => (props.active ? "#fff" : "#2E2E2E")};
  border: 2px solid ${(props) => (props.active ? "transparent" : "#ccc")};
  font-family: 'Poppins', sans-serif;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 1em;
`;

export default InfoProj4DesignProcess;
