import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deletePostAction } from "../../redux/actions/postsAction";
import Sidebar from "./Sidebar";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deletePostAction(id));
  };
  useEffect(() => {
    axios
      .get(
        `
        https://seniors-app.herokuapp.com/api/timeline`
      )
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="min-h-screen flex flex-col flex-auto mt-18 flex-shrink-0 antialiased bg-gray-200  text-black ">
      <center>
        <h1 className="text-6xl mt-14">ADMIN DASHBOARB</h1>
      </center>
      <Sidebar />

      <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
        <div class="grid grid-cols-4  sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
          {posts.map((element) => (
            <div class="max-w-sm rounded bg-white p-1 overflow-hidden shadow-sm relative">
              <div className=" mt-2 flex">
                <div className="mr-2">
                  <img
                    src={ element.user.profilePicture
                      ? element.user.profilePicture
                      : element.user.gender === "female"
                      ? "https://res.cloudinary.com/dp81gikbd/image/upload/v1643798806/female_ffenti.png"
                      : "https://res.cloudinary.com/dp81gikbd/image/upload/v1643798807/male_er9asw.png"}
                    alt="saman sayyar"
                    className="w-4 h-4 rounded-full object-cover"
                  />
                </div>
                <div className="ml-3 flex justify-start flex-col items-start">
                  <p className="text-gray-900 text-sm">
                    {element.user.full_name}
                  </p>
                  <p className="text-gray-600 text-xs">
                    {element.createdAt.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="absolute right-0 top-0 mr-2 mt-2 text-red flex">
                <i
                  className="fa fa-trash-o  text-red-600 cursor-pointer"
                  onClick={() => handleDelete(element._id)}
                ></i>
              </div>
              <div class="font-bold text-xl mb-2 p-2">{element.post_title}</div>

              {element.post_url ? (
                <>
                  {" "}
                  <img class="w-full h-44" src={element.post_url} alt="" />
                  <div class="px-6 py-4">
                    {element.post_description.length > 50 ? (
                      <p class="text-gray-700 text-base">
                        {element.post_description.substring(
                          0,
                          Math.min(150, element.post_description.length)
                        )}{" "}
                      </p>
                    ) : (
                      <p class="text-gray-700 text-base">
                        {element.post_description}
                      </p>
                    )}
                  </div>
                </>
              ) : (
                <div class="">
                  {element.post_description.length > 150 ? (
                    <p class="text-gray-700 text-base">
                      {element.post_description.substring(
                        0,
                        Math.min(500, element.post_description.length)
                      )}{" "}
                    </p>
                  ) : (
                    <p class="text-gray-700 text-base mb-10">
                      {element.post_description}
                    </p>
                  )}
                </div>
              )}
              <p class="text-gray-600 absolute bottom-0 text-base cursor-pointer ">
                Show comments
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
