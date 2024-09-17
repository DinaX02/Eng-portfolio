import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import ImgDinis from "../assets/foto_dinis.png"

const HeroAbout = () => {
  return (
    <div className="hero_homepage_div_about">
<img className="foto_hero_about" src={ImgDinis} alt="coverProfilePicture"/>
<p className="nome_hero_about">Dinis Antunes</p>
<p className="tecnical_hero_about">UX/UI Designer and Front-end Developer</p>
<div className="scroll_icon btn_plus btn_minus">
          <p className="alinhar_p_scroll_2">scroll down</p>
      </div>
      <div className="scroll_icon btn_plus btn_minus">
          {/* <p className="alinhar_p_scroll">scroll down</p> */}
        <a href="#origens">
         
        <div className="btn_scrolll_2">
         
        <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            className="inner_scroll_2"
          />    
        </div>
        </a>
      </div>
    </div>
  );
};

export default HeroAbout;

