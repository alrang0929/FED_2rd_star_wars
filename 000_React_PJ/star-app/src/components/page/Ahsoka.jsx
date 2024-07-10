import React from "react";

import SubAsBanner from "../module/SubAsBanner";
import SubAsInfo from "../module/SubAsInfo";

//svg
// import { ReactComponent as close } from "/images/sub_ahsoka_images/icon/icon_close.svg";

// CSS
// import "../../css/sub_ahsoka.css";

function Ahsoka(props) {
  return (
    <>
      {/* <!-- 상단 타이틀 배너 --> */}
      <SubAsBanner />
      {/* <!-- 소개 영역 --> */}
      <SubAsInfo />
    </>
  );
}

export default Ahsoka;
