import React from "react";
import { videoData } from "../../data/sub_themandalorian_data";

import "../../css/md_video.scss";
function MdVideo(props) {
  return (
    <div id="video-area">
      <section className="video-area cont-box section-top">
        <div className="video-wrap inboxman">
          <h2>
            <span>Video</span>
          </h2>
          <div className="video-img-wrap fx-boxm inboxmanman">
            <div className="video-list">
              <ul className="fx-boxm">
                {videoData.map((v, i) => (
                  <li key={i}>
                    <div class="video-box">
                      <div class="video-img">
                        <img
                          src={"/images/sub_themandalorian_images/" + v.image}
                          alt=""
                        />
                      </div>
                      <div class="video-txt-box">
                        <h3>
                          <span>{v.desc}</span>
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="slbtn-box">
              <button className="abtn ab1 fa-solid fa-angle-left vdbtn1 vdbtn"></button>
              <button className="abtn ab2 fa-solid fa-angle-right vdbtn2 vdbtn"></button>
            </div>
            <div className="video-cont-box">
              <div className="video-tab"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MdVideo;
