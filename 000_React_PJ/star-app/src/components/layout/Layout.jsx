// 전체 레이아웃 컴포넌트 ///
import { useCallback, useEffect, useState } from "react";
import { FooterArea } from "./FooterArea";
import MainArea from "./MainArea";
import { TopArea } from "./TopArea";

// 컨텍스트 API 불러오기
import { useNavigate } from "react-router-dom";

export default function Layout() {
  //// 코드 리턴구역 //////////////
  return (
    // Provider value속성으로 전역노출 변수를 설정함!
    <>
      {/* 1.상단영역 : 메모이제이션을 위해 직접값전달! */}
      <TopArea />
      {/* 2.메인영역 */}
      <MainArea />
      {/* 3.하단영역 */}
      <FooterArea />
    </>
  );
} /////////// Layout /////////////////////
