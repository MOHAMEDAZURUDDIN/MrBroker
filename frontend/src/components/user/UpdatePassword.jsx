import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GetBackgroundColor from "../layout/GetBackgroundColor";
import MetaData from "../../sections/MetaData";
import {toast} from "react-toastify"
import {clearAuthError, updatePassword as updatePasswordAction} from "../../actions/userActions"

const UpdatePassword = () => {
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const dispatch = useDispatch();
  const { isUpdated, error, loading } = useSelector((state) => state.authState);
  const darkMode = useSelector((state) => state.darkmode);

  const submitHandler = (e) => {
    e.preventDefault()
    if(!oldPassword.trim() || !password.trim()){
      toast("Please enter both old and new password",{
        type:"error",
        position:toast.POSITION.BOTTOM_CENTER
      })
      return
    }
    const formData = new FormData()
    formData.append("oldPassword",oldPassword)
    formData.append("password",password)
    dispatch(updatePasswordAction(formData))
  };
  useEffect(() => {
    if (isUpdated) {
      toast("Password updated successfully", {
        type: "success",
        position: toast.POSITION.BOTTOM_CENTER,
      });
      setOldPassword("");
      setPassword("");
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
  }, [isUpdated, error, dispatch]);
  return (
    <div className={`${GetBackgroundColor()} font-sans text-pale-blue px-4`}>
      <div className="flex justify-center items-center min-h-screen">
        <MetaData title={`Update Profile`} />
        <div
          className={`w-full max-w-md px-4 py-2 ${
            darkMode
              ? "bg-gradient-to-bl from-blue-950 to-cyan-700 via-stone-800"
              : "bg-gradient-to-tr from-blue-950 to-cyan-700 via-stone-800"
          } rounded-lg mb-2`}
        >
          <form
            className="w-full max-w-md px-4 py-2 space-y-4"
            onSubmit={submitHandler}
            encType="multipart/form-data"
          >
            <div className="bg-slate-900 p-2 shadow-lg shadow-blue-500 rounded mb-4 mt-4 hover:scale-105 duration-300 rotate-6">
              <h1 className=" mb-2 text-3xl font-bold md:text-3xl text-white-400 text-center">
                Update<span className="text-coral-red"> Password</span>
              </h1>
            </div>
            <div>
              <label
                htmlFor="old_password_field"
                className="block mb-1 font-medium"
              >
                Old Password
              </label>
              <input
                type="password"
                id="old_password_field"
                value={oldPassword}
                onChange={(e) => {
                  setOldPassword(e.target.value);
                }}
                className="mt-1 p-2 w-full bg-gray-300 text-stone-900 rounded border border-blue-950"
              />
            </div>
            <div>
              <label
                htmlFor="new_password_field"
                className="block mb-1 font-medium"
              >
                New Password
              </label>
              <input
                type="password"
                id="new_password_field"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="mt-1 p-2 w-full bg-gray-300 text-stone-900 rounded border border-blue-950"
              />
            </div>
            <button
              id="update_password"
              type="submit"
              className={`w-full mb-3 py-3 ${
                darkMode
                  ? "bg-gradient-to-tl from-lime-600 to-lime-800 via-black"
                  : "bg-gradient-to-bl from-slate-900 to-slate-900 via-black"
              } text-white font-bold rounded-lg hover:to-orange-500 hover:scale-105 duration-300 focus:outline-none`}
            >
              {loading ? "Password Updating" : "Update Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
