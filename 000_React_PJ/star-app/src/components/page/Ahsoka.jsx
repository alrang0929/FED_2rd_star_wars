import React from "react";

import AsBanner from "../module/AsBanner";
import AsInfo from "../module/AsInfo";

//svg
// import { ReactComponent as close } from "/images/sub_ahsoka_images/icon/icon_close.svg";

// CSS
import "../../css/sub_ahsoka.css";

function Ahsoka(props) {
  return (
    <>
      {/* <!-- 상단 타이틀 배너 --> */}
      <AsBanner />
      {/* <!-- 소개 영역 --> */}
      <AsInfo />
    </>
  );
}

export default Ahsoka;
