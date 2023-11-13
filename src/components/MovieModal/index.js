import React, { useRef } from "react";
import "./MovieModal.css";
import useOnClickOutside from "../../Hooks/useOnClickOutside";

function MovieModal({ movie, setModalOpen }) {
  // movie 객체에서 필요한 속성들을 추출
  const {
    backdrop_path,
    title,
    overview,
    name,
    release_date,
    vote_average,
    first_air_date,
  } = movie;

  const ref = useRef();
  useOnClickOutside(ref, () => {
    setModalOpen(false);
  });

  //ref로 모달창의 영역을 잡았고, useEffect훅스에서 함수를 호출하고 모달 안인지 밖인지 확인을 할때
  //ref가 필요하고 만약에 모달창이 맞다면 setModalOpen(false)를 하면 모달이 닫힌다.
  return (
    <div className="presentation">
      <div className="wrapper-modal">
        <div className="modal" ref={ref}>
          <span onClick={() => setModalOpen(false)} className="modal-close">
            X
          </span>

          <img
            className="modal__poster-img"
            src={
              backdrop_path
                ? `https://image.tmdb.org/t/p/original/${backdrop_path}`
                : "https://images.unsplash.com/photo-1682687982468-4584ff11f88a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="modal__poster-img"
          />

          <div className="modal__content">
            <p className="modal__details">
              <span className="modal__user_perc"> 100% for you </span>
              {release_date ? release_date : first_air_date}
            </p>

            <h2 className="modal__title">{title ? title : name}</h2>
            <p className="modal__overview"> 평점: {vote_average}</p>
            <p className="modal__overview"> {overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
