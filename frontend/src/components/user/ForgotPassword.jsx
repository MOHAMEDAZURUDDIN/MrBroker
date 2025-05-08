import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GetBackgroundColor from "../layout/GetBackgroundColor";
import MetaData from "../../sections/MetaData";
import { clearAuthError, forgotPassword } from "../../actions/userActions";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { error, message } = useSelector((state) => state.authState);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    dispatch(forgotPassword(formData));
  };

  useEffect(() => {
    if (message) {
      toast(message, {
        type: "success",
        position: toast.POSITION.BOTTOM_CENTER,
      });
      setEmail("");
      return;
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
  }, [message, error, dispatch]);
  return (
    <div
      className={`min-h-screen flex items-center justify-center ${GetBackgroundColor()}  `}
    >
      <div className="w-96 sm:w-80 bg-slate-900 p-4 rounded overflow-hidden">
        <MetaData title={`Forgot Password`} />
        <div className="bg-slate-900 p-2 shadow-lg shadow-blue-500 rounded mb-2 mt-4 hover:scale-105 duration-300 rotate-6 overflow-hidden">
          <h1 className=" mb-2 text-3xl font-bold md:text-3xl text-white-400 text-center">
            Forgot<span className="text-coral-red">Password</span>
          </h1>
        </div>

        <div className="w-full max-w-md px-4 py-2 mb-4">
          <div className="mb-4">
            <label
              htmlFor="email_field"
              className="block mb-1 font-medium text-pale-blue"
            >
              Enter Email
            </label>
            <input
              type="text"
              id="email_field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full bg-gray-300 text-stone-900 hover:ring-black rounded border border-blue-950"
            />
          </div>
          <div className="flex justify-center">
            <button
              id="forgot_password_button"
              type="submit"
              className="w-full py-3 bg-gradient-to-bl from-red-800 via-rose-900 to-rose-950 text-white font-bold rounded  hover:to-red-700 hover:scale-105 duration-300 focus:outline-none"
              onClick={submitHandler}
              disabled={!email ? 'cursor-not-allowed' : ''}
            >
              Send Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
