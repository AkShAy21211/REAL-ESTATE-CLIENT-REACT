import React from "react";
import { FaPlus } from "react-icons/fa";

const AddPropertyButton = () => {
  return (
    <button className="p-3 m-5 fixed top-[80vh] right-10 bg-forestGreen rounded-full text-white">
      <FaPlus size={30} />
    </button>
  );
};

export default AddPropertyButton;
