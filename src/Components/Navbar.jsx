import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    console.log("hi");
  };
  return (
    <BrowserRouter>
      <header className="flex justify-between px-[2rem] my-5 relative ">
        <div>
          <h1 className="text-2xl">MJ</h1>
        </div>
        <div
          className="hamburger sm:absolute top-1 right-3 flex items-center md:hidden "
          onClick={handleClick}
        >
          <FaBars className="text-2xl " />
        </div>
        <nav>
          <ul className="hidden md:flex justify-around gap-3 text-lg  ">
            <Link to="#home" smooth className="px-2">
              Home
            </Link>
            <Link to="#services" smooth className="px-2">
              Services
            </Link>
            <Link to="#about" smooth className="px-2">
              About Me
            </Link>
            <Link to="#works" smooth className="px-2">
              Works
            </Link>
          </ul>
        </nav>
      </header>
    </BrowserRouter>
  );
};

export default Navbar;
