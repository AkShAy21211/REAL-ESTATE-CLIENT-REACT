import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AddPropertyButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/realtor/property/new")}
      className="p-3 m-5 fixed top-[80vh] right-10 bg-forestGreen rounded-full text-white"
    >
      <FaPlus size={30} />
    </button>
  );
};

export default AddPropertyButton;
