import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GetBackgroundColor from "../layout/GetBackgroundColor";

export default function Profile() {
  const { user } = useSelector((state) => state.authState);

  return (
    <div
      className={`${GetBackgroundColor()} font-sans min-h-screen px-4 py-8 flex flex-col items-center justify-center`}
    >
      <div
        className={`w-full max-w-md bg-teal rounded-lg shadow-xl shadow-teal-500  overflow-hidden`}
      >
        <div className="flex items-center justify-center py-4 px-6">
          {user.avatar ? (
            <img
              className="rounded-full w-44 h-44 object-fit-cover border border-gray-300 "
              src={user.avatar || "/images/default_avatar.png"}
              alt="Profile Pick"
            />
          ) : (
            <div className="rounded-full w-24 h-24 bg-gray-300  flex items-center justify-center text-xl text-gray-500 "></div>
          )}
        </div>

        <div className="px-6 py-4 space-y-4 ">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-2 ">
              <span className="text-white-400">{user.name}</span>
            </h1>
          </div>

          <div className="flex items-center space-x-2">
            <p className="text-gray-200 text-md font-semibold">{user.email}</p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-gray-200 text-md">
              Joined:{" "}
              <span className="text-slate-950 font-bold">
                {String(user.createdAt).substring(0, 10)}
              </span>
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center text-sm text-center py-4 px-6  space-x-4">
          <Link
            to="/myprofile/update"
            className="bg-gradient-to-tl from-yellow-500 to-yellow-700 via-teal-950 text-white hover:to-orange-500 px-4 py-2 rounded block font-bold hover:scale-110 duration-500 hover:no-underline"
          >
            Edit Profile
          </Link>
          <Link
            to="/myprofile/update/password"
            className="bg-gradient-to-bl from-lime-500 to-lime-700 via-teal-950 text-white hover:to-orange-500 py-2 px-4 rounded block font-bold  hover:scale-110 duration-500 hover:no-underline"
          >
            Change Password
          </Link>
          <Link
            to="/orders"
            className="bg-gradient-to-br from-rose-500 to-rose-700 via-teal-950 text-white hover:to-orange-500 py-2 px-3 md:px-4 rounded block font-bold hover:scale-110 duration-500 hover:no-underline"
          >
            Booking List
          </Link>
        </div>
      </div>
    </div>
  );
}
