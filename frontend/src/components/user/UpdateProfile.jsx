import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GetBackgroundColor from "../layout/GetBackgroundColor";
import MetaData from "../../sections/MetaData";
import { clearAuthError, updateProfile } from "../../actions/userActions";
import { toast } from "react-toastify";
import { clearUpdateProfile } from "../../slices/authSlice";

const UpdateProfile = () => {
  const { loading, error, user, isUpdated } = useSelector(
    (state) => state.authState
  );
  const darkMode = useSelector((state) => state.darkmode);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(
    "/images/default_avatar.png"
  );
  const dispatch = useDispatch();
  const [change, setChange] = useState(false);

  const onChangeAvatar = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(e.target.files[0]);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    setChange(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("avatar", avatar);
    dispatch(updateProfile(formData));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value !== user[name]) {
      setChange(true);
    } else {
      setChange(false);
    }
  };
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      if (user.avatar) {
        setAvatarPreview(user.avatar);
      }
    }
    if (isUpdated) {
      toast("Profile Updated Successfully", {
        type: "success",
        position: toast.POSITION.BOTTOM_CENTER,
        onChange: () => dispatch(clearUpdateProfile()),
      });
      setChange(false);
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
  }, [user, isUpdated, error, dispatch]);

  return (
    <div className={`${GetBackgroundColor()} font-sans text-pale-blue px-4`}>
      <div className="flex justify-center items-center min-h-screen ">
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
                Update<span className="text-coral-red"> Profile</span>
              </h1>
            </div>
            <div>
              <label htmlFor="name_field" className="block mb-1 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name_field"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  handleInputChange(e);
                }}
                className="mt-1 p-2 w-full bg-gray-300 text-stone-900 rounded border border-blue-950"
              />
            </div>

            <div>
              <label htmlFor="email_field" className="block mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email_field"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  handleInputChange(e);
                }}
                className="mt-1 p-2 w-full bg-gray-300 text-stone-900 rounded border border-blue-950"
              />
            </div>

            <div className="flex items-center">
              <div className="w-16 h-14 space-x-10">
                <figure className="avatar">
                  <img
                    src={avatarPreview}
                    className="rounded-lg w-12 h-12"
                    alt="Avatar Preview"
                  />
                </figure>
              </div>
              <div className="w-full flex flex-col flex-1">
                <div className="flex justify-start px-4">
                  <label htmlFor="avatar_upload" className="block font-medium">
                    Avatar
                  </label>
                </div>

                <div className="px-4 flex items-center">
                  <input
                    type="file"
                    name="avatar"
                    id="customFile"
                    onChange={onChangeAvatar}
                    className="hidden"
                  />
                  <label
                    htmlFor="customFile"
                    className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg text-center cursor-pointer"
                  >
                    Choose Avatar
                  </label>
                  <span className="text-sm text-gray-400 ml-2 mt-2">
                    Max file size: 2MB
                  </span>
                </div>
              </div>
            </div>
            <button
              id="login_button"
              type="submit"
              className={`w-full mb-3 py-3 ${
                darkMode
                  ? "bg-gradient-to-tl from-slate-600 to-blue-800 via-blue-950"
                  : "bg-gradient-to-bl from-gray-300 to-red-500 via-indigo-950"
              } text-white font-bold rounded-lg hover:to-blue-500 hover:scale-105 duration-300 focus:outline-none`}
              disabled={!change || loading}
            >
              {loading ? "Updating..." : "UPDATE"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
