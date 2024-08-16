import { Input, Select } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchProperty = () => {
    return (
        <div className="w-full h-72 flex justify-center items-center">
            <div className="px-3 pb-5 flex flex-col md:flex-row justify-around items-center w-full md:w-auto mx-5 md:mx-52 relative z-50 shadow-lg rounded-lg h-auto md:h-20 space-y-4 md:space-y-0 md:space-x-4">
                <Input
                    type="text"
                    name=""
                    className="border-2 rounded-xl p-2 outline-none w-full md:w-80 placeholder:px-5"
                    placeholder="Enter location"
                    id=""
                />
                <select className="border-2 bg-white text-gray-400 rounded-xl appearance-none p-2 px-3 outline-none w-full md:w-80 placeholder:px-5">
                    <option value="option1" className="text-gray-300">Select property type</option>
                </select>
                <button className="bg-forestGreen w-full md:w-32 flex justify-center items-center p-2 rounded-lg"><FaSearch size={25} className=" text-white " /></button>
            </div>
        </div>
    );
};

export default SearchProperty;
