import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import MainContainer from "./components/MainContainer";

function App() {
  // const KEY = "f62b9690";
  // const API = `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}`;
  const tempMovieData = [
    {
      imdbID: "tt1375666",
      Title: "Inception",
      Genre: "Action, Adventure, Fantasy1",
      Director: "Yimou Zhang1",
      Writer: "Carlo Bernard, Doug Miro, Tony Gilroy1",
      Actor: "Matt Damon, Tian Jing, Willem Dafoe1",
      Year: "2010",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    },
    {
      imdbID: "tt0133093",
      Title: "The Matrix",
      Genre: "Action, Adventure, Fantasy2",
      Director: "Yimou Zhang2",
      Writer: "Carlo Bernard, Doug Miro, Tony Gilroy2",
      Actor: "Matt Damon, Tian Jing, Willem Dafoe2",
      Year: "1999",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
      imdbID: "tt6751668",
      Title: "Parasite",
      Genre: "Action, Adventure, Fantasy3",
      Director: "Yimou Zhang3",
      Writer: "Carlo Bernard, Doug Miro, Tony Gilroy3",
      Actor: "Matt Damon, Tian Jing, Willem Dafoe3",
      Year: "2019",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    },
  ];

  // "Runtime":"103 min","Genre":"Action, Adventure, Fantasy","Director":"Yimou Zhang","Writer":"Carlo Bernard, Doug Miro, Tony Gilroy","Actors":"Matt Damon, Tian Jing, Willem Dafoe"
  return (
    <div className="group">
      <NavBar />
      <div>
        <MainContainer tempMovies={tempMovieData} />
      </div>
    </div>
  );
}

export default App;
