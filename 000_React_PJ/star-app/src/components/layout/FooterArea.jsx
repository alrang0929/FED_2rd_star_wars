// 하단영역 컴포넌트 ///

// 하단메뉴 데이터 불러오기
import { htmlData } from "../../data/common_data";
// 하단영역 CSS 불러오기
import "../../css/common/footer_area.scss";

///////////////////////////////////////////////

export const FooterArea = () => {
  //// 코드 리턴구역 //////////////
  return(  
  <header id="footer-area" dangerouslySetInnerHTML={{ __html: htmlData.footerArea }} />
);
}; /////////// FooterArea /////////////////////
