import React, { useEffect } from "react";

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    //외부 클릭을 감지할 이벤트 리스너 함수 선언.
    //클릭시 모달이면 창을 닫지않기, 클릭시 모달 외부이면 창을 닫기.
    const listener = (event) => {
      console.log("ref", ref.current);
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    //document객체에 mousedown, touchstart 이벤트 리스너 추가. 마우스누를때, 터치스크린 터치할때 발생
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    //return이후는 useEffect훅에서 정리함수를 반환한다. 컴포넌트 언마운트 될때 호출
    return () => {
      //mousedown, touchstart 이벤트 리스너 제거
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]); //의존성 배열이 변경될때 코드 재실행
};

export default useOnClickOutside;
