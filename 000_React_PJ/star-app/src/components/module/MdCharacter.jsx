import React from "react";
import { characterData } from "../../data/sub_themandalorian_data";

import "../../css/md_character.scss";

function MdCharacter(props) {
  return (
    <div id="character-area">
      <section class="character-area section-top">
        <div class="inboxman character-wrap">
          <h2>
            <span>Databank: The Mandalorian</span>
          </h2>
          <div class="character-img-box">
            <div class="img-list">
              <ul class="list01">
                {characterData.map(
                  (v, i) =>
                    i < 15 && (
                      <li key={i}>
                        <div class="list-box">
                          <img
                            src={"/images/sub_themandalorian_images/" + v.image}
                            alt=""
                          />
                          <h3>
                            <span>{v.name}</span>
                          </h3>
                        </div>
                      </li>
                    )
                )}
              </ul>
            </div>

            <div class="img-list">
              <ul class="list02">
                {characterData.map(
                  (v, i) =>
                    i < 30 && i>=14 && (
                      <li key={i}>
                        <div class="list-box">
                          <img
                            src={"/images/sub_themandalorian_images/" + v.image}
                            alt=""
                          />
                          <h3>
                            <span>{v.name}</span>
                          </h3>
                        </div>
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MdCharacter;
