import React from "react";
import "../App.css";
import imgOrigens from "../assets/origenss.png"

const Origens = ()=> {

  const linhaStyle = {
    marginTop:20,
    width: '200px',
    height: '5px',
    backgroundColor: '#A767FB',
    position:"absolute",
    right: '0',
  };

  const numeroStyle = {
    marginTop:5,
    position:"absolute",
    right: '15px',
    color: '#A767FB',
    fontSize: '46px',
    fontWeight: 'bold',
  };

    return(     
      <div id="origens" className="into_divvv">
          
               <div className="linhasss_roxos">
      <div style={linhaStyle}>
        <p style={numeroStyle}>01</p>
      </div>

    </div>
      <div className="instagram-container">

      <div className="instagram-info"> 
   
      <p className="paragrafo_intro_sizes">About me</p>

<p className="fontsize_tags"><span className="title_marcado_koru">Origins.</span></p>
        <p className="paragrafo_origens">Because I live in a coastal area, I've always been very attached to the sea. At the same time, I've practised sport, having been a federated athlete in swimming. Later, I took an elementary course for judges in pure swimming, adapted swimming and open water swimming.

<br></br>
<br></br>Reconciling my studies and sporting activities was important in the development of my personal characteristics, as I have always been a hard-working, committed, organised and responsible student.<br></br><br></br>
Throughout my school career I was most interested in areas related to the arts and technology, having developed a keen interest in UX/UI Design and later Front-end development.
        </p>
        

      </div>
      <div className="other-info">
<img className="img_vision" src={imgOrigens} alt="OrigensImgCover"/> 
      </div>
    </div>  
</div>
    )
}

export default Origens





//         <div id="intro" className="into_divvv">
//             <p className="introduction">Introdução</p>
//             <p className="big_title">Visão Geral.</p>
//             <p className="content_intro_hero2">O meu portfólio reflete a minha habilidade de unir a criatividade com as soluções técnicas necessárias para realizar os desafios que me são propostos.
// <br></br><br></br>
// Ao criar os meus designs, presto atenção a cada detalhe, desde a escolha de paletas de cores e tipografia até a seleção de ícones e ilustrações. <br></br>Meu objetivo é sempre alcançar um equilíbrio perfeito entre estética e funcionalidade, garantindo que cada elemento no design tenha um propósito claro e atenda às necessidades dos utilzadores.</p>

// <section>
//       <div className="card-container">
//         <Tilt className="card">
//           <div className="icon"><img className="icon_card_ajuste" src={icon2}/></div>
//           <div className="text_card">Web Design</div>
//         </Tilt>
//         <Tilt className="card">
//           <div className="icon"><img className="icon_card_ajuste_2" src={icon1}/></div>
//           <div className="text_card">Desenvolvimento Front-end</div>
//         </Tilt>
//       </div>
//     </section>

//         </div>