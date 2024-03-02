import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import MovieList from "./Components/MovieList/MovieList";
import Filter from "./Components/Filter/Filter";

function App() {
  const [ratingChange, setRatingChange] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <NavBar
        ratingChange={ratingChange}
        setRatingChange={setRatingChange}
        setSearchInput={setSearchInput}
      />
      <Filter ratingChange={ratingChange} searchInput={searchInput} />
    </>
  );
}

export default App;
