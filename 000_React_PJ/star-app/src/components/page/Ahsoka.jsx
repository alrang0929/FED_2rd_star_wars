import React from "react";

// Module
import AsBanner from "../module/AsBanner";
import AsInfo from "../module/AsInfo";
import AsVideo from "../module/AsVideo";

//svg
// import { ReactComponent as close } from "/images/sub_ahsoka_images/icon/icon_close.svg";

// CSS
import "../../css/ahsoka.scss";

function Ahsoka(props) {
  return (
    <>
      {/* 상단 타이틀 배너 */}
      <AsBanner />
      {/* 시리즈 소개 영역 */}
      <AsInfo />
      {/* 비디오 영역 */}
      <AsVideo />
      {/* 캐릭터 소개 영역 */}
    </>
  );
}

export default Ahsoka;
