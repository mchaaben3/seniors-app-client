import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePostAction,
  getAllLikes,
  likePost,
} from "../../redux/actions/postsAction";
import LikesAndComments from "./LikesAndComments";

const Posts = ({
  userConnected,
  comments,
  Likes,
  id,
  user,
  post_title,
  post_description,
  post_url,
  numberOfLikes,
  createdAt,
  socket,
}) => {
  const [show, setShow] = useState(false);

  const [userId, setUserId] = useState("");
  const [hidden, setHidden] = useState("hidden");
  const dispatch = useDispatch();
  const [showModal, setShowModal] = React.useState(false);

  const handleShowComments = () => {
    setShow(!show);
  };

  const handleDelete = (info) => {
    dispatch(deletePostAction(info));
  };
  ////////////Function to dispatch the ID FROM the Token//////////////////////////////////
  const parseToken = (t) => {
    if (!t) {
      return;
    }
    const base64URL = t.split(".")[1];
    const base64 = base64URL.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  };
  const token = localStorage.getItem("authToken");
  const isBlocked = parseToken(token).isBlocked;
  useEffect(() => {
    setUserId(parseToken(token).userId);
  }, [token]);

  ////////// ////////////////////////////// /////

  // =========================================
  return (
    <div className="grid grid-cols-1 gap-6 my-6 px-4 bg-white border border-black border-2 lg:mx-20 md:px-6 lg:px-8">
      <div className="h-full w-full  ">
        <div className="py-2 px-2">
          <div className="flex justify-between items-center py-2">
            <div className="relative mt-1 flex">
              <div className="mr-2">
                <img
                  src={ user.profilePicture
                    ? user.profilePicture
                    : user.gender === "female"
                    ? "https://res.cloudinary.com/dp81gikbd/image/upload/v1643798806/female_ffenti.png"
                    : "https://res.cloudinary.com/dp81gikbd/image/upload/v1643798807/male_er9asw.png"}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <div className="ml-3 flex justify-start flex-col items-start">
                <p className="text-gray-900 text-sm">{user.full_name}</p>
                <p className="text-gray-600 text-xs">
                  {createdAt.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="relative mt-1 flex">
              {isBlocked === true ? (
                <></>
              ) : userId === user._id ? (
                <>
                  <button
                    className="relative p-2 focus:outline-none border-none bg-gray-100 rounded-full"
                    onClick={() =>
                      hidden == "block"
                        ? setHidden("hidden")
                        : setHidden("block")
                    }
                  >
                    <i className="fa fa-ellipsis-v" />
                  </button>

                  <div
                    className={
                      hidden +
                      " absolute  right-0 mt-8 py-2 w-48 bg-white rounded-md shadow-sm z-20"
                    }
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
                      onClick={() => handleDelete(id)}
                    >
                      {" "}
                      Delete{" "}
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
                    >
                      {" "}
                      Update{" "}
                    </a>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className="relative w-full h-full">
          <h5 className="mx-2 font-black">{post_title} </h5>
          <p className="mx-4">{post_description} </p>
          {post_url ? (
            <img src={post_url} className="rounded-sm w-full h-3/2 " />
          ) : (
            <></>
          )}
          {isBlocked == true ? (
            <></>
          ) : (
            <>
              <LikesAndComments
                socket={socket}
                comments={comments}
                Likes={Likes}
                userConnected={userConnected}
                numberOfLikes={numberOfLikes}
                id={id}
                userId={user._id}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Posts;
