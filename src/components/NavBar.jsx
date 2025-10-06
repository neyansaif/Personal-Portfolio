import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setnav] = useState(false);

  const Links = [
    { id: 1, link: "/" },
    { id: 2, link: "/about" },
    { id: 3, link: "/portfolio" },
    { id: 4, link: "/experience" },
    { id: 5, link: "/blog" },
    { id: 6, link: "/contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-10">
      <div>
        <h1 className="text-5xl font-signature ml-2">Neyan_saif</h1>
      </div>

      <ul className="hidden md:flex">
        {Links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200"
          >
            <Link to={link}>{link === "/" ? "home" : link.slice(1)}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setnav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 md:hidden">
          {Links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setnav(!nav)} to={link}>
                {link === "/" ? "home" : link.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
