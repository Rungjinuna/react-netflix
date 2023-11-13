import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import "./DetailPage.css";

export default function DetailPage() {
  const { movieId } = useParams();
  console.log("movieId", movieId);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${movieId}`);
      console.log("request.data", request.data);
      setMovie(request.data);
    }
    fetchData();
  }, [movieId]);

  if (!movie) return <div>...loading</div>;

  return (
    <section className="section">
      <div className="detail_img_container">
        <img
          className="detail_img"
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt="poster"
        />
      </div>
      <div className="detail_title">
        <h2 style={{ color: "white" }}>
          {movie.title || movie.name || movie.original_name}
        </h2>
        <div className="detail_overview">
          <p style={{ color: "white" }}>{movie.overview}</p>
        </div>
      </div>
    </section>
  );
}
