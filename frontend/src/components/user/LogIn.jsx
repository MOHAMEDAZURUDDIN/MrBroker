import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAuthError, login } from "../../actions/userActions";
import MetaData from "../../sections/MetaData";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.authState
  );
  const darkMode = useSelector((state) => state.darkmode);

  const redirect = location.search ? "/" + location.search.split("=")[1] : "/";

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirect);
    }

    if (error) {
      toast(error, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: "error",
        onOpen: () => {
          dispatch(clearAuthError);
        },
      });
      return;
    }
  }, [error, isAuthenticated, dispatch, navigate, redirect]);

  return (
    <div
      className={`relative flex justify-center items-center h-screen px-4 overflow-hidden ${
        darkMode ? "bg-gray-300" : "bg-slate-950"
      }`}
    >
      <MetaData title={`Login`} />

      <div
        className={`w-full max-w-md px-8 py-10 rounded-lg shadow-lg bg-slate-900  shadow-blue-700 ${
          darkMode ? "border border-gray-700" : "border border-gray-200"
        }`}
      >
        <div className="bg-slate-900 p-2 shadow-lg shadow-blue-500 rounded mb-4 hover:scale-105 duration-300 rotate-6">
          <h1 className=" mb-2 text-3xl font-bold md:text-3xl text-white-400 text-center">
            Log<span className="text-coral-red">i</span>n
          </h1>
        </div>

        <form onSubmit={submitHandler}>
          <div className="mb-6">
            <label
              htmlFor="email_field"
              className="block mb-2 text-sm font-semibold text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email_field"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password_field"
              className="block mb-2 text-sm font-semibold text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password_field"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 text-sm font-semibold text-gray-300"
              >
                Remember me
              </label>
            </div>

            <div>
              <Link
                to="/password/forgot"
                className="text-sm font-semibold text-red-500  hover:text-lg hover:scale-105 duration-300 hover:no-underline"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <button
            id="login_button"
            type="submit"
            className={`w-full py-3 rounded-lg text-white font-bold 
                bg-gradient-to-r from-slate-700 to-blue-500 hover:to-lime-700
                hover:opacity-90 focus:outline-none focus:ring-4 hover:scale-105 duration-200
            }`}
            disabled={loading}
          >
            {loading ? "Logging..." : "LOGIN"}
          </button>
        </form>

        <p className="text-sm text-slate-400 font-semibold mt-4 ">
          New user?{" "}
          <Link to="/register" className="text-blue-700  hover:no-underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
