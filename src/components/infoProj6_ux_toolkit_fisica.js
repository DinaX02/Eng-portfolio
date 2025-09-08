import React, { useState, useEffect} from "react";
import "../App.css";
import ExerciciosPraticosToolkitFisica from "../assets/ExerciciosPraticos_uxtoolkit.png";
import MecanicasToolkitFisica from "../assets/MecanicaseFormasdeAplicacao_uxtoolkit.png";
import LigacaoComponentes from "../assets/LigacaoEntreComponentes.png";
import OrganizacaoVisual from "../assets/OrganizacaoVisual.png";
import EstruturadaToolkitFisica from "../assets/EstruturadaToolkitFisica.png";
import { FaArrowUp} from "react-icons/fa";
import styled from "styled-components";

const InfoProj6UXToolkitFisica = () => {
  const [activeTab, setActiveTab] = useState("estruturadatoolkitfisica");
  const [viewImage, setViewImage] = useState(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const contentP5Height = document.querySelector('.contentP5')?.offsetHeight || 0;
      const contentP5Top = document.querySelector('.contentP5')?.offsetTop || 0;
      const scrollPosition = window.scrollY;

      if (scrollPosition > contentP5Top + contentP5Height) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const openImageView = (imageUrl) => {
    setViewImage(imageUrl);
  };

  const closeImageView = () => {
    setViewImage(null);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="info_uxtoolkit">
        {showScrollToTop && (
        <ScrollToTopButton onClick={scrollToTop}>
          <FaArrowUp />
        </ScrollToTopButton>
      )}
      {viewImage && (
        <ImageViewModal onClick={closeImageView}>
          <ImageView>
            <img src={viewImage} alt="Imagem em tamanho maior" />
          </ImageView>
        </ImageViewModal>
      )}
      <div className="containerDesignProcess">
        <p className="fontsize_tags">
          <span className="title_marcado_uxtoolkit">Physical Toolkit.</span>
        </p>
              <p style={{width:"80%", fontSize:"19px"}}>The physical component of the toolkit consists of a set of thirty-seven (37) cards, based on the categorisation made in this study. In addition to these cards, the toolkit includes a user manual that explains how the toolkit works, and an extra set of three (3) practical exercises designed to encourage more practical and dynamic application of this physical component.
        </p>
        <TabsContainer>
          <TabButton
            onClick={() => handleTabClick("estruturadatoolkitfisica")}
            active={activeTab === "estruturadatoolkitfisica"}
          >
            Toolkit Structure
          </TabButton>
          <TabButton
            onClick={() => handleTabClick("organizacaovisual")}
            active={activeTab === "organizacaovisual"}
          >
           Visual Organisation
          </TabButton>
                    <TabButton
            onClick={() => handleTabClick("ligacaoentrecomponentes")}
            active={activeTab === "ligacaoentrecomponentes"}
          >
           Connection between Components
          </TabButton>
                    <TabButton
            onClick={() => handleTabClick("mecanicastoolkitfisica")}
            active={activeTab === "mecanicastoolkitfisica"}
          >
           Mechanics and methods of application
          </TabButton>
                    <TabButton
            onClick={() => handleTabClick("exerciciospraticostoolkitfisica")}
            active={activeTab === "exerciciospraticostoolkitfisica"}
          >
           Practical Exercises
          </TabButton>
        </TabsContainer>
        <ImageContainer>
                    {activeTab === "estruturadatoolkitfisica" && (
            <img
              className="img_diagram"
              src={EstruturadaToolkitFisica}
              alt="estrutura da toolkit fisica"
              onClick={() => openImageView(EstruturadaToolkitFisica)}
            />
          )}
          {activeTab === "exerciciospraticostoolkitfisica" && (
            <img
              className="img_diagram"
              src={ExerciciosPraticosToolkitFisica}
              alt="exercicios praticos toolkit fisica"
              onClick={() => openImageView(ExerciciosPraticosToolkitFisica)}
            />
          )}
              {activeTab === "organizacaovisual" && (
            <img
              className="img_diagram"
              src={OrganizacaoVisual}
              alt="Organizacao visual do conteudo das cartas da toolkit fisica"
              onClick={() => openImageView(OrganizacaoVisual)}
            />
          )}
                    {activeTab === "ligacaoentrecomponentes" && (
            <img
              className="img_diagram"
              src={LigacaoComponentes}
              alt="Ligacao entre componente fisica e digital"
              onClick={() => openImageView(LigacaoComponentes)}
            />
          )}
          {activeTab === "mecanicastoolkitfisica" && (
            <img
              className="img_diagram"
              src={MecanicasToolkitFisica}
              alt="Mecanicas e formas de aplicacao da toolkit fisica"
              onClick={() => openImageView(MecanicasToolkitFisica)}
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

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: #CA9050;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #c77f32ff;
  }
`;


export default InfoProj6UXToolkitFisica;