import { faAddressBook, faBookmark, faCalendar, faCalendarAlt, faHeartbeat, faHome, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AsideListOfUsers from "../Users/AsideListOfUsers";

const SideMenu = ({ userConnected }) => {
  const [profilePic, setProfilePic] = useState("");
  useEffect(() => {
    userConnected.gender =='female'? setProfilePic("https://res.cloudinary.com/dp81gikbd/image/upload/v1643798806/female_ffenti.png"):setProfilePic("https://res.cloudinary.com/dp81gikbd/image/upload/v1643798807/male_er9asw.png")
  }, [userConnected]);
  
  return (
    <>
      <div className="flex flex-col min-h-screen  bg-white shadow-xl ring-1 ring-gray-900/5">
        <div className="flex-shrink-0 px-2 bg-gray-900 py-1 flex flex-col items-center">
        <Link  to={`/profile/${userConnected._id}`}>
          <img
            className="h-36 w-36 shadow-lg rounded-full bg-gray-900 "
            src={
              userConnected.profilePicture
              ? userConnected.profilePicture
              : userConnected.gender ==="" ? "https://res.cloudinary.com/dp81gikbd/image/upload/v1643894684/anonyme_v2cws7.png":profilePic
            }
          /></Link>
          <div className="pt-1 border-t mt-4 w-full text-center text-xl text-gray-100">
            {userConnected.full_name}
          </div>

          <div className="pt-1 border-t mt-2 w-full text-center text-sm text-gray-100">
            {userConnected.job ? userConnected.job : "no Job"}
          </div>
        </div>
        <div className="flex flex-col w-full md:w-64 text-gray-700 bg-white flex-shrink-0">
          <nav className="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
        
            <a
              className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg  hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
            >
       <FontAwesomeIcon icon={faHome} className="mr-4" size="1x" />
              Home
            </a>
            <a
                         className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg  hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"

              href="#"
            >
                 <FontAwesomeIcon icon={faCalendarAlt} className="mr-4" size="1x" />
              Events
            </a>
            <a
              className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg  hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
            >
              <FontAwesomeIcon icon={faAddressBook} className="mr-4" size="1x" />
              Groups
            </a>
            <a
              className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg  hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
            >
                 <FontAwesomeIcon icon={faHeartbeat} className="mr-4" size="1x" />
              Health
            </a>
            <a
              className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg  hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
            >
                 <FontAwesomeIcon icon={faSignOutAlt} className="mr-4" size="1x" />
              Log out
            </a>
          </nav>
        </div>
        <div className="flex-shrink-0 px-2 py-1 lg:hidden">
          <AsideListOfUsers />
        </div>
      </div>
    </>
  );
};

export default SideMenu;
