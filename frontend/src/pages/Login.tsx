import bg from "../assets/loginbg.jpg";
import logo from "../assets/logo.jpg";

const Login = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="flex md:flex-1 w-2/3 flex-row h-full bg-[#604E64]">
        <img src={bg} className="w-full object-contain md:block hidden" />
      </div>
      <div className="flex w-1/3 flex-row h-full px-[30px] py-[16px] bg-[#604E64]  ">
        <div className="flex flex-col w-full py-[60px] items-center rounded-lg bg-white">
          <img
            src={logo}
            className="w-[80px] h-[80px] rounded-full border items-center justify-center object-cover "
          />
          <div className="text-3xl font-bold mt-10 ">Welcome back!</div>
          <div className="text-sm font-semibold text-[#707991] mt-2">
            Please enter your details
          </div>
          <input
            type="text"
            placeholder="Email"
            className="border-black border-b-2 mt-12 mb-4 w-80 py-2 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-black border-b-2 w-80 py-2 focus:outline-none"
          />
          <div className="flex flex-row w-80 mt-4 items-center justify-between">
            <label className="flex items-center justify-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-3 w-3 hover:cursor-pointer"
              />
              <span className="text-sm font-semibold text-gray-600">
                Remember me
              </span>
            </label>
            <div className="text-sm font-semibold text-gray-400 hover:cursor-pointer">
              Forgot Password?
            </div>
          </div>
          <button className="h-12 bg-black w-80 mt-12 text-white font-semibold rounded-full">
            Log In
          </button>
          <button className="h-12 bg-[#d9dadb] w-80 mt-4 font-semibold rounded-full flex items-center justify-center gap-2">
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

          <div className="flex mt-auto">
            <p className="text-sm font-semibold text-gray-600">
              Don't have an account?
              <span className="font-semibold cursor-pointer text-gray-900 px-1">
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
