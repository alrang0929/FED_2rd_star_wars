// 회원가입을 위한 로컬스토리지 생성 JS
/************************************ 
    [ 회원가입 기본 데이터 구조 ]
    1. 기본키(유일키) : idx
    2. 아이디 : uid
    3. 비밀번호 : pwd
    4. 사용자이름 : unm
    5. 이메일 : eml
************************************/

// [ 로컬쓰 클리어 ] /////////
const clearData = () => {
    localStorage.clear();
    console.log("로컬쓰 클리어!");
  }; /////////// clearData //////////////
  
  // [ 로컬쓰 초기체크셋팅! ] ////////////
  const initData = () => {//보통 초기화 할때 init 이라는 말을 많이 씀.
    // 만약 로컬스 "mem-data"가 null이면 만들어준다!
    if (localStorage.getItem("mem-data") === null) {//localStorage.getItem("mem-data")에 null(없다) 이냐? 그럼 밑에꺼 만들어라
      localStorage.setItem(
        "mem-data",
        `
          [
              {
                  "idx": 1,
                  "uid":"admin",
                  "pwd":"1111",
                  "unm":"Administrator",
                  "eml":"admin@dc.com"
              },
              {
                  "idx": 2,
                  "uid":"tomtom",
                  "pwd":"1111",
                  "unm":"Tom",
                  "eml":"tom@gmail.com"
              }
          ]
      `
      );
    }
  }; ///////////// initData /////////////////
  
  export { clearData, initData };
  