import React, { useState, useEffect } from "react";
import "../App.css";
import DiagramDesignProcess from "../assets/process_koru.png";
import styled from "styled-components";

const InfoProj1DesignProcess = () => {
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

  return (
    <div className="info_p1_koru">
      {viewImage && (
        <ImageViewModal onClick={closeImageView}>
          <ImageView>
            <img src={viewImage} alt="Imagem em tamanho maior" />
          </ImageView>
        </ImageViewModal>
      )}
      <div className="containerDesignProcess">
        <p className="fontsize_tags">
          <span className="title_marcado_koru">Process.</span>
        </p>
        <p className="paragrafo_design_process">
        This project was developed over the course of <strong>one semester</strong> using a user-centred design (UCD) process, prioritising user needs and perspectives through the phases of research and definition, ideation, prototyping and testing. Once these prototypes had been validated, the development of the front-end and back-end interfaces began.
        </p>
        <ImageContainer>
          <img
            className="img_diagram"
            src={DiagramDesignProcess}
            alt="Design Process Diagram"
            onClick={() => openImageView(DiagramDesignProcess)}
          />
        </ImageContainer>
        <div className="links_koruu_2"  style={{marginTop:"2em", marginBottom:"1em"}}>
<div className="links_koruu" style={{paddingRight:20}}><h3>Link:</h3><a href="https://github.com/DinaX02/Koru_app" target="blank"><p style={{marginLeft:10}}>Front-end Repository</p></a></div>
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
  background-color: #807DFF;
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

export default InfoProj1DesignProcess;
