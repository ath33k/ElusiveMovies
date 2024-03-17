import React from "react";

export default function MovieDetails({ selectedMovie, setSelectedMovie }) {
  function handleCloseBtn() {
    setSelectedMovie(null);
  }
  return (
    <div
      className={
        selectedMovie
          ? "relative  flex flex-col  p-2 transition-all duration-500 sm:mx-8 md:mx-16"
          : "hidden transition-all duration-500 lg:flex"
      }
    >
      <button
        className="absolute left-10 top-5 sm:left-5"
        onClick={handleCloseBtn}
      >
        &#10060;
      </button>
      <div className=" flex flex-col items-center gap-2 p-4 sm:mt-8 sm:flex-row sm:items-start sm:justify-start sm:gap-4">
        <img
          src={selectedMovie?.Poster}
          className="w-[50%] bg-red-400 sm:w-[45%] md:w-[40%]"
        ></img>
        <div className="sm:text-left">
          <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">
            {selectedMovie?.Title}
          </h2>
          <p className="text-lg">{selectedMovie?.Year}</p>
          <p>{selectedMovie?.Genre}</p>
        </div>
      </div>
      <p className="mx-10 break-all text-justify sm:mx-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quidem
        ea assumenda similique. Quam ipsa ipsam architecto repudiandae aliquid
        perferendis similique hic molestias enim? Maiores ex nam quos blanditiis
        voluptates, explicabo, ducimus praesentium optio reiciendis totam iure
        quis.
      </p>
    </div>
  );
}

// Title: "Parasite",
// Genre: "Action, Adventure, Fantasy",
// Director: "Yimou Zhang",
// Writer: "Carlo Bernard, Doug Miro, Tony Gilroy",
// Actor: "Matt Damon, Tian Jing, Willem Dafoe",
