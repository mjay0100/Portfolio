import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <BrowserRouter>
      <header className="flex justify-between px-[2rem] my-3 items-center relative ">
        <div>
          <h1 className="text-2xl md:px-[4rem]">MJ</h1>
        </div>

        <nav
          className={`${
            show ? "nav" : "hidden md:flex justify-between text-black px-2"
          }`}
          onClick={() => setShow(false)}
        >
          <ul className="item md:flex md:flex-row">
            <Link
              to="#home"
              className="px-[1.5rem] hover:text-[#14CFAE] duration-400 transition-all ease-in-out text-lg "
            >
              Home
            </Link>
            <Link
              to="#services"
              className="px-[1.5rem] hover:text-[#14CFAE] duration-400 transition-all ease-in-out text-lg "
            >
              Services
            </Link>
            <Link
              to="#about"
              className="px-[1.5rem] hover:text-[#14CFAE] duration-400 transition-all ease-in-out text-lg "
            >
              About
            </Link>
            <Link
              to="#works"
              className="px-[1.5rem] hover:text-[#14CFAE] duration-400 transition-all ease-in-out text-lg "
            >
              Works
            </Link>
          </ul>
        </nav>
        <div
          className={`${
            show
              ? "sm:fixed fixed right-[2rem] z-[100] text-[#14CFAE] flex items-center md:hidden cursor-pointer "
              : "relative md:hidden cursor-pointer"
          }`}
          onClick={handleClick}
        >
          <FaBars className="text-2xl " />
        </div>
      </header>
    </BrowserRouter>
  );
};

export default Navbar;
