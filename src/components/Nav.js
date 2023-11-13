import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false); // 인풋 창이 열려있는지 여부
  const navigate = useNavigate();

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

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  const handleLogoClick = () => {
    // 홈 페이지로 돌아가기
    navigate("/");
  };

  const handleSearchIconClick = () => {
    // 아이콘을 클릭하면 인풋 창 열기/닫기
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <nav className={`nav ${show && "nav__black"} `}>
      <img
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        className="nav__logo"
        onClick={handleLogoClick}
      />
      {isSearchOpen && ( // isSearchOpen 상태에 따라 인풋 창 보이기/숨기기
        // React 컴포넌트 내부
        <input
          value={searchValue}
          onChange={handleChange}
          className="nav__input"
          type="text"
          placeholder="영화를 검색해주세요."
        />
      )}
      <img
        alt="User logged"
        src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
        className="nav__avatar"
      />
      <FontAwesomeIcon
        className="nav__search"
        icon={faSearch}
        style={{ color: "#ffffff", fontSize: "25px" }}
        onClick={handleSearchIconClick}
      />
    </nav>
  );
}
