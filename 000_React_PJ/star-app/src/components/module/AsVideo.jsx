import React from "react";

// CSS
import "../../css/as_video.scss";

function AsVideo(props) {
  return (
    <>
      <div className="page">
        <section id="video-area" className="section-top">
          <div className="tit-box fx-box">
            <h3 className="title-sub">Video</h3>
          </div>
          <span className="under-line"></span>
          <div className="scAct">
            <div className="video-box col-12">
              {/* <!-- 유튜브 아이프레임 --> */}
              <iframe
                id="ifr"
                width="1250"
                height="703"
                src="https://www.youtube.com/embed/J7-zia4oHuk"
              ></iframe>
            </div>
            {/* <!-- 슬라이드 픽 --> */}
            <div className="slide-peek-box">
              <div className="slider-wrap col-8">
                <ul>
                  <li>
                    <div className="img-box">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/ahsoka/mv01.jpeg"
                        }
                        alt="Trailer"
                      />
                    </div>
                    <div className="title-box">
                      <h3>Ahsoka | Teaser Trailer | Disney+</h3>
                    </div>
                  </li>
                  <li>
                    <div className="img-box">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/ahsoka/mv02.jpeg"
                        }
                        alt="Masters and Apprentices"
                      />
                    </div>
                    <div className="title-box">
                      <h3>Masters and Apprentices | Ahsoka | Disney+</h3>
                    </div>
                  </li>
                  <li>
                    <div className="img-box">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/ahsoka/mv03.avif"
                        }
                        alt="Phenomenon"
                      />
                    </div>
                    <div className="title-box">
                      <h3>Phenomenon | Ahsoka | Disney+</h3>
                    </div>
                  </li>
                  <li>
                    <div className="img-box">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/ahsoka/mv04.jpeg"
                        }
                        alt="Sabine’s Loth-Cat"
                      />
                    </div>
                    <div className="title-box">
                      <h3>Sabine’s Loth-Cat | Star Wars Lofi | #Ahsoka</h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AsVideo;
