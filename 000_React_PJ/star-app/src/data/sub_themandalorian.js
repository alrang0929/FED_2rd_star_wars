import domFn from "../js/my_function";

import { videoData } from "./sub_themandalorian_data";

function mdddvideo() {
  
    
    const vdbtn = domFn.qsa(".vdbtn");
    
    const videoWrap = domFn.qs(".video-wrap");
    const videoli = domFn.qs(".video-list");
    const videoBox = domFn.qs(".video-cont-box");
    const videoTab = domFn.qs(".video-tab");

    const vdData = videoData;

    // console.log(videoWrap.offsetWidth);
    // videoWrap.offsetWidth;

    let vlicode = `<ul class="fx-box">`;
    for (let i = 0; i <= 10; i++) {
      vlicode += `
    <li>
      <div class="video-box">
        <div class="video-img">
          <img src="./images/sub_themandalorian_images/${vdData[i].image}" alt="" />
        </div>
        <div class="video-txt-box">
          <h3>
            <span>
              ${vdData[i].desc} 
            </span>
          </h3>
        </div>
      </div>
    </li>
  `;
    }
    vlicode += `</ul>`;

    videoli.innerHTML = vlicode;

    const vdSlide = domFn.qsaEl(videoWrap, ".video-img-wrap ul li");
    const video = domFn.qsaEl(videoli, ".video-box");

    let vdcode = ``;
    video.forEach((ele, i) => {
      ele.onclick = () => {
        vdcode += `
    <div class="video-tab-btn fa-solid fa-xmark fa-3x">X</div>
    <iframe src="https://www.youtube.com/embed/${vdData[i].video}?autoplay=1" allow="autoplay""></iframe>
  `;
        videoTab.innerHTML = vdcode;
        videoBox.classList.add("on");
        // body.style.overflow = "hidden";

        domFn.qsEl(videoTab, "div").onclick = () => {
          console.log("ddd");
          videoBox.classList.remove("on");
          vdcode = ``;
          // body.style.overflow = "auto";
        };
      };
    });
  

    let vdSnum = 0;
    let prot = false;
    for (let x of vdbtn) {
      x.onclick = GoVdSlide;
    }
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

}

export { mdddvideo };
