import React, { useState, useEffect} from "react";
import "../App.css";
import FuncionalidadeTiersCustomPlan from "../assets/FuncionalidadeTiersCustomPlan.png";
import FuncionalidadeCustomPlan from "../assets/FuncionalidadeCustomPlan.png";
import FuncionalidadeDigitalFerramentasDesign from "../assets/FuncionalidadeDigitalFerramentasDesign.png";
import FuncionalidadeCatalogoDigital from "../assets/FuncionalidadeCatalogoDigital.png";
import ExerciciosPraticosSite from "../assets/FuncionalidadeDigitalExerciciosPraticos.png";
import SitemapUXToolkitDigital from "../assets/SitemapUXToolkitDigital.png";
import { FaArrowUp} from "react-icons/fa";
import styled from "styled-components";

const InfoProj6UXToolkitDigital = () => {
  const [activeTab, setActiveTab] = useState("sitemapuxtoolkit");
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
          <span className="title_marcado_uxtoolkit">Digital Toolkit.</span>
        </p>
              <p style={{width:"80%", fontSize:"19px"}}>The digital platform was designed to be easy and intuitive to use and to offer additional features that complement the physical component of the toolkit.
<br></br><br></br>
The platform's structure has been organised to facilitate navigation between the various pages, with navigation always available to the user via the side navigation menu (aside), which allows direct access to the platform's four main pages.
        </p>
        <TabsContainer>
          <TabButton
            onClick={() => handleTabClick("sitemapuxtoolkit")}
            active={activeTab === "sitemapuxtoolkit"}
          >
            Sitemap
          </TabButton>
          <TabButton
            onClick={() => handleTabClick("catalogouxtoolkitdigital")}
            active={activeTab === "catalogouxtoolkitdigital"}
          >
           Catalogue
          </TabButton>
                    <TabButton
            onClick={() => handleTabClick("funcionalidadedigitalferramentasdesign")}
            active={activeTab === "funcionalidadedigitalferramentasdesign"}
          >
           Design Tools
          </TabButton>
                              <TabButton
            onClick={() => handleTabClick("exerciciospraticostoolkitdigital")}
            active={activeTab === "exerciciospraticostoolkitdigital"}
          >
           Practical Exercises
          </TabButton>
                    <TabButton
            onClick={() => handleTabClick("funcionalidadetierscustomplan")}
            active={activeTab === "funcionalidadetierscustomplan"}
          >
           Suggestions on how to create a Custom Plan
          </TabButton>
                              <TabButton
            onClick={() => handleTabClick("funcionalidadescustomplan")}
            active={activeTab === "funcionalidadescustomplan"}
          >
            Custom Plan
          </TabButton>
        </TabsContainer>
        <ImageContainer>
                    {activeTab === "sitemapuxtoolkit" && (
            <img
              className="img_diagram"
              src={SitemapUXToolkitDigital}
              alt="sitemap da toolkit digital"
              onClick={() => openImageView(SitemapUXToolkitDigital)}
            />
          )}
          {activeTab === "exerciciospraticostoolkitdigital" && (
            <img
              className="img_diagram"
              src={ExerciciosPraticosSite}
              alt="exercicios praticos toolkit digital"
              onClick={() => openImageView(ExerciciosPraticosSite)}
            />
          )}
              {activeTab === "catalogouxtoolkitdigital" && (
            <img
              className="img_diagram"
              src={FuncionalidadeCatalogoDigital}
              alt="funcionalidade de catalogo da toolkit digital"
              onClick={() => openImageView(FuncionalidadeCatalogoDigital)}
            />
          )}
                    {activeTab === "funcionalidadedigitalferramentasdesign" && (
            <img
              className="img_diagram"
              src={FuncionalidadeDigitalFerramentasDesign}
              alt="funcionalidade pagina de ferramentas de design toolkit digital"
              onClick={() => openImageView(FuncionalidadeDigitalFerramentasDesign)}
            />
          )}
                    {activeTab === "funcionalidadescustomplan" && (
            <img
              className="img_diagram"
              src={FuncionalidadeCustomPlan}
              alt="Funcionalidade Custom Plan da toolkit digital"
              onClick={() => openImageView(FuncionalidadeCustomPlan)}
            />
          )}
          {activeTab === "funcionalidadetierscustomplan" && (
            <img
              className="img_diagram"
              src={FuncionalidadeTiersCustomPlan}
              alt="Funcionalidade Tiers Custom Plan da toolkit digital"
              onClick={() => openImageView(FuncionalidadeTiersCustomPlan)}
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


export default InfoProj6UXToolkitDigital;