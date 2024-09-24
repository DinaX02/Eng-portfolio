import React from "react";
import "../App.css";
import tocareMockupOverview from "../assets/overview_ToCare_mock-up.png";

const InfoProj5 = () => {
  return (
    <div className="info_p5">
      <div className="instagram-container">
        <div className="instagram-info">
          <p className="fontsize_tags">
            <span className="title_marcado_tocare">Overview.</span>
          </p>
          <p className="paragrafo_origens">
            In 2022, 22.9 per cent of the Portuguese population would be elderly
            and in 2100, this figure is expected to reach around 36.28 per cent.
            This ageing population brings challenges in terms of health and
            caring for the elderly, intensifying the need for elderly carers.
            <br></br>
            <br></br>
            In response to the challenge launched by InovaRia and Altice Labs to
            create an innovative product in the health area, ToCare is a mobile
            application designed to facilitate the management and coordination
            of elderly care.<br></br>
            <br></br>Through a user-centred design, ToCare aims to improve
            communication between carers, offering access to up-to-date medical
            information and organising essential daily tasks such as medication
            administration and personal hygiene.
          </p>

          <p className="fontsize_tags">
            <span className="title_marcado_tocare">Tasks.</span>
          </p>

          <div className="tarefas_boomerang">
            <div className="tags_tocare">UX/UI Design</div>
          </div>

          <div style={{ paddingRight: 20 }}>
            <h3> InovaRia and Altice Labs Challenge: </h3>
            <p>
              Design Thinking applied to Digital Product Design:{" "}
              <strong>1 Week</strong>
            </p>
          </div>
        </div>

        <div className="other-info">
          <img
            className="img_vision"
            src={tocareMockupOverview}
            alt="ToCare mockup  overview"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoProj5;
