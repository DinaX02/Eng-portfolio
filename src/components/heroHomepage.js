import React from "react";
import "../App.css";
import { motion } from "framer-motion";

const HeroHomepage = ({ scrollToIntroduction }) => {
  return (
    <div className="hero_homepage_div">
      <div className="hero">
        <div className="content_hero">
        <h1>Hi, I'm <span className="cor_nome">Dinis.</span></h1>
        <p>
        My goal is to transform captivating digital experiences through <span className="text_marcado">UX/UI Design</span> and <span className="text_marcado">Front-end Development.</span>
        </p>
        </div>
      </div>
      <div className="scroll_icon btn_plus btn_minus">
          <p className="alinhar_p_scroll">scroll down</p>
      </div>
      <div className="scroll_icon btn_plus btn_minus">
        <a href="#intro">
         
        <div className="btn_scrolll">
         
        <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            className="inner_scroll"
          />    
        </div>
        </a>
      </div>
    </div>
  );
};

export default HeroHomepage;
