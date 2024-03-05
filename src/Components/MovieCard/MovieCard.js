import React from "react";
import { Card, CardText } from "react-bootstrap";
import ReactStars from "react-stars";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

const MovieCard = ({ movie, index }) => {
  const navigate = useNavigate();
  const showMovieDetails = (id) => {
    navigate(`/movie-details/${id}`);
  };
  return (
    <div>
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={movie.posterUrl} />
          <Card.Body>
            <Card.Title>
              <Link to={`/movie.details/${movie.id}`}>{movie.title}</Link>{" "}
            </Card.Title>
            <Card.Text>{movie.description}</Card.Text>
            <Card.Text>
              <ReactStars
                count={5}
                value={movie.rating}
                size={24}
                activeColor="#ffd700"
                edit={false}
              />
            </Card.Text>
            <button variant="dark" onClick={() => showMovieDetails(movie.id)}>
              Trailer
            </button>
          </Card.Body>
        </Card>
      </>
    </div>
  );
};

export default MovieCard;
