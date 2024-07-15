import React from "react";

// CSS
import "../../css/as_banner.scss";

function AsBanner(props) {
  return (
    <>
      <section id="top-title" className="as-section-top">
        <div className="as-top-banner">
          <img
            src="/images/sub_ahsoka_images/top-banner.jpeg"
            alt="top banner"
          />
          <div className="ban-desc-box">
            <div className="ban-logo">
              <img
                src="/images/sub_ahsoka_images/ahsoka_logo.png"
                alt="ahsoka logo"
              />
            </div>
            <div className="as-title">
              <p>
                Former Jedi Knight Ahsoka Tano investigates an
                <br />
                emerging threat to a vulnerable galaxy.
              </p>
            </div>
            <div className="btn-box">
              <span className="btn1">
                <a href="#">STREAM NOW</a>
              </span>
              <span className="btn2">
                <a href="#">▶ WATCH TRAILER</a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AsBanner;
