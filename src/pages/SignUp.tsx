import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import "react-simple-toasts/dist/theme/dark.css"; // import the desired theme
import { signUp } from "../api/common";

type Inputs = {
  username: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const [tab, setTab] = useState<"buyer" | "realtor">("buyer");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await signUp(
        data.username,
        data.name,
        data.email,
        data.password
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-login-bg bg-cover bg-center bg-no-repeat">
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
          className="flex flex-col p-3 gap-3 justify-center items-center mt-10"
        >
          {tab === "buyer" && (
            <>
              <input
                {...register("username", {
                  required: "Please enter a unique username",
                })}
                placeholder="Enter username"
                className="w-full p-3 active:bg-transparent focus:bg-transparent placeholder:text-gray-700 rounded-lg bg-transparent border border-black"
              />
              {errors.username && (
                <p className="text-xs w-full text-red-500">
                  {errors.username.message}
                </p>
              )}
              <input
                {...register("name", { required: "Please enter your name" })}
                placeholder="Enter name"
                className="w-full p-3 placeholder:text-gray-700 rounded-lg bg-transparent border border-black"
              />
              {errors.name && (
                <p className="text-xs w-full text-red-500">
                  {errors.name.message}
                </p>
              )}

              <input
                {...register("email", {
                  required: "Please enter your email",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Enter email"
                className="w-full p-3 placeholder:text-gray-700 rounded-lg bg-transparent border border-black"
              />
              {errors.email && (
                <p className="text-xs w-full text-red-500">
                  {errors.email.message}
                </p>
              )}

              <input
                {...register("password", {
                  required: "Please enter your password",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type="password"
                autoComplete="true"
                placeholder="Enter password"
                className="w-full p-3 placeholder:text-gray-700 rounded-lg bg-transparent border border-black"
              />
              {errors.password && (
                <p className="text-xs w-full text-red-500">
                  {errors.password.message}
                </p>
              )}

              <input
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                type="password"
                autoComplete="true"
                placeholder="Confirm password"
                className="w-full p-3 placeholder:text-gray-700 rounded-lg bg-transparent border border-black"
              />
              {errors.confirmPassword && (
                <p className="text-xs w-full text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </>
          )}

          {tab === "realtor" && (
            <>
              <input
                {...register("username", {
                  required: "Please enter a unique username",
                })}
                placeholder="Enter username"
                className="w-full p-3 active:bg-transparent focus:bg-transparent placeholder:text-gray-700 rounded-lg bg-transparent border border-black"
              />
              {errors.username && (
                <p className="text-xs w-full text-red-500">
                  {errors.username.message}
                </p>
              )}
              <input
                {...register("name", { required: "Please enter your name" })}
                placeholder="Enter name"
                className="w-full p-3 placeholder:text-gray-700 rounded-lg bg-transparent border border-black"
              />
              {errors.name && (
                <p className="text-xs w-full text-red-500">
                  {errors.name.message}
                </p>
              )}

              <input
                {...register("email", {
                  required: "Please enter your email",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Enter email"
                className="w-full p-3 placeholder:text-gray-700 rounded-lg bg-transparent border border-black"
              />
              {errors.email && (
                <p className="text-xs w-full text-red-500">
                  {errors.email.message}
                </p>
              )}

              <input
                {...register("password", {
                  required: "Please enter your password",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type="password"
                placeholder="Enter password"
                className="w-full p-3 placeholder:text-gray-700 rounded-lg bg-transparent border border-black"
              />
              {errors.password && (
                <p className="text-xs w-full text-red-500">
                  {errors.password.message}
                </p>
              )}

              <input
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                type="password"
                placeholder="Confirm password"
                className="w-full p-3 placeholder:text-gray-700 rounded-lg bg-transparent border border-black"
              />
              {errors.confirmPassword && (
                <p className="text-xs w-full text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </>
          )}

          <div className="flex gap-5 font-semibold">
            <Link to={"/signin"}>
              <p className="text-xs">
                Already have an account?{" "}
                <span className="text-forestGreen">Sign In</span>
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
            className="bg-forestGreen px-4 py-2 w-full rounded-lg text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
