import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { IoLogOutSharp } from "react-icons/io5";
import { useEffect, useState } from "react";

const Header = () => {
  const { getData, clearStorage } = useLocalStorage();
  let [token, setToken] = useState();

  useEffect(() => {
    const token = getData("token");

    if (token) setToken(token);
  }, [token]);

  return (
    <header className=" bg-forestGreen shadow-md p-4">
      <div className=" flex justify-between items-center max-w-7xl mx-auto p-2">
        <Link to={"/"}>
          <h1 className=" font-bold text-lg sm:text-2xl flex ">
            <span className="text-white">Home</span>
            <span className="text-white ">Base</span>
          </h1>
        </Link>

        <nav className="flex gap-4">
          <Link
            className="hidden sm:inline font-semibold text-white hover:text-cream cursor-pointer"
            to={"/"}
          >
            Home
          </Link>

          <Link
            className="hidden sm:inline font-semibold text-white hover:text-cream cursor-pointer"
            to={"/about"}
          >
            About
          </Link>
          {token ? (
            <Link
              to={"/signup"}
              onClick={clearStorage}
              className="hidden sm:inline font-semibold text-white hover:text-cream cursor-pointer"
            >
              <IoLogOutSharp size={25} />
            </Link>
          ) : (
            <Link
              className="hidden sm:inline font-semibold text-white hover:text-cream cursor-pointer"
              to={"/signin"}
            >
              Sign in / Sign up
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
