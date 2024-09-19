import React, { useState, useEffect } from "react";
import "../App.css";
import Persona from "../assets/persona_koru.jpg";
import styled from "styled-components";

const InfoProj1_3 = () => {
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

  const openImageView = (imageUrl) => {
    setViewImage(imageUrl);
  };

  const closeImageView = () => {
    setViewImage(null);
  };

  return (
    <div className="info_p22222">
      {viewImage && (
        <ImageViewModal onClick={closeImageView}>
          <ImageView>
            <img src={viewImage} alt="Imagem em tamanho maior" />
          </ImageView>
        </ImageViewModal>
      )}

      <div className="instagram-container">
        <div className="instagram-info">
          <p className="fontsize_tags">
            <span className="title_marcado_koru">Persona.</span>
          </p>

          <p className="paragrafo_origens">
          The application's target audience includes event participants, who will be able to use the platform to submit projects or vote for their favourite projects.
            <br></br>
            <br></br>
            To idealise the interaction of this target audience, was created a persona with certain behaviours, personality and motivations. In this case, the aim was to ensure that this type of user of our platform would represent the main needs of someone whose aim is to boost their presence at the initiatives they take part in.
            <br></br>
            <br></br>
            The main objectives of this type of user in the application will be to use the voting system and to analyse the positions in the project ranking in real time. In other words, we believe that this persona does not represent an audience looking for a complete event management interface, opting instead for a simple and intuitive interface.
          </p>
        </div>

        <div className="other-info">
          <img
            style={{borderRadius: "8px"}}
            className="img_vision"
            src={Persona}
            alt="personaImg"
            onClick={() => openImageView(Persona)}
          />
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
  background-color: #807dff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default InfoProj1_3;





