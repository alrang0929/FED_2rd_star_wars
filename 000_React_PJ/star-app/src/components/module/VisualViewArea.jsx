// 3-3.메인 하단배너박스 영역 컴포넌트 - VisualViewArea.jsx

import React from "react";
import { visualData } from "../../data/main_data";

// CSS 불러오기
import "../../css/visual_view.scss";

function VisualViewArea(props) {
  return (
    <section class="visualView-ban inbox">
    <div className="visualView">
      {visualData.map((v) => {
        return (
          <div className="visualimg">
            <span>
              {v.title}
              <p>{v.series}</p>
              <p className="desc">{v.desc}</p>
              <a className="btn" href={v.href}>
                MORE VIEW
              </a>
            </span>
          </div>
        );
      })}
    </div>
    </section>
  );
}

export default VisualViewArea;
