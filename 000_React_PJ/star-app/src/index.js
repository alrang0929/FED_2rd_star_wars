import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";

// 전체 공통 CSS 불러오기
import "../src/css/index.scss";
import Main from "./components/page/Main";
import Themandalorian from "./components/page/Themandalorian";
import Ahsoka from "./components/page/Ahsoka";
import Badbatch from "./components/page/Badbatch";

export default function MainComponent() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* 하위 라우트 셋팅 
        -> path설정대신 index키워드를 쓰면 
        첫페이지로 구성됨 -> MainArea 컴포넌트 <Outlet/>에
        출력된다!*/}
          <Route index element={<Main />} />
          <Route path="themandalorian" element={<Themandalorian />} />
          <Route path="" element={<Ahsoka />} />
          <Route path="" element={<Badbatch />} />
        </Route>
        {/* Layout 루트 Route로 하위 Route를 감싼다! */}
      </Routes>
    </BrowserRouter>
  );
}

// 먼저 root 객체 만들기
const root = ReactDOM.createRoot(document.querySelector("#root"));
// 출력하기
root.render(<MainComponent />);
