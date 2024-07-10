// 메인페이지 컴포넌트 //

import BannerArea from "../module/BannerArea";
import NewsArea from "../module/NewsArea";
import SecContent from "../module/SecContent";
import VisualViewArea from "../module/VisualViewArea";

// css 불러오기
import "../../css/main.scss";
import { useEffect } from "react";
import observerFn from "../../js/observer_fn.js";
import showPosterFn from "../../js/show_poster_fn";



export default function Main() {

  useEffect(()=>{
    observerFn();
    showPosterFn();
  },[]);
  
  // 코드 리턴구역
  return (
    <>
      {/* 2. 메인배너영역   */}
      <BannerArea />
      {/* 3. 메인 영역  */}
      <main id="main-area">
        <div className="content-area inbox">
          {/* 3-1. 컨텐츠영역(세계관)  */}
          <SecContent />
          {/* 3-2. 뉴스영역(뉴스,시리즈)  */}
          <NewsArea />
          {/* 3-3.메인 하단 배너 박스  */}
          <VisualViewArea />
        </div>
      </main>
    </>
  );
} ///////Main ////
