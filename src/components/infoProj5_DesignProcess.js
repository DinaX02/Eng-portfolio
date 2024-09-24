import React, { useState, useEffect } from "react";
import "../App.css";
import EmpathyMap from "../assets/empathy map.png"
import DiagramDesignProcess from "../assets/design_thinking_grafico_tocare.png";
import BenchmarkingToCare from "../assets/benchmarking.png";
import HMWToCare from "../assets/HMWtocare.png";
import PersonaToCare from "../assets/PersonaToCare.jpg";
import InsightsToCare from "../assets/Insights.png";
import UserJourneyMapToCare from "../assets/User Journey Map_tocare.png";
import UserFlowToCare from "../assets/User Flow_tocare.png";
// import RequisitosToCare from "../assets/requesitos_tocare.png";
// import SolutionToCare from "../assets/solucao_tocare.png";
// import InovationToCare from "../assets/inovacao_tocare.png";
import styled from "styled-components";

const InfoProj5_DesignProcess = () => {
  const [activeTab, setActiveTab] = useState("empathymap");
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
    <div className="info_tocare">
      {viewImage && (
        <ImageViewModal onClick={closeImageView}>
          <ImageView>
            <img src={viewImage} alt="Imagem em tamanho maior" />
          </ImageView>
        </ImageViewModal>
      )}
      <div className="containerDesignProcess">
        <p className="fontsize_tags">
          <span className="title_marcado_tocare">Design Thinking.</span>
        </p>
        <p className="paragrafo_design_process">
        To meet this challenge, the Design Thinking methodology was used to structure and develop ToCare. In this challenge, only the first 4 phases of this methodology were worked on, with the Empathy, Definition and Ideation phases being particularly prioritised.
        </p>
        <ImageContainer>
          <img
            className="img_diagram"
            src={DiagramDesignProcess}
            alt="Design Process Diagram"
            onClick={() => openImageView(DiagramDesignProcess)}
          />
        </ImageContainer>
      </div>
      <div className="containerDesignProcess">
      <p className="fontsize_tags_tocare">
          <span className="title_marcado_tocare">Process.</span>
      </p>
      <TabsContainer>
          <TabButton
            onClick={() => handleTabClick("empathymap")}
            active={activeTab === "empathymap"}
          >
            Empathy Map
          </TabButton>

          <TabButton
            onClick={() => handleTabClick("designSystem")}
            active={activeTab === "designSystem"}
          >
            Benchmarking
          </TabButton>

          <TabButton
            onClick={() => handleTabClick("persona")}
            active={activeTab === "persona"}
          >
            Persona
          </TabButton>

          <TabButton
            onClick={() => handleTabClick("hmw")}
            active={activeTab === "hmw"}
          >
            How might we? 
          </TabButton>
  
          <TabButton
            onClick={() => handleTabClick("insights")}
            active={activeTab === "insights"}
          >
            Insights 
          </TabButton>

          <TabButton
            onClick={() => handleTabClick("userjourney")}
            active={activeTab === "userjourney"}
          >
            User Journey Map 
          </TabButton>

          <TabButton
            onClick={() => handleTabClick("userflow")}
            active={activeTab === "userflow"}
          >
            User Flow 
          </TabButton>

          {/* <TabButton
            onClick={() => handleTabClick("solucao")}
            active={activeTab === "solucao"}
          >
            Solution 
          </TabButton>

          <TabButton
            onClick={() => handleTabClick("requisitos")}
            active={activeTab === "requisitos"}
          >
            Requirements
          </TabButton>

          <TabButton
            onClick={() => handleTabClick("inovacao")}
            active={activeTab === "inovacao"}
          >
            Inovation
          </TabButton> */}

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
          {activeTab === "designSystem" && (
            <img
              className="img_diagram"
              src={BenchmarkingToCare}
              alt="benchmarking_tocare"
              onClick={() => openImageView(BenchmarkingToCare)}
            />
          )}
          {activeTab === "persona" && (
            <img
              className="img_diagram"
              src={PersonaToCare}
              alt="persona"
              onClick={() => openImageView(PersonaToCare)}
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
            {activeTab === "insights" && (
            <img
              className="img_diagram"
              src={InsightsToCare}
              alt="Insights"
              onClick={() => openImageView(InsightsToCare)}
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
            {/* {activeTab === "solucao" && (
            <img
              className="img_diagram"
              src={SolutionToCare}
              alt="solucao"
              onClick={() => openImageView(SolutionToCare)}
            />
          )}
            {activeTab === "requisitos" && (
            <img
              className="img_diagram"
              src={RequisitosToCare}
              alt="requisitos"
              onClick={() => openImageView(RequisitosToCare)}
            />
          )}
            {activeTab === "inovacao" && (
            <img
              className="img_diagram"
              src={InovationToCare}
              alt="inocação"
              onClick={() => openImageView(InovationToCare)}
            />
          )} */}
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
  background-color: ${(props) => (props.active ? "#2EA7BA" : "transparent")};
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
  background-color: #2EA7BA;
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

export default InfoProj5_DesignProcess;
