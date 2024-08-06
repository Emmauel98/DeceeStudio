import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const mobileNavigation = (value) => {
    if (value === "show") {
      setShowMobileNav(true);
    } else {
      setShowMobileNav(false);
    }
  };

  return (
    <>
      <nav className="md:flex justify-between md:p-[2rem] p-[.5rem]  bg-black">
        <span className=" hover:cursor-pointer flex justify-between md:block">
          <h1>Deceestudio</h1>
          {showMobileNav ? (
            <span
              className=" md:hidden "
              onClick={() => mobileNavigation("close")}
            >
              &#9747;
            </span>
          ) : (
            <span
              className=" md:hidden"
              onClick={() => mobileNavigation("show")}
            >
              &#9776;
            </span>
          )}
        </span>
        <ul
          className={`md:flex gap-[2rem]  ${showMobileNav ? "block" : "hidden"}
           ${showMobileNav ? "relative" : "null"}
           ${showMobileNav ? "p-[1rem]" : "null"}
           transition ease-in-out delay-150
           ${showMobileNav ? "h-[40vh]" : "null"}
          `}
        >
          <li
            className={`hover:cursor-pointer 
           ${showMobileNav ? "pb-[.5rem]" : "null"}
            `}
          >
            <Link
              onClick={() => mobileNavigation("close")}
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li
            className={`hover:cursor-pointer 
           ${showMobileNav ? "pb-[.5rem]" : "null"}
            `}
          >
            <Link
              onClick={() => mobileNavigation("close")}
              to="storyboard"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              STORY BOARD
            </Link>
          </li>
          <li
            className={`hover:cursor-pointer 
           ${showMobileNav ? "pb-[.5rem]" : "null"}
            `}
          >
            <Link
              onClick={() => mobileNavigation("close")}
              to="props"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              PROPS
            </Link>
          </li>
          <li
            className={`hover:cursor-pointer 
           ${showMobileNav ? "pb-[.5rem]" : "null"}
            `}
          >
            <Link
              onClick={() => mobileNavigation("close")}
              to="ourTeam"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              TEAM
            </Link>
          </li>
        </ul>
        <h1 className="hover:cursor-pointer hidden md:block">
        <a
                href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:a5920682-375a-4b68-8d0b-0ec789d0d5fa"
                target="_blank"
                rel="noopener noreferrer"
                // className=" text-white font-bold"
              >
                Documents
              </a>
        </h1>
      </nav>
    </>
  );
};

export default Navbar;
