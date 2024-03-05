import React from "react";
import { useParams } from "react-router-dom";

const MovieDetails = ({ movieData }) => {
  const { movieId } = useParams();
  var findMovie = movieData.find((movie, index) => movie.id == movieId);
  return (
    <div>
      <h1>{findMovie.title}</h1>
      <img src={findMovie.posterUrl} alt="" />
      <p>{findMovie.description}</p>
      <p>{findMovie.rating}</p>
      <iframe
        width="100"
        height="100"
        src={findMovie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow=""
      />
    </div>
  );
};

export default MovieDetails;
