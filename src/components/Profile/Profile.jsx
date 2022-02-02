import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router";
import AsideListOfUsers from "../Users/AsideListOfUsers";
import PostsContainer from "../Posts/PostsContainer";
import GroupContainer from "../Groups/GroupContainer";
import EventContainer from "../Events/EventContainer";

import CoverPicture from "./CoverPicture";
import ProfileName from "./ProfileName";
import ProfilePicture from "./ProfilePicture";

const Profile = () => {
  const [userConnected, setUser] = useState({});
  const [hidden, sethidden] = useState(true)
  const {id} = useParams()
  if(id) {
    console.log(id);
    
  }
      useEffect(() => {
        const fetchUser = async () => {
          try{
          const res = await axios.get(`https://seniors-app.herokuapp.com/api/users/`+id);
          setUser(res.data);
        }catch(error){
          console.log(error)
        }
        };
        fetchUser();
       
      }, []);
    
  return (
    <>
      <section className="relative top-0  w-full">
        <CoverPicture userConnected={userConnected} />
        <div className=" lg:flex  lg:h-16 -mt-28  lg:mt-8">
          <ProfilePicture userConnected={userConnected} />
          <ProfileName userConnected={userConnected} />
        </div>
      </section>
      {/* Profile Container */}
      <section className=" flex flex-row justify-center content-center  ">

        <div className="flex  w-5/12  flex-col  mt-4 lg:mt-2">
          <PostsContainer id={id} userConnected={userConnected} />
        </div>
      
      </section>
    </>
  );
};

export default Profile;
