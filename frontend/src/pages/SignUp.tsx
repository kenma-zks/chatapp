import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/loginbg.jpg";
import logo from "../assets/logo.jpg";
import { IRegisterData } from "../Types/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerMutation } from "../api/api";
import { useMutation } from "react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm<IRegisterData>();

  const navigate = useNavigate();

  const { mutateAsync } = useMutation<IRegisterData, Error, IRegisterData>(
    registerMutation,
    {
      onSuccess: (data) => {
        console.log(data);
        localStorage.setItem("registrationSuccess", "true");
        navigate("/");
        toast.success("Registration successful", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
          hideProgressBar: true,
        });
      },
      onError: (error: any) => {
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
          hideProgressBar: true,
        });
      },
    }
  );

  const onSubmit: SubmitHandler<IRegisterData> = async (data) => {
    try {
      await mutateAsync(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      className="flex w-full h-screen bg-[#604E64]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="lg:flex lg:flex-1 lg:w-2/3  flex-row h-full bg-[#604E64]">
        <img src={bg} className="w-full object-contain lg:block hidden" />
      </div>
      <div className="flex w-full lg:w-1/3 flex-row h-auto items-center justify-center px-[30px] py-[16px] bg-[#604E64]  ">
        <div className="flex flex-col w-full px-[54px] py-[20px] items-center rounded-lg bg-white">
          <img
            src={logo}
            className="w-[80px] h-[80px] rounded-full border items-center justify-center object-cover "
          />
          <div className="text-2xl md:text-3xl font-bold mt-10 ">Sign Up</div>
          <div className="text-xs md:text-sm font-semibold text-[#707991] mt-2">
            Please enter your details
          </div>
          <div className="flex flex-col w-full mt-10">
            <input
              type="text"
              placeholder="Username"
              className="border-black border-b-2 mb-4 w-full py-2 focus:outline-none"
              {...register("username", { required: "Name is required" })}
            />
            {
              <p className="text-red-500 text-xs">
                {errors?.username?.message}
              </p>
            }
            <input
              type="email"
              placeholder="Email"
              className="border-black border-b-2 mb-4 w-full py-2 focus:outline-none "
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {<p className="text-red-500 text-xs">{errors?.email?.message}</p>}
            <input
              type="password"
              placeholder="Password"
              className="border-black border-b-2 mb-4 w-full py-2 focus:outline-none"
              {...register("password", { required: "Password is required" })}
            />
            {
              <p className="text-red-500 text-xs">
                {errors?.password?.message}
              </p>
            }
            <input
              type="password"
              placeholder="Confirm Password"
              className="border-black border-b-2 mb-4 w-full py-2 focus:outline-none"
              {...register("confirmPassword", {
                required: "Password is required",
                validate: (value) =>
                  value === watch("password") || "The passwords do not match",
              })}
            />
            {
              <p className="text-red-500 text-xs">
                {errors?.confirmPassword?.message}
              </p>
            }
          </div>
          <button
            className="h-12 bg-black w-full mt-12 text-white font-semibold rounded-full"
            type="submit"
          >
            Sign Up
          </button>
          <button className="h-12 bg-[#d9dadb] w-full mt-4 font-semibold rounded-full flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Log In with Google
          </button>

          <div className="flex mt-20">
            <p className="text-xs md:text-sm font-semibold text-gray-600">
              Already have an account?
              <span className="font-semibold cursor-pointer text-gray-900 px-1">
                <Link to="/">Sign In</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </form>
  );
};

export default SignUp;
