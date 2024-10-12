import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"; // Correct icon imports

import footer from "./Img/Footer.jpeg";

function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="back-img" style={{ backgroundImage: `url(${footer})` }}>
          <div className="content-back">
            <div className="flex-rows">
              <div className="col-left">
                <div className="tit-col-left">
                  <h2>egybussniss.eg</h2>
                </div>
                <p className="lorem">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima nostrum quis obcaecati aspernatur aliquam. Explicabo
                  illum harum facilis alias similique ea dolore quis odio eaque?
                  Tempora, repellat.
                </p>
                <div
                  className="icons"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <div className="face-icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </div>
                  <div className="face-icon">
                    <FontAwesomeIcon icon={faInstagram} />
                  </div>
                  <div className="face-icon">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </div>
                  <div className="face-icon">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </div>
                </div>
              </div>
              <div className="Support">
                <div className="Support-list">
                  <h4>Get support</h4>
                  <p>- Help</p>
                  <p>- Live</p>
                  <p>- Check the center statues</p>
                  <p>- Refunds</p>
                  <p>- Report the issue</p>
                </div>
              </div>
              <div className="Support">
                <div className="Support-list">
                  <h4>Get to know us</h4>
                  <p>- Help</p>
                  <p>- Live</p>
                  <p>- Check the center statues</p>
                  <p>- Refunds</p>
                  <p>- Report the issue</p>
                </div>
              </div>
              <div className="Support">
                <div className="Support-list">
                  <h4>Trade Assurance</h4>
                  <p>- Help</p>
                  <p>- Live</p>
                  <p>- Check the center statues</p>
                  <p>- Refunds</p>
                  <p>- Report the issue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
