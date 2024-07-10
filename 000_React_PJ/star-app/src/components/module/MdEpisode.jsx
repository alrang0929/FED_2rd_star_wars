import React from "react";
import { episodeData } from "../../data/sub_themandalorian_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../css/md_episode.scss";

function MdEpisode(props) {
  return (
    <div id="episode-area">
      <section className="episode-area cont-box section-top">
        <div className="ep-wrap inboxman">
          <h2>
            <span>Episode Guides | Seasons 1 & 2</span>
          </h2>
          <div className="ep-img-wrap fx-boxm">
            <div className="ep-list">
              <ul className="fx-boxm">
                {episodeData.map((v, i) => (
                  <li key={i}>
                    <div className="ep-img-box">
                      <img
                        src={"/images/sub_themandalorian_images/"+v.image}
                        alt=""
                      />
                      <div className="ep-bg-box"></div>
                      <div className="ep-txt-box">
                        <h3>
                          <span className="ep-title">{v.title}</span>
                        </h3>
                        <p className="ep-desc">{v.desc}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="slbtn-box">
              <button className="abtn ab1 fa-solid fa-angle-left epbtn1 epbtn"></button>
              <button className="abtn ab2 fa-solid fa-angle-right epbtn2 epbtn"></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MdEpisode;
