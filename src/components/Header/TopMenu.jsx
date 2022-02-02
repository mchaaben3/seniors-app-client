import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import SearchForFriend from "./searchForFriend";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChess,
  faHeartbeat,
  faSignOutAlt,
  faLayerGroup,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";

import { updateUserStatus } from "../../redux/actions/authActions";
import { useDispatch } from "react-redux";
import SideMenu from "./SideMenu";
import { useEffect } from "react";
import { useRef } from "react";
import Notification from "./Notification/Notification";
import { isAdminTrue, isLogin } from "../../utils";

// const TopMenu = ({ socket }) => {
  const TopMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setstate] = useState(false);
  
  const [notification, setNotification] = useState([]);
  const auth = isLogin();
  const isAdmin = isAdminTrue();

  const parseToken = (t) => {
    if (!t) {
      return;
    }
    const base64URL = t.split(".")[1];
    const base64 = base64URL.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (localStorage.getItem("authToken")) {
    const token = localStorage.getItem("authToken");
    var userConnected = parseToken(token).userId;
  }

  // useEffect(() => {
  //   socket?.on("getNotification", (data) => {
  //     setNotification((prev) => [...prev, data]);
  //   });
  // }, [socket]);

  const handleLogOut = () => {
    dispatch(updateUserStatus(userConnected, false));

    localStorage.clear();
    navigate("/landing");
  };

  const handleShowComment = () => {
    setstate(!state);
  };

  return (

      auth ? ( <nav className="topmenu bg-gray-900	 fixed  top-0 w-full mx-auto px-4 sm:px-6 lg:px-8  ">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-end h-20">
          <div className="flex items-center">
            <div className="hidden   lg:block">
              <div className="flex items-baseline space-x-4 ">
                <Link to="/">
                  <span className="menu-nav-bar mr-44 hover:opacity-75 ">
                    <i className="fa fa-home"></i>
                    <span className="ml-4">Home</span>
                  </span>
                </Link>
                <SearchForFriend />
                <Link to="/Events">
                  <span className="menu-nav-bar hover:opacity-75 ">
                    <i className="fa fa-calendar"></i>
                    <span className="ml-4">Events</span>
                  </span>
                </Link>
                <Link to="/Groups">
                  {" "}
                  <span className="menu-nav-bar hover:opacity-75 ">
                    <i className="fa fa-address-book"></i>
                    <span className="ml-4">Groups</span>
                  </span>
                </Link>
                <Link to="/health-care">
                  <span className="menu-nav-bar hover:opacity-75 ">
                    <FontAwesomeIcon icon={faHeartbeat} size="2x" />
                    <span className="ml-4 text-gray-200">Health</span>
                  </span>{" "}
                </Link>
                {isAdmin ? (   
                <Link to="/admin">
                  <span className="menu-nav-bar hover:opacity-75 ">
                    <FontAwesomeIcon icon={faUserShield} size="2x" />
                    <span className="ml-4 text-gray-200">Admin Dashbord</span>
                  </span>{" "}
                </Link>):(   
               <></>)}
            {" "}
                <Link to="/play-chess">
                  <span className="menu-nav-bar hover:opacity-75 ">
                    <FontAwesomeIcon icon={faChess} size="2x" />
                    <span className="ml-4 text-gray-200">Play Chess</span>
                  </span>
                </Link>
                <div className="relative">
                  {notification && notification.length > 0 ? (
                    <p className="absolute bg-red-600 justify-center rounded-full px-1 mr-4 text-white text-xs">
                      {notification.length}
                    </p>
                  ) : (
                    <></>
                  )}
                  <button
                    onClick={handleShowComment}
                    className="menu-nav-bar  hover:opacity-75 "
                  >
                    {" "}
                    <svg
                      className="h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                  </button>
                  
                  {state ? (
                    <div className="absolute  right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20 w-48">
                      <div className="py-2 ">
                        {notification.map((u, index) => (
                         <Notification notifications={u} idx={index} />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <span
                  onClick={handleLogOut}
                  className="menu-nav-bar hover:opacity-75 "
                >
                  <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
                  <span className="ml-4 text-gray-200 text-sm">LOG OUT</span>
                </span>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {() => (
          <div className="lg:hidden z-1">
            <SideMenu userConnected={userConnected} />
          </div>
        )}
      </Transition>
    </nav>):(<></>)

   
  );
};

export default TopMenu;
