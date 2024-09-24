import React, { useState, useEffect} from "react";
import "../App.css";
import RequisitosToCare from "../assets/requesitos_tocare.png";
import SolutionToCare from "../assets/solucao_tocare.png";
import InovationToCare from "../assets/inovacao_tocare.png";
import styled from "styled-components";

const InfoProj5Final = () => {
  const [activeTab, setActiveTab] = useState("solucao");
  const [viewImage, setViewImage] = useState(null);

  useEffect(() => {

    if (viewImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
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
          <span className="title_marcado_tocare">ToCare.</span>
        </p>

        <TabsContainer>
          <TabButton
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
          </TabButton>

        </TabsContainer>
        <ImageContainer>
        {activeTab === "solucao" && (
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
          )}
        </ImageContainer>
      </div>
    </div>
  );
};

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

export default InfoProj5Final;