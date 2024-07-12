import React from "react";

// CSS
import "../../css/as_episode.scss";

function AsEpisode() {
  return (
    <>
      <div className="page">
        <section id="episode-area" className="section-top">
          <div className="cont-box">
            <div className="tit-box fx-box">
              <h3 className="title-sub">Episode Guides</h3>
            </div>
            <span className="under-line"></span>
            {/* <!-- 에피소드 박스 --> */}
            <div className="episode-box scAct">
              {/* <!-- 에피소드 데이터 들어갈 곳 --> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AsEpisode;
