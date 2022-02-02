import React from "react";

const SideMenu = () => {
  return (
    <div className="flex flex-col w-full bg-white   overflow-hidden sm:hidden md:hidden">
      <ul className="flex flex-col py-4">
        <li>
          {" "}
          <img
            src="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528"
            className="w-20 rounded-full ml-10"
          />
          <li></li>
          <a
            href="#"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <i className="fa fa-home"></i>
            </span>
            <span className=" text-lg font-medium">Dashboard</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <i className="fa fa-address-book-o"></i>
            </span>
            <span className=" text-lg font-medium">Groups</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <i className="fa fa-calendar-o"></i>
            </span>
            <span className=" text-lg font-medium">Events</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <i className="fa fa-comments-o"></i>
            </span>
            <span className="text-lg font-medium">Messenger</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <i className="fa fa-bell-o"></i>
            </span>
            <span className=" text-lg font-medium">Notification</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
