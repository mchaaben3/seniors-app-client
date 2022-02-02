import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  BeatLoader } from "react-spinners";
import { getPosts, createPostAction } from "../../redux/actions/postsAction";
import Paginate from "./Paginate";
import PostBox from "./PostBox";
import Posts from "./Posts";

const PostsContainer = ({ id, userConnected, socket }) => {
  const [postBody] = useState("");
  const [postTitle] = useState("");
  const [post_url, setpost_url] = useState("");
  const [ setImage] = useState();
  let [color] = useState("#75E6DA");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);

  const onChange = (e) => {
    const post_url = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(post_url);
    reader.onloadend = () => {
      setImage(reader.result);
      setpost_url(reader.result);
    };
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (postTitle.length === 0 || postBody.length === 0) {
      alert("please complete your post");
      return;
    }

    const post_title = postTitle;
    const post_description = postBody;
    dispatch(createPostAction({ post_url, post_title, post_description }));
  };

  ///////////get posts dispatch ////////////////
  const dispatch = useDispatch();
  const displayAllPosts = useSelector((state) => state.getAllPosts);

  useEffect(() => {
    if (id) {
      dispatch(getPosts(id));
    } else {
      dispatch(getPosts());
    }
  }, [id]);

  ////////// ////////////////////////////// /////
  // =======================================
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

  //GET CURRENT POST

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts =
    displayAllPosts.allPosts &&
    displayAllPosts.allPosts.slice(indexOfFirstPost, indexOfLastPost);

  const pagination = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      {isBlocked === true ? <></> : <PostBox handleSubmit={handleSubmit} />}

      {currentPosts.length === 0 ? (
        <div className="grid grid-cols-1 gap-6 my-6  ml-96">
          <BeatLoader color={color} loading />{" "}
        </div>
      ) : (
        currentPosts.map((u, index) => (
          <Posts
            Likes={u.likes}
            comments={u.comments}
            userConnected={userConnected}
            key={index}
            id={u._id}
            user={u.user}
            post_title={u.post_title}
            post_description={u.post_description}
            post_url={u.post_url}
            userId={u.owner}
            numberOfLikes={u.numberOfLikes}
            createdAt={u.createdAt}
            socket={socket}
          />
        ))
      )}
      <Paginate
        pagination={pagination}
        postsPerPage={postsPerPage}
        totalPosts={displayAllPosts.allPosts.length}
      />
    </>
  );
};

export default PostsContainer;
