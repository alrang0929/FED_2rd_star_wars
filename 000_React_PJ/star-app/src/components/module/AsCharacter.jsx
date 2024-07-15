import React from "react";

// 나의 함수
import mFn from "../../js/my_function";

// 데이터
import {cData} from "../../data/sub_ahsoka_data";

// CSS
import "../../css/as_character.scss";

function AsCharacter(props) {
  const cPage = mFn.qs("#character-page");
  const cPageTitle = mFn.qs("#character-page .title");
  const cPageDesc = mFn.qs("#character-page .desc");
  const cPageImg = mFn.qs("#character-page img");
  // console.log("캐릭터 페이지:", cPage);

  const showBox = mFn.qsa(".cbox li");

  showBox.forEach((x) => {
    x.onclick = () => {
      let key = x.getAttribute("data-key");
      let selRec = cData.some((z) => {
        if (z.idx === key) {
          // 클릭된 idx와 일치하는 배열값을 찾음!
          cPageTitle.innerText = z.name;
          cPageDesc.innerText = z.desc;
          cPageImg.src = `./images/sub_ahsoka_images/characters/${z.idx}.jpeg`;
          return;
        }
      });
      console.log(key, ":", selRec);

      cPage.style.display = "block";
    }; /// onclick ///
  }); ////// forEach //////

  mFn.qs(".close-btn").onclick = () => {
    cPage.style.display = "none";
  };

  return (
    <>
      <section className="page">
        <div id="charater-area" className="as-section-top">
          <div className="content-box">
            <div className="tit-box fx-box">
              <h3 className="title-sub">Charater</h3>
            </div>
            <span className="under-line"></span>
            <div className="cbox scAct">
              {/* <!-- 캐릭터 데이터 들어갈 곳 --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- 캐릭터 설명 박스 --> */}
      <aside id="character-page" className="show">
        <div className="content-box fx-box">
          <div className="img-box col-6">
            <img
              src="/images/sub_ahsoka_images/characters/c01.jpeg"
              alt="character"
            />
          </div>
          <div className="desc-box col-6">
            <h2 className="title">Name</h2>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <span className="close-btn"></span>
        </div>
      </aside>
    </>
  );
}

export default AsCharacter;
