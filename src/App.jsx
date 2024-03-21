import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import MainContainer from "./components/MainContainer";

import { fetchAPI } from "./utils/FetchAPI.js";
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

const KEY = "f62b9690";

function App() {
  const [query, setQuery] = useState("interstellar");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");
  // const temQuery = "interstellar";

  // "Runtime":"103 min","Genre":"Action, Adventure, Fantasy","Director":"Yimou Zhang","Writer":"Carlo Bernard, Doug Miro, Tony Gilroy","Actors":"Matt Damon, Tian Jing, Willem Dafoe"
  useEffect(
    function () {
      if (!query) return;

      async function fetchMovies() {
        // const res = await fetch(
        //   `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
        // );
        // const data = await res.json();
        // console.log(data);
        try {
          setIsLoading(true);
          setFetchError("");
          const data = await fetchAPI(query);
          if (data.Response === "False") throw new Error("Movie Not Found");

          setMovies(data.Search);
        } catch (err) {
          setFetchError(err.message);
          console.log(err.message);
        } finally {
          setIsLoading(false);
        }
        // console.log(data);
      }

      if (query.length < 3) {
        setMovies([]);
        setFetchError("");
        return;
      }
      fetchMovies();
    },
    [query],
  );

  function handleChange(e) {
    if (!e.target.value) return;
    console.log(e.target.value);
    setQuery(() => e.target.value);
  }

  return (
    <div className="group">
      <NavBar />
      <div className="mb-8 px-32">
        <input
          type="text"
          placeholder="search here"
          className="w-full rounded-md border-2 border-transparent  bg-black p-2 outline-none transition-all duration-300 focus:border-purple-200"
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <MainContainer
          tempMovies={movies}
          isLoading={isLoading}
          fetchError={fetchError}
        />
      </div>
    </div>
  );
}

export default App;
