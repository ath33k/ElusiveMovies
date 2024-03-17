import React, { useState, useEffect } from "react";
import Movies from "./Movies";
import MovieDetails from "./MovieDetails";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MainContainer({ tempMovies }) {
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
          selectedMovie
            ? "mx-8 h-full p-4 sm:mx-[15%] sm:w-[70%]"
            : "flex h-full flex-wrap justify-start gap-8 p-8 "
        }
      >
        {!desktopVersion ? (
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
            <h2>For desktop version</h2>
          </>
        )}

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
