import React, { useState, useEffect } from "react";
import Movies from "./Movies";
import MovieDetails from "./MovieDetails";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaSpinner } from "react-icons/fa";

export default function MainContainer({ tempMovies, isLoading, fetchError }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [desktopVersion, setDesktopVersion] = useState(function () {
    let width = window.innerWidth;
    if (width >= 1024) {
      return true;
    }
  });

  useEffect(() => {
    const handleResize = () => {
      let width = window.innerWidth;
      if (width >= 1024) {
        setDesktopVersion(true);
      } else {
        setDesktopVersion(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex h-2/5 w-full flex-col gap-2 bg-black lg:flex-row ">
      {/* <div className="flex flex-wrap items-start justify-start gap-8 p-4 "></div> */}
      <div
        className={
          selectedMovie && !desktopVersion
            ? "mx-8 h-full p-4 sm:mx-[15%] sm:w-[70%]"
            : "flex h-full flex-row flex-wrap justify-center gap-8  p-8 sm:mx-[15%] sm:w-[70%] lg:mx-[0%] lg:w-full lg:flex-col lg:items-center lg:gap-4 lg:p-4"
        }
      >
        {isLoading && <Loader />}
        {!isLoading &&
          !fetchError &&
          (!desktopVersion ? (
            <>
              {selectedMovie ? (
                <Slider className="lg:hidden" {...settings}>
                  {tempMovies.map((movie, i) => (
                    <Movies
                      movie={movie}
                      selectedMovie={selectedMovie}
                      setSelectedMovie={setSelectedMovie}
                      key={i}
                    />
                  ))}
                </Slider>
              ) : (
                tempMovies.map((movie, i) => (
                  <Movies
                    movie={movie}
                    selectedMovie={selectedMovie}
                    setSelectedMovie={setSelectedMovie}
                    key={i}
                  />
                ))
              )}
            </>
          ) : (
            <>
              {tempMovies.map((movie, i) => (
                <Movies
                  movie={movie}
                  selectedMovie={selectedMovie}
                  setSelectedMovie={setSelectedMovie}
                  key={i}
                />
              ))}
            </>
          ))}
        {fetchError && <ErrorMessage message={fetchError} />}

        {/* Movie lists */}

        {/* {selectedMovie && (
          <MovieDetails
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
          />
        )} */}
      </div>
      <div className="relative w-full">
        {selectedMovie && (
          <MovieDetails
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
          />
        )}
      </div>
    </div>
  );
}

function Loader() {
  return (
    <div className="flex justify-center">
      <FaSpinner />
    </div>
  );
}

function ErrorMessage({ message }) {
  return (
    <div className="flex justify-center">
      <span>⛔</span> {message}
    </div>
  );
}
