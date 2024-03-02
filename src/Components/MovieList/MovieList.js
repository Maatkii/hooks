import React, { useState } from "react";
import ReactStars from "react-stars";
import MovieCard from "../MovieCard/MovieCard";
import "./style.css";
const MovieList = ({ filtredMovie }) => {
  return (
    <div className="movie-list">
      {filtredMovie.map((movie, index) => {
        return <MovieCard movie={movie} />;
      })}
    </div>
  );
};

export default MovieList;
