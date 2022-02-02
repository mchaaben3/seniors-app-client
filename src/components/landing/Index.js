import React from "react";
import Signin from "../signin/Signin";
const Index = () => {
  return (
    <>
      <section id="banner">
        <div className="container">
          {" "}
          <Signin />
        </div>
        <svg className="arrows hidden-xs hidden-sm">
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </section>
      <section id="features" className="mt-28">
        <div className="container wrapper justify-center ">
          <br /> <br /> <br />
          <h1 className="font-black text-7xl uppercase ">Just For</h1>
          <br />
          <h1 className="text-white font-black	 text-9xl uppercase ">Seniors</h1>
          <ul className="flex flex-col justify-between lg:grid lg:grid-xl:flow-col lg:grid-cols-5 lg:ml-44 lg:mt-28 lg:grid-rows-1">
            <li className="flex flex-col text-white">
              <div className="flex justify-center items-center content-center bg-gradient-to-br from-blue-300 to-blue-600 shadow-md  h-36 w-36 rounded-lg fill-current text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="54"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.119 16.064c2.293-.53 4.427-.994 3.394-2.946-3.147-5.941-.835-9.118 2.488-9.118 3.388 0 5.643 3.299 2.488 9.119-1.065 1.964 1.149 2.427 3.393 2.946 1.985.458 2.118 1.428 2.118 3.107l-.003.828h-1.329c0-2.089.083-2.367-1.226-2.669-1.901-.438-3.695-.852-4.351-2.304-.239-.53-.395-1.402.226-2.543 1.372-2.532 1.719-4.726.949-6.017-.902-1.517-3.617-1.509-4.512-.022-.768 1.273-.426 3.479.936 6.05.607 1.146.447 2.016.206 2.543-.66 1.445-2.472 1.863-4.39 2.305-1.252.29-1.172.588-1.172 2.657h-1.331c0-2.196-.176-3.406 2.116-3.936zm-10.117 3.936h1.329c0-1.918-.186-1.385 1.824-1.973 1.014-.295 1.91-.723 2.316-1.612.212-.463.355-1.22-.162-2.197-.952-1.798-1.219-3.374-.712-4.215.547-.909 2.27-.908 2.819.015.935 1.567-.793 3.982-1.02 4.982h1.396c.44-1 1.206-2.208 1.206-3.9 0-2.01-1.312-3.1-2.998-3.1-2.493 0-4.227 2.383-1.866 6.839.774 1.464-.826 1.812-2.545 2.209-1.49.345-1.589 1.072-1.589 2.334l.002.618z" />
                </svg>
              </div>
              <br />
              <h1 className="text-2xl">create a group</h1>
            </li>
            <li className="flex  flex-col text-white">
              <div className="flex justify-center items-center content-center bg-gradient-to-br from-green-300 to-green-600 shadow-md hover:shadow-lg h-36 w-36 rounded-lg fill-current text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="54"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 22v-16h16v7.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362zm18-7.614v-10.386h-20v20h10.189c3.163 0 9.811-7.223 9.811-9.614zm-10 1.614h-5v-1h5v1zm5-4h-10v1h10v-1zm0-3h-10v1h10v-1zm2-7h-19v19h-2v-21h21v2z" />
                </svg>
              </div>{" "}
              <br />
              <h1 className="text-2xl">make a post</h1>
            </li>
            <li className="flex flex-col  text-white">
              <div className="flex justify-center items-center content-center bg-gradient-to-br from-purple-300 to-purple-600 shadow-md hover:shadow-lg h-36 w-36 rounded-lg fill-current text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="54"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                </svg>
              </div>{" "}
              <br />
              <h1 className="text-2xl">Add an event</h1>
            </li>
            <li className="flex flex-col text-white">
              <div className="flex justify-center items-center content-center bg-gradient-to-br from-pink-300 to-pink-600 shadow-md hover:shadow-lg h-36 w-36 rounded-lg fill-current text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="54"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>{" "}
              <br />
              <h1 className="text-2xl">like a post</h1>
            </li>
            <li className="flex flex-col text-white">
              <div className="flex justify-center items-center content-center bg-gradient-to-br from-gray-600 to-gray-400 shadow-md hover:shadow-lg h-36 w-36 rounded-lg fill-current text-white">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="54"
                  viewBox="0 0 25 20"
                  fill="currentColor"
                >
                  <path d="M20 15c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m5.415 4.946c-1 .256-1.989.482-3.324.482-3.465 0-7.091-2.065-7.091-5.423 0-3.128 3.14-5.672 7-5.672 3.844 0 7 2.542 7 5.672 0 1.591-.646 2.527-1.481 3.527l.839 2.686-2.943-1.272zm-13.373-3.375l-4.389 1.896 1.256-4.012c-1.121-1.341-1.909-2.665-1.909-4.699 0-4.277 4.262-7.756 9.5-7.756 5.018 0 9.128 3.194 9.467 7.222-1.19-.566-2.551-.889-3.967-.889-4.199 0-8 2.797-8 6.672 0 .712.147 1.4.411 2.049-.953-.126-1.546-.272-2.369-.483m17.958-1.566c0-2.172-1.199-4.015-3.002-5.21l.002-.039c0-5.086-4.988-8.756-10.5-8.756-5.546 0-10.5 3.698-10.5 8.756 0 1.794.646 3.556 1.791 4.922l-1.744 5.572 6.078-2.625c.982.253 1.932.407 2.85.489 1.317 1.953 3.876 3.314 7.116 3.314 1.019 0 2.105-.135 3.242-.428l4.631 2-1.328-4.245c.871-1.042 1.364-2.384 1.364-3.75" />
                </svg>{" "}
              </div>{" "}
              <br />
              <h1 className="text-2xl">comment a post</h1>
            </li>
          </ul>
        </div>
        <div className="mt-28 ">
          <h1 className="text-gray-300  text-3xl uppercase ">
            find awesome people like you
          </h1>

          {/* <button className="bg-gradient-to-br from-blue-300 to-gray-600 shadow-md hover:shadow-lg h-14 w-36 rounded-md  text-white mt-4">
                Sign Up
                </button> */}
        </div>
      </section>
    </>
  );
};

export default Index;
