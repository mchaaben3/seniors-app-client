import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AsideListOfUsers from "../Users/AsideListOfUsers";
import PostsContainer from "../Posts/PostsContainer";
import GroupContainer from "../Groups/GroupContainer";
import EventContainer from "../Events/EventContainer";

import CoverPicture from "./CoverPicture";
import ProfileName from "./ProfileName";
import ProfilePicture from "./ProfilePicture";
import EditProfile from "./EditProfile";

const Profile = ({ socket }) => {
  const [userConnected, setUser] = useState({});
  const [hidden, sethidden] = useState(true);
  const { id } = useParams();
  if (id) {
    console.log(id);
  }
  const [post_url, setpost_url] = useState("");
  const [image, setImage] = useState();
  const onChange = (e) => {
    const post_url = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(post_url);
    reader.onloadend = () => {
      setImage(reader.result);
      setpost_url(reader.result);
    };
  };

  const style = {
    backgroundImage: `url('https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')`,
    backgroundRepeat: " no-repat",
    backgroundSize: "cover",
    backgroundBlendMode: "multiply",
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `https://seniors-app.herokuapp.com/api/users/` + id
        );
        setUser(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <div class="w-screen h-screen bg-white flex flex-row flex-wrap p-3 mt-16">
        <div class="w-full">
          <div
            class="rounded-lg shadow-lg bg-gray-600 w-full flex flex-col flex-wrap p-3 "
            style={style}
          >
            <div class="md:w-1/6 w-full">
              <img
                class="rounded-full  shadow-lg antialiased"
                src={
                  image
                    ? image
                    : userConnected.profilePicture
                    ? userConnected.profilePicture
                    : userConnected.gender === ""
                    ? "https://res.cloudinary.com/dp81gikbd/image/upload/v1643894684/anonyme_v2cws7.png"
                    : userConnected.gender == "female"
                    ? "https://res.cloudinary.com/dp81gikbd/image/upload/v1643798806/female_ffenti.png"
                    : "https://res.cloudinary.com/dp81gikbd/image/upload/v1643798807/male_er9asw.png"
                }
              />
              <div class="md:w-full w-full px-3 flex flex-row flex-wrap">
                <div class="w-full text-left text-gray-700 font-semibold relative pt-3 md:pt-0">
                  <div class="text-3xl text-white ">
                    {userConnected.full_name
                      ? userConnected.full_name
                      : "NO Name"}
                  </div>
                  <div class="text-normal text-gray-300 hover:text-gray-400 cursor-pointer">
                    <span class="border-b border-dashed border-gray-500 pb-1">
                      {userConnected.isAdmin == "true" ? "Administrator" : ""}
                    </span>
                  </div>
                </div>
             
              </div>
            </div>
          </div>
       
        </div>
     <div className="flex flex-row w-full">
     <div class=" w-1/3">
         <EditProfile userConnected={userConnected}  />
          </div>
          <div class="w-full ml-2 px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 ">
            <PostsContainer
              id={id}
              userConnected={userConnected}
              socket={socket}
            />
          </div>
     </div>
      </div>
      
      {/* <section className="relative top-0  w-full">
        <CoverPicture userConnected={userConnected} />
        <div className=" lg:flex  lg:h-16 -mt-28  lg:mt-8">
          <ProfilePicture userConnected={userConnected} />
          <ProfileName userConnected={userConnected} />
        </div>
      </section>
      <section className=" flex flex-row justify-center content-center  ">
        <div className="flex  w-5/12  flex-col  mt-4 lg:mt-2">
          <PostsContainer
            id={id}
            userConnected={userConnected}
            socket={socket}
          />
        </div>
      </section> */}
    </>
  );
};

export default Profile;
