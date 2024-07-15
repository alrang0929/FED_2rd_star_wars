import React from "react";
import MdInfo from "../module/MdInfo";

import "../../css/themandalorian.scss";
import MdEpisode from "../module/MdEpisode";
import MdVideo from "../module/MdVideo";
import MdCharacter from "../module/MdCharacter";
import MdGallery from "../module/MdGallery";


function Themandalorian(props) {
  return (
    <main className="main-area">
      {/* <!-- 인포영역 --> */}
      <MdInfo/>
      {/* <!-- 에피소드 / 뉴스  영역 --> */}
      <MdEpisode />
      {/* <!-- 비디오 영역 --> */}
      <MdVideo />
      {/* <!-- 캐릭터 영역 --> */}
      <MdCharacter />
      {/* <!-- 갤러리 영역 --> */}
      <MdGallery/>
    </main>
  );
}

export default Themandalorian;
