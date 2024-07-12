import React from "react";

// Module
import AsBanner from "../module/AsBanner";
import AsInfo from "../module/AsInfo";
import AsVideo from "../module/AsVideo";
import AsCharacter from "../module/AsCharacter";

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
      <AsCharacter />
    </>
  );
}

export default Ahsoka;
