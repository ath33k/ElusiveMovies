import React, { useEffect, useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(function () {
    const handleResize = () => {
      let width = window.innerWidth;
      if (width >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleNavMenuClick() {
    setIsOpen((curr) => !curr);
  }

  return (
    <div
      className={`relative ${isOpen ? "rounded-t-lg pb-48" : "rounded-lg"}   mb-8 bg-purple-700 px-4 transition-all duration-500 `}
    >
      <nav className="flex items-center justify-start gap-2 lg:justify-between">
        <div
          className="cursor-pointer p-2 text-3xl lg:hidden"
          onClick={handleNavMenuClick}
        >
          {isOpen ? <span>&#10006;</span> : <span>&#9776;</span>}
        </div>
        <div className="cursor-default p-2 text-xl font-semibold">
          ElusiveMovies
        </div>
        <div>
          <ul className="hidden  p-2 lg:flex [&>li:hover]:text-orange-400 [&>li]:mx-2 [&>li]:p-2">
            <li>Home</li>
            <li>Movies</li>
            <li>About us</li>
          </ul>
        </div>
      </nav>
      <MenuLinks isOpen={isOpen} />
    </div>
  );
}

function MenuLinks({ isOpen }) {
  // isOpen
  //         ? "absolute left-0 right-0  top-14 w-[100%] rounded-b-xl  bg-inherit duration-500 ease-in-out lg:hidden"
  //         : "absolute left-[-100%]  top-14 w-[20%] duration-500 ease-in-out md:hidden"
  return (
    <div
      className={
        isOpen
          ? "absolute left-0 right-0  top-14 w-[100%] rounded-b-xl  border-t-2 border-black bg-inherit duration-700 ease-in-out lg:hidden"
          : "absolute left-[-100%] top-14 w-[20%] duration-300  ease-in-out lg:hidden"
      }
      // isOpen
      //     ? "absolute left-0 right-0  top-12 justify-between bg-inherit transition-all duration-500 ease-in md:hidden"
      //     : "absolute left-0 right-0 top-[-100%] hidden duration-500 ease-in"
    >
      <ul className="transition-all [&>li:hover]:cursor-pointer [&>li:hover]:bg-black [&>li]:m-4 [&>li]:rounded-lg [&>li]:p-2  [&>li]:duration-500">
        <li>Home</li>
        <li>Movies</li>
        <li>About us</li>
      </ul>
    </div>
  );
}
