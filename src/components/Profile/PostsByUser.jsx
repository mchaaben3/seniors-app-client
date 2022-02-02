import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificBlackListMember } from "../../redux/actions/blackListActions";
import { deletePostAction, getAllLikes, likePost } from "../../redux/actions/postsAction";
import LikesAndComments from "../Posts/LikesAndComments";

const PostsByUser = ({
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

  useEffect(() => {
    setUserId(parseToken(token).userId);
  }, [token]);

  ////////// ////////////////////////////// /////
  useEffect(() => {
    dispatch(getSpecificBlackListMember(userConnected));
  }, []);
  // =========================================
  const BlacklistState = useSelector(
    (state) => state.getSpecificBlackListMember
  );
  // =========================================
  return (
    <div className="grid grid-cols-1 gap-6 my-6 px-4 bg-white lg:mx-20 md:px-6 lg:px-8">

      <div className="h-full w-full relative ">

        <div className="py-2 px-2">

          <div className="flex justify-between items-center py-2">
            <div className="relative mt-1 flex">
              <div className="mr-2">
                <img
                  src={user.profilePicture}
                  alt="saman sayyar"
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
            {userId === user._id ? (
              <>
                <button
                  className="relative p-2 focus:outline-none border-none bg-gray-100 rounded-full"
                  onClick={() =>
                    hidden == "block" ? setHidden("hidden") : setHidden("block")
                  }
                >
                  <i className="fa fa-ellipsis-v" />
                </button>

                <div
                  className={
                    hidden +
                    " absolute  right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-sm z-20"
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

        <div className="relative w-full h-full">
          <h5 className="mx-2 font-black">{post_title} </h5>
          <p className="mx-4">{post_description} </p>
          {post_url ? (
            <img
              src={post_url}
              alt="saman"
              className="rounded-sm w-96 h-3/2 "
            />
          ) : (
            <></>
          )}
          {BlacklistState && BlacklistState.result ? (
            <></>
          ) : (
            <>
              <LikesAndComments comments={comments} Likes={Likes} userConnected={userConnected} numberOfLikes={numberOfLikes}  id={id} />
            </>
          )}
        </div>
      </div>

    </div>
  );
};

export default PostsByUser;
