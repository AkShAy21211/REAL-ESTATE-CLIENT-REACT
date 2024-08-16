import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../api/common";
import useLocalStorage from "../hooks/useLocalStorage";

type Inputs = {
  usernameoremail: string;
  password: string;
};

const SignIn = () => {
  const [tab, setTab] = useState<"buyer" | "realtor">("buyer");
  const {setData}= useLocalStorage();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await signIn(data.usernameoremail, data.password, tab);

      if (response) {
        setData("token", response.token);
        setData("role", response.role);
        navigate("/");
      }

      return;
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-login-bg  bg-cover bg-center bg-no-repeat">
      <div className="m-5 w-full sm:w-52 md:w-80 h-auto bg-cream rounded-md backdrop-sepia-0 bg-cream/50">
        <div className="flex justify-center mb-4 mt-5 w-auto ">
          <button
            className={`px-4 mx-2 shadow-sm shadow-gray-600 py-2 w-full rounded-t-lg ${
              tab === "buyer" ? "bg-forestGreen text-white" : "bg-gray-200"
            }`}
            onClick={() => setTab("buyer")}
          >
            Buyer
          </button>
          <button
            className={`px-4 mx-2 shadow-sm shadow-gray-600  py-2 w-full rounded-t-lg ${
              tab === "realtor" ? "bg-forestGreen text-white" : "bg-gray-200"
            }`}
            onClick={() => setTab("realtor")}
          >
            Realtor
          </button>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-3 gap-5 justify-center items-center mt-10"
        >
          {tab === "buyer" && (
            <>
              <input
                {...register("usernameoremail")}
                placeholder="Enter username or email"
                className="w-full p-3 rounded-lg bg-transparent border border-black"
              />
              <input
                {...register("password", { required: true })}
                placeholder="Enter password"
                className="w-full p-3 rounded-lg bg-transparent border border-black"
              />
            </>
          )}
          {tab === "realtor" && (
            <>
              <input
                {...register("usernameoremail")}
                placeholder="Enter username or email"
                className="w-full p-3 rounded-lg bg-transparent border border-black"
              />
              <input
                {...register("password", { required: true })}
                placeholder="Enter password"
                className="w-full p-3 rounded-lg bg-transparent border border-black"
              />
            </>
          )}

          {(errors.password || errors.usernameoremail) && (
            <span className="float-start text-xs w-full text-red-500">
              Please fill all the fields
            </span>
          )}

          <div className="flex gap-5 font-semibold">
            <Link to={"/signup"}>
              <p className="text-xs">
                Don't have an account?{" "}
                <span className="text-forestGreen">Sign Up</span>
              </p>
            </Link>
            <Link to={""}>
              <p className="text-xs">
                <span className="text-forestGreen">Forget password?</span>
              </p>
            </Link>
          </div>
          <button
            type="submit"
            className="bg-forestGreen w-full px-4 py-2 rounded-lg text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
