import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="fixed flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-gray-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
          <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
            <ul className="flex flex-col py-4 space-y-1">
              <li className="px-5 hidden md:block">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Main</div>
                </div>
              </li>
             <Link to="/admin"> <li>
                <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-500 dark:hover:border-gray-800 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                        <i className="fa fa-users" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">Users</span>
                </a>
              </li></Link>
          <Link to='/admin/posts'>
          <li>
                <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-500 dark:hover:border-gray-800 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                        <i className="fa fa-edit" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">Posts</span>
               
                </a>
              </li>
            </Link>   
             <Link to="/admin/events">
             <li>
                <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-500 dark:hover:border-gray-800 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <i class="fa fa-calendar-o" aria-hidden="true"></i>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">Events</span>
                </a>
              </li>
             </Link>
              <li>
                <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-500 dark:hover:border-gray-800 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                         <i class="fa fa-comments-o" aria-hidden="true"></i>                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">Notifications</span>
                </a>
              </li>
            
            </ul>
            <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright @2021</p>
          </div>
        </div>
    )
}

export default Sidebar
