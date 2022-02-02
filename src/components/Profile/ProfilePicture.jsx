import React, { useState } from "react";
// import { parseToken } from "../../constants/parseToken";

const ProfilePicture = ({ userConnected }) => {
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

  //   const idParsed = parseToken(localStorage.getItem('authToken')).userId

  return (
    <div className="  flex justify-center   relative  overflow-hidden ml-10   lg:relative lg:w-56  h-40  lg:-top-44 lg:ml-10  lg:float-left lg:border-white lg:border-solid lg:border-8 lg:overflow-hidden">
      <img
        className=" w-1/4 lg:w-full lg:h-full "
        src={
          image
            ? image
            : userConnected.profilePicture
            ? userConnected.profilePicture
            : userConnected.gender === "female"
            ? "https://res.cloudinary.com/dp81gikbd/image/upload/v1643798806/female_ffenti.png"
            : "https://res.cloudinary.com/dp81gikbd/image/upload/v1643798807/male_er9asw.png"
        }
        alt="Profile image"
      />
      {/* {idParsed ===user._id?   */}
      <form className=" opacity-0 hover:opacity-100 duration-300 absolute bottom-0 bg-gray-900 ">
        <i className="fa fa-camera-retro text-white  mx-4 mt-4"></i>

        <label className="fileContainer">
          <input type="file" onChange={onChange} />
        </label>
      </form>
      {/* : ''} */}
    </div>
  );
};

export default ProfilePicture;
