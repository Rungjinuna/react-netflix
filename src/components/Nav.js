import React, { useEffect, useState } from "react";
import "./Nav.css";

export default function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className="container">
      <nav className={`nav ${show && "nav__black"} `}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Netflix logo"
          className="nav__logo"
          onClick={() => window.location.reload()}
        />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
          alt="User logged"
          className="nav__avatar"
        />
      </nav>
      <ul className="item_box">
        <li className="item">Home</li>
        <li className="item">시리즈</li>
        <li className="item">영화</li>
        <li className="item">NEW! 요즘 대세 콘텐츠</li>
        <li className="item">내가 찜한 리스트</li>
        <li className="item">언어별로 찾아보기</li>
      </ul>
    </div>
  );
}
