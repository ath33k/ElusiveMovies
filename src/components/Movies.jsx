import React, { useEffect, useState } from "react";

export default function Movies({ movie, selectedMovie, setSelectedMovie }) {
  function handleMovieSelection() {
    setSelectedMovie(() => {
      return movie;
    });
    console.log(selectedMovie);
  }

  return (
    <div
      className={`flex cursor-pointer flex-col  gap-1  rounded-md bg-black text-left text-sm transition-all duration-500 lg:w-[90%] lg:flex-row lg:gap-4 lg:text-2xl ${selectedMovie ? " m-4 w-[80%] p-4 lg:m-0  " : "w-[45%] text-base sm:w-[29%]  md:w-[30%]"} ${selectedMovie?.imdbID == movie.imdbID ? " scale-110 shadow-[0_0px_15px_5px_rgba(150,110,229,1)] lg:scale-105 " : ""} `}
      onClick={handleMovieSelection}
    >
      <img
        className="h-full w-full rounded-lg lg:w-[20%] "
        src={movie.Poster}
        alt={`${movie.title} poster`}
      />
      <div className="flex flex-col flex-wrap  items-start pl-1">
        <h2>{movie.Title}</h2>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
}
