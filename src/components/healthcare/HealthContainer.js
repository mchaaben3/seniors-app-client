import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BarLoader } from "react-spinners";
import {
  addArticle,
  GET_ALL_ARTICLES,
} from "../../redux/actions/healthActions";
import Health from "./Health";
import { isAdminTrue } from "../../utils";

const HealthContainer = () => {
  const [articleTitle, setarticleTitle] = useState("");
  const [article, setArticle] = useState("");
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
  const isAdmin = isAdminTrue();
  const ALL_ARTICLES = useSelector((state) => state.getArticles);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GET_ALL_ARTICLES());
  }, [dispatch]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(addArticle({ post_url, articleTitle, article }));
    await dispatch(GET_ALL_ARTICLES());
    setarticleTitle("");
    setArticle("");
    setpost_url("");
  };
  return (
    <>
      {isAdmin ? (
        <div className="w-96 mt-36 ml-4  rounded ">
          <div className="py-4 px-8">
            <div className="mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2">
                Article Title:
              </label>
              <input
                className=" border rounded w-full py-2 px-3 text-grey-darker"
                type="text"
                value={articleTitle}
                onChange={(e) => {
                  setarticleTitle(e.target.value);
                }}
                placeholder="Enter The Article Title"
              />
            </div>

            <div className="mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2">
                Article
              </label>
              <textarea
                cols="50"
                rows="10"
                value={article}
                onChange={(e) => {
                  setArticle(e.target.value);
                }}
                className="mb-2 border py-1   text-gray-900"
              ></textarea>
            </div>
            <div className="flex  flex-col items-start py-6">
              {image && (
                <div className="w-96 h-44 mr-4 mb-4 flex-none rounded-xl border overflow-hidden">
                  <img
                    className="w-full h-full mr-4 object-cover"
                    src={image}
                    alt=""
                  />
                </div>
              )}
              <label className="cursor-pointer ">
                <span className="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">
                  Browse
                </span>
                <input type="file" className="hidden" onChange={onChange} />
              </label>
            </div>
            <div className="mb-4">
              <button
                className="mb-2 mx-16 rounded-full py-1 px-24 bg-blue-500 "
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="flex flex-col lg:grid lg:grid-cols-5 lg:gap-4   ml-4 p-4 mt-28  bg-white shadow-xl ring-1 ring-gray-900/5">
        {ALL_ARTICLES && ALL_ARTICLES.ARTICLES == null ? (
          <BarLoader loading />
        ) : (
          ALL_ARTICLES.ARTICLES.map((u) => (
            <Health
              title={u.article_title}
              body={u.article}
              image={u.post_url}
            />
          ))
        )}
      </div>
    </>
  );
};

export default HealthContainer;
