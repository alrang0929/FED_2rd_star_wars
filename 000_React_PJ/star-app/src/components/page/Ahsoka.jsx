import React from "react";

// Module
import AsBanner from "../module/AsBanner";
import AsInfo from "../module/AsInfo";
import AsVideo from "../module/AsVideo";
import AsCharacter from "../module/AsCharacter";
import AsEpisode from "../module/AsEpisode";
import AsTictok from "../module/AsTictok";

// CSS
import "../../css/ahsoka.scss";

function Ahsoka() {
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
      {/* 에피소드 가이드 영역 */}
      <AsEpisode />
      {/* 틱톡 영역 */}
      <AsTictok />
    </>
  );
}

export default Ahsoka;
