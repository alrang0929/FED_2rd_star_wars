// 메인페이지 컴포넌트 //

export default function Main() {
  // 코드 리턴구역
  return (
    <>
      {/* 2. 배너영역  */}
      <div id="ban-area">
        <div className="ban-area col-12">
          <div className="ban_wrap">
            <video
              className="video"
              preload="auto"
              muted="muted"
              autoplay="1"
              loop
              playsinline=""
              src="./images/main_images/starwars_mv1.mp4"
            ></video>
            <div className="blur-wrap">
              <div className="blur-box"></div>
              <img src="./images/main_images/news04.jpg" alt="메인배너이미지" />
            </div>
          </div>
          <div className="ban-btn">
            <div className="banbtn L">&lt;</div>
            <span className="pageInfo">01 / 02</span>
            <div className="banbtn R">&gt;</div>
          </div>
          <div className="scroll_induce"></div>
          <div className="video_control">
            <img className="play" src="./images/main_images/ic_play.png"  alt="플레이버튼"/>
            <img className="pause" src="./images/main_images/ic_pause.png" alt="멈춤버튼"/>
            <span className="pause">STOP Video</span>
            <span className="play">PLAY Video</span>
          </div>
        </div>
      </div>

      {/* 3. 메인 영역  */}
      <main id="main-area">
        {/* 메인페이지 로딩애니메이션  */}
        <section className="intro_section"></section>

        <div className="content-area inbox">
          {/* 3-1. 컨텐츠영역(세계관)  */}
          <section className="content-area"></section>
          {/* 3-2. 뉴스영역(뉴스,시리즈)  */}
          <section className="news-area"></section>
          {/* 3-3.메인 하단 배너 박스  */}
          <section className="visualView-ban inbox"></section>
        </div>
      </main>
    </>
  );
} ///////Main ////
