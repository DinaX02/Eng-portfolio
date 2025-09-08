import React, { useState, useEffect } from "react";
import "../App.css";
import EmpathyMap from "../assets/empathy map.png";
import DiagramDesignProcess from "../assets/metodologia_Uxtoolkit.png";
import ObjetivosEstudo from "../assets/Objetivos_uxtoolkit.png";
import HMWToCare from "../assets/HMWtocare.png";
import ReferencialTeorico from "../assets/referencialTeorico_uxtoolkit.png";
import InstrumentosRecolhadeDados from "../assets/instrumentoRecolhadeDados.png";
import UserJourneyMapToCare from "../assets/User Journey Map_tocare.png";
import UserFlowToCare from "../assets/User Flow_tocare.png";
import PerguntadeInvestigacao from "../assets/pergunta de investigacao_uxtoolkit.png";
import styled from "styled-components";

const InfoProj6_DesignProcess = () => {
  const [activeTab, setActiveTab] = useState("perguntadeinvestigacao");
  const [viewImage, setViewImage] = useState(null);

  useEffect(() => {
    if (viewImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [viewImage]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const openImageView = (imageUrl) => {
    setViewImage(imageUrl);
  };

  const closeImageView = () => {
    setViewImage(null);
  };

  return (
    <div className="info_uxtoolkit">
      {viewImage && (
        <ImageViewModal onClick={closeImageView}>
          <ImageView>
            <img src={viewImage} alt="Imagem em tamanho maior" />
          </ImageView>
        </ImageViewModal>
      )}
      <div className="containerDesignProcess">
        <p className="fontsize_tags">
          <span className="title_marcado_uxtoolkit">Methodology.</span>
        </p>
        <p className="paragrafo_design_process">
          Development(al) research enabled the continuous integration of research and development in the construction and evaluation of prototypes, ensuring a permanent cycle of refinement of the artefact until it was fully suited to the context of use.<br></br><br></br>To this end, the process took place in five phases: theoretical framework, planning and creation of data collection instruments, development of prototypes and collection and analysis of data from the questionnaire and interviews, validation of solutions with users and final refinement, and finally the consolidation and dissemination of the information collected throughout the study.
        </p>
        <ImageContainer>
          <img
            className="img_diagram"
            src={DiagramDesignProcess}
            alt="Diagrama processo metodologico"
            onClick={() => openImageView(DiagramDesignProcess)}
          />
        </ImageContainer>
      </div>
      <div className="containerDesignProcess">
      <p className="fontsize_tags_tocare">
          <span className="title_marcado_uxtoolkit">Process.</span>
      </p>
      <TabsContainer>
                  <TabButton
            onClick={() => handleTabClick("perguntadeinvestigacao")}
            active={activeTab === "perguntadeinvestigacao"}
          >
            Research Question
          </TabButton>
                  <TabButton
            onClick={() => handleTabClick("objetivos")}
            active={activeTab === "objetivos"}
          >
            Objectives
          </TabButton>
          <TabButton
            onClick={() => handleTabClick("referencialteorico")}
            active={activeTab === "referencialteorico"}
          >
            Theoretical Framework
          </TabButton>
  
          <TabButton
            onClick={() => handleTabClick("instrumentosrecolhadedados")}
            active={activeTab === "instrumentosrecolhadedados"}
          >
            Data collection instruments
          </TabButton>
        </TabsContainer>
        <ImageContainer>
        {activeTab === "empathymap" && (
            <img
              className="img_diagram"
              src={EmpathyMap}
              alt="empathy map_tocare"
              onClick={() => openImageView(EmpathyMap)}
            />
          )}
          {activeTab === "objetivos" && (
            <img
              className="img_diagram"
              src={ObjetivosEstudo}
              alt="objetivos do estudo ux toolkit"
              onClick={() => openImageView(ObjetivosEstudo)}
            />
          )}
          {activeTab === "referencialteorico" && (
            <img
              className="img_diagram"
              src={ReferencialTeorico}
              alt="Referencial teorico do estudo"
              onClick={() => openImageView(ReferencialTeorico)}
            />
          )}
          {activeTab === "hmw" && (
            <img
              className="img_diagram"
              src={HMWToCare}
              alt="How might we questions"
              onClick={() => openImageView(HMWToCare)}
            />
          )}
            {activeTab === "instrumentosrecolhadedados" && (
            <img
              className="img_diagram"
              src={InstrumentosRecolhadeDados}
              alt="Instrumentos Recolha de Dados"
              onClick={() => openImageView(InstrumentosRecolhadeDados)}
            />
          )}
            {activeTab === "userjourney" && (
            <img
              className="img_diagram"
              src={UserJourneyMapToCare}
              alt="user journey map"
              onClick={() => openImageView(UserJourneyMapToCare)}
            />
          )}
            {activeTab === "userflow" && (
            <img
              className="img_diagram"
              src={UserFlowToCare}
              alt="user flow"
              onClick={() => openImageView(UserFlowToCare)}
            />
          )}
            {activeTab === "perguntadeinvestigacao" && (
            <img
              className="img_diagram"
              src={PerguntadeInvestigacao}
              alt="pergunta de investigacao"
              onClick={() => openImageView(PerguntadeInvestigacao)}
            />
          )}
        </ImageContainer>
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

const TabsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 1em;
    justify-content: center;
`;

const TabButton = styled.button`
  background-color: ${(props) => (props.active ? "#CA9050" : "transparent")};
  color: ${(props) => (props.active ? "#fff" : "#2E2E2E")};
  border: 2px solid ${(props) => (props.active ? "transparent" : "#ccc")};
  font-family: 'Poppins', sans-serif;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 1em;
`;

const ImageView = styled.div`
  max-width: 90%;
  height: auto;
  overflow: hidden;
  border-radius: 8px;
  background-color: #CA9050;
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

export default InfoProj6_DesignProcess;
