import React, { useState, useEffect} from "react";
import "../App.css";
import HiFi1 from "../assets/hifi_screens_tocare_1.png";
import HiFi2 from "../assets/hifi_screens_tocare_2.png";
import { FaArrowUp} from "react-icons/fa";
import styled from "styled-components";

const InfoProj5Screens = () => {
  const [activeTab, setActiveTab] = useState("designSystem");
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
    <div className="info_tocare">
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
          <span className="title_marcado_tocare">Screens.</span>
        </p>

        <TabsContainer>
          <TabButton
            onClick={() => handleTabClick("designSystem")}
            active={activeTab === "designSystem"}
          >
            Homepage, Add Task and Task List
          </TabButton>
          <TabButton
            onClick={() => handleTabClick("colors")}
            active={activeTab === "colors"}
          >
            Calendar, Biometric Data and List of Medicines
          </TabButton>
        </TabsContainer>
        <ImageContainer>
          {activeTab === "designSystem" && (
            <img
              className="img_diagram"
              src={HiFi1}
              alt="ecrãs homepage, adicionar tarefa e lissta de tarefas"
              onClick={() => openImageView(HiFi1)}
            />
          )}
          {activeTab === "colors" && (
            <img
              className="img_diagram"
              src={HiFi2}
              alt="Criar conta- wireframes"
              onClick={() => openImageView(HiFi2)}
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

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: #0097B2;
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
    background-color: #34A2B6;
  }
`;


export default InfoProj5Screens;