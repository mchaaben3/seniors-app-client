import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateUserStatus } from "../../redux/actions/authActions";
import { getUsers } from "../../redux/actions/usersActions";

const AsideListOfUsers = () => {
  const [searchBar, setSearchBar] = useState({
    value: "",
  });
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
  const displayAllUsers = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const handleChange = (e) => {
    setSearchBar({ value: e.target.value });
  };
  const t = 0;
  // ==========================================================================================================================================
  const parseToken = (t) => {
    if (!t) {
      return;
    }
    const base64URL = t.split(".")[1];
    const base64 = base64URL.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  };
  const token = localStorage.getItem("authToken");
  const userConnected = parseToken(token).userId;

  useEffect(() => {
    dispatch(updateUserStatus(userConnected, true));
  }, []);

  return (
    <div className="flex flex-col h-full w-60  border-black lg:border-l   border-r-0 border-t-0 bg-white">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Search a user"
        className="p-2  h-10  mb-2 text-gray-100  mt-4 w-full bg-gray-900 rounded-lg  w-full mouse shadow transition ease-in duration-200 focus:outline-none"
      />

      <ul className="">
        {displayAllUsers.users
          .filter((obj) =>
            obj.full_name.toLowerCase().includes(searchBar.value.toLowerCase())
          )
          .map((u) => (
            <Link key={u._id} to={`/profile/${u._id}`}>
              <li className="flex mb-4 items-center cursor-pointer  px-2 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                <div className="relative">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      Number(u.status) > t ? `bg-green-500` : `bg-red-500`
                    }  absolute bottom-0 left-6`}
                  ></div>
                  <img
                    src={
                      u.profilePicture
                        ? u.profilePicture
                        : u.gender === "male"
                        ?  "https://res.cloudinary.com/dp81gikbd/image/upload/v1643798807/male_er9asw.png"
                        :"https://res.cloudinary.com/dp81gikbd/image/upload/v1643798806/female_ffenti.png"
                    }
                    alt="avatar"
                    className="object-cover w-10 h-10 mx-4 rounded-full"
                  />
                </div>
                {u.full_name}
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default AsideListOfUsers;
