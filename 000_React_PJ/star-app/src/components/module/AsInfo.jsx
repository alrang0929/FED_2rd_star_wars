import React from "react";

function AsInfo(props) {
  return (
    <>
      <div className="page">
        <section id="info-area" className="section-top">
          <div className="cont-box fx-box scAct">
            <div className="img-box col-6">
              <img
                src={process.env.PUBLIC_URL + "/images/ahsoka/poster1.jpeg"}
                alt="ahsoka poster"
              />
            </div>
            <div className="desc-box col-6">
              <div className="bullet"></div>
              <h2 className="title">
                Star Wars :<br />
                Ahsoka
              </h2>
              <div className="desc">
                Rating: TV-14 Release Date: August 22, 2023 Genre: Action,
                Adventure, Science Fiction
              </div>
              <div className="desc">
                Set after the fall of the Empire, "Ahsoka" follows the former
                Jedi knight Ahsoka Tano as she investigates an emerging threat
                to a vulnerable galaxy.
              </div>
              <button className="btn-link">
                <a href="#">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/ahsoka/icon_link_asoka.png"
                    }
                    alt="era7 icon"
                  />
                  <span className="link-txt">Era: The New Republic</span>
                </a>
              </button>
            </div>
          </div>
          <div className="bulr-box">
            <div className="gradient"></div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AsInfo;
