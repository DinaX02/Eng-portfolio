import React, {useState, useEffect} from "react";
import "../App.css";
import Wireframesskoru from "../assets/koru_finallll.png";
import { FaArrowUp} from "react-icons/fa";
import styled from "styled-components";

const InfoProj1_4 = ()=> {

    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const contentP1Height = document.querySelector('.contentP1')?.offsetHeight || 0;
          const contentP1Top = document.querySelector('.contentP1')?.offsetTop || 0;
          const scrollPosition = window.scrollY;
    
          if (scrollPosition > contentP1Top + contentP1Height) {
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

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };

    return(
<div className="info_p22222">
{showScrollToTop && (
        <ScrollToTopButton onClick={scrollToTop}>
          <FaArrowUp />
        </ScrollToTopButton>
      )}
<div className="instagram-container">

<div className="instagram-info"> 

<p className="fontsize_tags"><span className="title_marcado_koru">Wireframes.</span></p>

<p className="paragrafo_origens">
Once the architecture of the application and the site map had been decided, we moved on to sketching the wireframes, starting with low fidelity and progressing progressively to medium and high fidelity.<br></br><br></br> 
By creating the first low-fidelity wireframes, it was possible to get a clear picture of what the application will look like and how the user will navigate through it.
<br></br><br></br> 
By moving on to medium-fidelity prototypes, the application's functionalities and flow were illustrated, allowing the user interface to be further refined and any functional flaws in the early stages to be identified.
<br></br><br></br>
Finally, the prototypes were converted from Mid-fi to Hi-fi, thus creating the user flows using Figma.
</p>
<a href="https://www.figma.com/proto/XvQjbPsxIYJKLmFfWOfHCg/MID-FI?node-id=739-840&scaling=scale-down&page-id=327%3A2&starting-point-node-id=739%3A840" target="blank" rel="noopener noreferrer"><button className="btn_viewmore">View Prototype</button></a>

</div>


<div className="other-info">
<img className="img_vision" src={Wireframesskoru} alt="ImgWireframesKoru"/>
</div>
</div>  

</div>

    )
}   

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: #5331B2;
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
    background-color: #9747FF;
  }
`;

export default InfoProj1_4





