import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-slate-200 shadow-md">
      <div className=" flex justify-between items-center max-w-6xl mx-auto p-2">
       <Link to={'/'}>
        <h1 className=" font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-gray-600">Sahad</span>
          <span className="text-gray-700">Estate</span>
        </h1>
       </Link>
        <form className="bg-sky-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="search...."
            className="bg-transparent"
          />
          <FaSearch className=" text-sky-600 outline-none w-24 sm:w-64" />

          <ul className="flex gap-4">
            <Link to={'//'}>
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">Home</li>

            </Link>

             <Link to={'/about'}>
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">About</li>

            </Link>
             <Link to={'/signin'}>
            <li className=" sm:inline text-slate-700 hover:underline cursor-pointer">Sign in</li>

            </Link>
          </ul>
        </form>
      </div>
    </header>
  );
};

export default Header;
