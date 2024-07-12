import React from "react";

function AsBanner(props) {
  return (
    <>
      <section id="top-title" className="section-top">
        <div className="top-banner">
          <img
            src={process.env.PUBLIC_URL + "/images/ahsoka/top-banner.jpeg"}
            alt="top banner"
          />
          <div className="ban-desc-box">
            <div className="ban-logo">
              <img
                src={process.env.PUBLIC_URL + "/images/ahsoka/ahsoka_logo.png"}
                alt="ahsoka logo"
              />
            </div>
            <div className="desc">
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
