import React, { useLayoutEffect } from "react";
import { videoData } from "../../data/sub_themandalorian_data";
import domFn from "../../js/my_function";

import "../../css/md_video.scss";
function MdVideo(props) {
  useLayoutEffect(() => {
    const vdbtn = domFn.qsa(".vdbtn");
    const videoWrap = domFn.qs(".video-wrap");
    const videoli = domFn.qs(".video-list");
    const videoBox = domFn.qs(".video-cont-box");
    const videoTab = domFn.qs(".video-tab");
    const vdSlide = domFn.qsaEl(videoWrap, ".video-img-wrap ul li");
    const video = domFn.qsaEl(videoli, ".video-box");

    let vdSnum = 0;
    let prot = false;
    for (let x of vdbtn) {
      x.onclick = GoVdSlide;
    }

    let vdcode = ``;
    video.forEach((ele, i) => {
      ele.onclick = () => {
        videoBox.classList.add("on");
      };
    });

    function GoVdSlide() {
      // 광클 금지
      if (prot) return;
      prot = true;
      setTimeout(() => {
        prot = false;
      }, 500);

      let isVdRbtn = this.classList.contains("vdbtn2");

      let cntNum;
      let vdSlCnt = 11;
      console.log(vdSlCnt);

      isVdRbtn ? vdSnum++ : vdSnum--;

      vdSlide.forEach((v) => {
        if (videoWrap.offsetWidth > 1024) {
          v.style.left = -33.3333 * vdSnum + "%";
          cntNum = 3;
        } else if (videoWrap.offsetWidth > 860) {
          v.style.left = -50 * vdSnum + "%";
          cntNum = 2;
        } else {
          v.style.left = -100 * vdSnum + "%";
          cntNum = 1;
        }
      });

      if (vdSnum < 0) {
        vdSnum = 0;
      } else if (vdSnum > vdSlCnt - cntNum) {
        vdSnum = vdSlCnt - cntNum;
      }

      if (vdSnum == 0 || vdSnum == vdSlCnt - cntNum) {
        this.style.display = "none";
      } else {
        for (let x of vdbtn) {
          x.style.display = "block";
        }
      }
    }
  });
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
                    <div className="video-box">
                      <div className="video-img">
                        <img
                          src={"/images/sub_themandalorian_images/" + v.image}
                          alt=""
                        />
                      </div>
                      <div className="video-txt-box">
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
              <div className="video-tab">
                {videoData.map((v, i) => (
                  <>
                    <div class="video-tab-btn fa-solid fa-xmark fa-3x"></div>
                    <iframe
                      src={"https://www.youtube.com/embed/" + v.video + "?autoplay=1"}
                      allow="autoplay"
                    />
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MdVideo;
