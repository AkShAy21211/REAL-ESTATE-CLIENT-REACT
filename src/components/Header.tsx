import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-forestGreen shadow-md p-4">
      <div className=" flex justify-between items-center max-w-7xl mx-auto p-2">
        <Link to={"/"}>
          <h1 className=" font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-white">Home</span>
            <span className="text-white ">Base</span>
          </h1>
        </Link>
        {/* <form className="bg-transparent p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="search...."
            className="bg-transparent outline-none  rounded-lg "
          />
          <FaSearch className=" text-white outline-none w-24 sm:w-64" />
        </form> */}
        <ul className="flex gap-4">
          <Link to={"//"}>
            <li className="hidden sm:inline font-semibold text-white hover:text-cream cursor-pointer">
              Home
            </li>
          </Link>

          <Link to={"/about"}>
            <li className="hidden sm:inline font-semibold text-white hover:text-cream  cursor-pointer">
              About
            </li>
          </Link>
          <Link to={"/signin"}>
            <li className=" sm:inline font-semibold text-white hover:text-cream  cursor-pointer">
              Sign in / Sign up
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
