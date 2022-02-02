import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import { createPostAction, getPosts } from "../../redux/actions/postsAction";
const PostBox = () => {
  const [postBody, setpostBody] = useState("");
  const [postTitle, setPostTitle] = useState("");
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
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();


    const post_title = postTitle;
    const post_description = postBody;
    await dispatch(
      createPostAction({ post_url, post_title, post_description })
    );
    await dispatch(getPosts());
    setPostTitle("");
    setpostBody("");
    setpost_url("");
  };
  return (
    <div className="bg-white mx-auto w-full lg:w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4  max-w-2xl">
      <input
        value={postTitle}
        onChange={(e) => {
          setPostTitle(e.target.value);
        }}
        className="title bg-gray-100 text-gray-900 border border-gray-300 p-2 mb-4 outline-none"
        placeholder="Title"
        type="text"
      />
      <textarea
        value={postBody}
        onChange={(e) => setpostBody(e.target.value)}
        id=""
        className="description bg-gray-100 text-gray-900 sec p-3 h-20 border border-gray-300 outline-none"
        placeholder="Describe everything about this post here"
      ></textarea>

      <div className="icons flex text-gray-500 m-2">
        <form>
          <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            />
          </svg>
          <label className="fileContainer">
            <input type="file" onChange={onChange} />
          </label>
          {image && (
            <img src={image} alt="The current file" className="w-1/2 h-1/2" />
          )}
        </form>
      </div>
      <div className="buttons flex">
        <input
          type="reset"
          value="Cancel"
          className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
        />
        <button
          onClick={handleSubmit}
          className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default PostBox;
