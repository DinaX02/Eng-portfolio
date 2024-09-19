import React, { useState, useEffect } from "react";
import "../App.css";
import Persona from "../assets/benchmarking_koru.png"
import styled from "styled-components";

const InfoProj1_2 = ()=> {
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
  
    return(

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

<p className="fontsize_tags"><span className="title_marcado_koru">Benchmarking.</span></p>

<p className="paragrafo_origens">To gather the requirements needed to design this application, one of the sources of information was market research, to understand which functionalities are prioritised in existing solutions from other companies or initiatives that offer something similar to what was idealised for this project.
<br></br><br></br>
To do this, we studied companies that organise events with investment in coins, applications that can have mobile and web solutions and, finally, some stock market applications and cryptocurrency portfolio management.
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

    )
}   

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

export default InfoProj1_2





