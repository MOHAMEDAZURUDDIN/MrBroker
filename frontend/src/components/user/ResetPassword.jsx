import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { clearAuthError, resetPassword } from "../../actions/userActions";
import GetBackgroundColor from "../layout/GetBackgroundColor";
import MetaData from "../../sections/MetaData";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector((state) => state.authState);
  const navigate = useNavigate();
  const { token } = useParams();

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);

    dispatch(resetPassword(formData, token));
  };

  useEffect(() => {
    if (isAuthenticated) {
      toast("Password Reset Success!", {
        type: "success",
        position: toast.POSITION.BOTTOM_CENTER,
      });
      navigate("/");
      return;
    }
    if (error) {
      toast(error, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: "error",
        onChange: () => {
          dispatch(clearAuthError);
        },
      });
      return;
    }
  }, [isAuthenticated, error, dispatch, navigate]);
  return (
    <div
      className={`min-h-screen flex items-center justify-center  ${GetBackgroundColor()}`}
    >
      <div className="w-96 sm:w-80 bg-slate-900  p-4 overflow-hidden rounded">
        <MetaData title={`Reset Password`} />
        <div className="bg-slate-900 p-2 shadow-lg shadow-blue-500 rounded mb-2 mt-4 hover:scale-105 duration-300 rotate-6 overflow-hidden">
          <h1 className="mb-2 text-3xl font-bold md:text-3xl text-white-400 text-center">
            Reset <span className="text-coral-red">Password </span>
          </h1>
        </div>

        <div className="w-full max-w-md px-4 py-2 mb-4">
          <div className="mb-4">
            <label
              htmlFor="password_field"
              className="block mb-1 font-medium text-pale-blue"
            >
              Password
            </label>
            <input
              type="text"
              id="password_field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full bg-gray-300 text-stone-900 hover:ring-black rounded border-blue-950"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword_field"
              className="block mb-1 font-medium text-pale-blue"
            >
              Confirm Password
            </label>
            <input
              type="text"
              id="confirmPassword_field"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 p-2 w-full bg-gray-300 text-stone-900 hover:ring-black rounded border-blue-950"
            />
          </div>
          <div className="flex justify-center">
            <button
              id="forgot_password_button"
              type="submit"
              className="w-full py-3 bg-gradient-to-bl from-green-800 via-lime-900 to-green-950 text-white font-bold rounded  hover:to-green-700 hover:scale-105 duration-300 focus:outline-none"
              onClick={submitHandler}
            >
              Set Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
