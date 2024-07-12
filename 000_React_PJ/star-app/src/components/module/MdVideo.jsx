import React, { useLayoutEffect } from "react";
import { videoData } from "../../data/sub_themandalorian_data";
import domFn from "../../js/my_function";

import "../../css/md_video.scss";
import { mdddvideo } from "../../data/sub_themandalorian";
function MdVideo(props) {
  useLayoutEffect(() => {
    mdddvideo();
  });
  return (
    <div id="video-area">
      <section class="video-area cont-box section-top">
        <div class="video-wrap inboxman">
          <h2>
            <span>Video</span>
          </h2>
          <div class="video-img-wrap fx-box inboxmanman">
            <div class="video-list"></div>
            <div class="slbtn-box">
              <button class="mdabtn ab1 fa-solid fa-angle-left vdbtn1 vdbtn"></button>
              <button class="mdabtn ab2 fa-solid fa-angle-right vdbtn2 vdbtn"></button>
            </div>
            <div class="video-cont-box">
              <div class="video-tab"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MdVideo;
