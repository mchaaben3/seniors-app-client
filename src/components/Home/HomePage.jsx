import axios from "axios";
import React, { useEffect, useState } from "react";

import SideMenu from "../Header/SideMenu";

import AsideListOfUsers from "../Users/AsideListOfUsers";
import PostsContainer from "../Posts/PostsContainer";
import GroupContainer from "../Groups/GroupContainer";

const HomePage = ({ socket }) => {
  const [userConnected, setUser] = useState({});
  const [hidden, sethidden] = useState(true);
 
  useEffect(() => {
    const fetchUser = async () => {
      try {
        axios.defaults.headers.common["authToken"] =
          localStorage.getItem("authToken");

        const res = await axios.get(`https://seniors-app.herokuapp.com/api/users/`);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);
  return (
    <>
      {/* {userConnected  ? (
        <>

          {" "}

          <Link to={`/profile/${userConnected._id}`}>

            <img
              src={userConnected.profilePicture?userConnected.profilePicture:''}
              alt="img"
              title="img"
              className="rounded-full mt-28  h-20 w-20 object-cover"
              id="whoobe-7jr8o"
            />

             <h1 className="text-3xl mt-28 font-semibold text-gray-800 md:text-4xl">
              Welcome Mr: &nbsp;{userConnected.full_name}
            </h1>
          </Link>
        </>
      ) : (
        ""
      )} */}

      <section className=" mt-20  lg:flex-row lg:flex  justify-between ">
     
            <SideMenu userConnected={userConnected} />
  
      
        <div className="flex  flex-col  lg:mx-auto mt-2  w-full  lg:w-1/2  lg:mt-2 px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5">
          <PostsContainer userConnected={userConnected} socket={socket} />
        </div>
       
           <div className="hidden lg:block"><AsideListOfUsers /></div> 
        
      </section>
    
    </>
  );
};

export default HomePage;
