import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearAuthError, register } from "../../actions/userActions";
import { toast } from "react-toastify";
import MetaData from "../../sections/MetaData";
const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(
    "/images/default_avatar.png"
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.authState
  );
  const darkMode = useSelector((state) => state.darkmode);

  const onChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(e.target.files[0]);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    formData.append("avatar", avatar);
    dispatch(register(formData));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
      return;
    }
    if (error) {
      toast.error(error, {
        position: toast.POSITION.BOTTOM_CENTER,
        onOpen: () => {
          dispatch(clearAuthError);
        },
      });
    }
  }, [error, isAuthenticated, dispatch, navigate]);
  return (
    <div
      className={`relative flex justify-center items-center h-screen px-4 overflow-hidden ${
        darkMode ? "bg-gray-300" : "bg-slate-950"
      }`}
    >
      <div
        className={`w-full max-w-md px-8 py-10 rounded-lg shadow-lg bg-slate-900  shadow-blue-700 ${
          darkMode ? "border border-gray-700" : "border border-gray-200"
        }`}
      >
        <MetaData title={`Register `} />
        <div className="bg-slate-900 p-2 shadow-lg shadow-blue-500 rounded mb-4 hover:scale-105 duration-300 rotate-6">
          <h2 className=" mb-2 text-3xl font-bold md:text-3xl text-white-400 text-center">
            Create <span className="text-coral-red">Account</span>
          </h2>
        </div>
        <form onSubmit={submitHandler} encType="multipart/form-data">
          <div className="mb-4">
            <label
              htmlFor="name_field"
              className="block mb-2 text-sm font-semibold text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name_field"
              onChange={onChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email_field"
              className="block mb-2 text-sm font-semibold text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email_field"
              onChange={onChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label
              htmlFor="password_field"
              className="block mb-2 text-sm font-semibold text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password_field"
              onChange={onChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="flex items-center mt-4 mb-4 space-x-4">
            <div className="flex-shrink-0">
              <img
                className="h-16 w-16 rounded-full object-cover"
                src={avatarPreview}
                alt="Avatar"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="avatar_upload"
                className="block text-sm text-white-400 font-medium mb-1"
              >
                Avatar
              </label>
              <input
                type="file"
                name="avatar"
                onChange={onChange}
                className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                id="customFile"
              />
            </div>
          </div>
          <button
            type="submit"
            className={`w-full py-3 rounded-lg text-white font-bold ${
              darkMode
                ? "bg-gradient-to-r from-slate-700 to-blue-500 hover:to-lime-700"
                : "bg-gradient-to-r from-slate-700 to-blue-500 hover:to-lime-700"
            } hover:opacity-90 focus:outline-none focus:ring-4 hover:scale-105 duration-200
            }`}
            disabled={loading}
          >
            {loading ? "Registering..." : "REGISTER"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
