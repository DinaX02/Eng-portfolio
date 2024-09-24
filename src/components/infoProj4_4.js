import React, { useState, useEffect} from "react";
import "../App.css";
import DiagramDesignProcess from "../assets/logos.png";
// import LogoImage from "../assets/design_process_diagram.png";
import DownloadIcon from "../assets/download_icon.svg"
import ColorsImage from "../assets/cores.png";
import TypographyImage from "../assets/tipografia.png";
import IconographyImage from "../assets/iconografia.png";
import ComponentsImage from "../assets/Components.png";
import ManualPDF from "../assets/Portfolio_Boomerang.pdf"
import styled from "styled-components";

const InfoProj4_4 = () => {
  const [activeTab, setActiveTab] = useState("designSystem");
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

  // Função para baixar o PDF
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = ManualPDF;
    link.setAttribute("download", "manual_identidade_boomerang.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
          <span className="title_marcado_boomerang">Design System.</span>
        </p>
        <p className="paragrafo_design_process">
        For the Boomerang project, a design system was developed to guarantee consistency and efficiency in the creation process, known as the Design System.
        </p>

        <TabsContainer>
          <TabButton
            onClick={() => handleTabClick("designSystem")}
            active={activeTab === "designSystem"}
          >
            Logo
          </TabButton>
          <TabButton
            onClick={() => handleTabClick("colors")}
            active={activeTab === "colors"}
          >
            Colours
          </TabButton>
          <TabButton
            onClick={() => handleTabClick("typography")}
            active={activeTab === "typography"}
          >
            Typography
          </TabButton>
          <TabButton
            onClick={() => handleTabClick("iconography")}
            active={activeTab === "iconography"}
          >
            Iconography
          </TabButton>
          <TabButton
            onClick={() => handleTabClick("components")}
            active={activeTab === "components"}
          >
            Components
          </TabButton>
        </TabsContainer>
        <ImageContainer>
          {activeTab === "designSystem" && (
            <img
              className="img_diagram"
              src={DiagramDesignProcess}
              alt="Logo- Design system"
              onClick={() => openImageView(DiagramDesignProcess)}
            />
          )}
          {activeTab === "colors" && (
            <img
              className="img_diagram"
              src={ColorsImage}
              alt="Colors- Design system"
              onClick={() => openImageView(ColorsImage)}
            />
          )}
          {activeTab === "typography" && (
            <img
              className="img_diagram"
              src={TypographyImage}
              alt="Typography-Design system"
              onClick={() => openImageView(TypographyImage)}
            />
          )}
          {activeTab === "iconography" && (
            <img
              className="img_diagram"
              src={IconographyImage}
              alt="Iconography- Design system"
              onClick={() => openImageView(IconographyImage)}
            />
          )}
          {activeTab === "components" && (
            <img
              className="img_diagram"
              src={ComponentsImage}
              alt="Components- Design system"
              onClick={() => openImageView(ComponentsImage)}
            />
          )}
        </ImageContainer>

        <p className="paragrahseemore">To see it in more detail: </p>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <button className="btnInstallManual" onClick={downloadPDF}>Project Brand Guideline Manual <img style={{marginLeft: "10px"}} src={DownloadIcon} alt="icon download manual de Design"/></button></div>
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

export default InfoProj4_4;