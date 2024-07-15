import React from "react";

// CSS
import "../../css/as_character.scss";

function AsCharacter(props) {
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
            <img src="/images/sub_ahsoka_images/characters/c01.jpeg" alt="character" />
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
