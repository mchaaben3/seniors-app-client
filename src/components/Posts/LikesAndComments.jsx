import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import {
  getAllLikes,
  getPosts,
  get_all_comments,
  likePost,
  post_comment,
  unlikePost,
} from "../../redux/actions/postsAction";
import Comments from "./Comments";

const LikesAndComments = ({socket, id, comments, Likes, userConnected, userId }) => {
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [nbLikes, setnbLikes] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    Likes && Likes.find((e) => e._id == userConnected._id) && setLiked(true);
    Likes && setnbLikes(Likes.length);
  }, [Likes]);

  useEffect(() => {
  

    socket.emit("addUser", userConnected._id);
    socket.on("getUsers", (users) => {
      console.log(users);
    });

   
  }, []);

  // =======================================================
  const handleLiked = () => {
    setnbLikes(nbLikes + 1);
    setLiked(true);
    dispatch(likePost(id));
    if (userId != userConnected._id) {
      socket.emit("sendnotification", {
        id: id,
        sender: userConnected._id,
        reciever: userId,
        message:"like your post"
      });
    }
  };

  const handleUnliked = () => {
    setnbLikes(nbLikes - 1);

    dispatch(unlikePost(id));
    setLiked(false);
  };

  // ========================================
  const handle_Add_Comment = async (e) => {
    e.preventDefault();

    await dispatch(post_comment(id, comment));
    // =======
    if (userId != userConnected._id) {
      socket.emit("sendnotification", {
        id: id,
        sender: userConnected._id,
        reciever: userId,
        message:"comment your post"
      });
    }
    //=========
    setComment("");
  };

  return (
    <>
      <div className="flex justify-between items-start p-2 mt-4 ">
        <div className="flex space-x-2 items-center">
          {liked == true ? (
            <>
              {" "}
              <p className="heart">
                <i
                  className="fa fa-heart fa-4x fa-beat "
                  onClick={handleUnliked}
                ></i>
              </p>
              <p>
                {nbLikes == 0
                  ? ""
                  : nbLikes == 1
                  ? nbLikes + ` Like`
                  : nbLikes + ` Likes `}
              </p>
            </>
          ) : (
            <>
              {" "}
              <i className="fa fa-heart-o" onClick={handleLiked}></i>{" "}
              <p>
                {nbLikes == 0
                  ? ""
                  : nbLikes == 1
                  ? nbLikes + ` Like`
                  : nbLikes + ` Likes `}
              </p>
            </>
          )}
       
            <i className="fa fa-comment-o text-3xl" aria-hidden="true"></i> &nbsp; {comments && comments.length } comments
          
        </div>
      </div>
      <div className=" w-full  ">
        <div className="p-2 mb-2">
          {comments &&
            comments.map((e) => (
              <Comments key={e._id} commentbody={e.commentbody} user={e.user} />
            ))}
        </div>
      </div>

      <div className="top-8 bg-white">
        <form>
          <div className="flex justify-between border-t items-center w-full">
            <div className="w-full">
              <input
                type="text"
                name="comment"
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add A Comment..."
                className="w-full text-sm py-4 px-3 rounded-none focus:outline-none"
              />
            </div>
            <div className="w-20">
              <button
                onClick={handle_Add_Comment}
                className="border-none text-sm px-4 bg-white py-4 text-indigo-600 focus:outline-none"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LikesAndComments;
