import React, { useState } from "react";
// import { parseToken } from "../../constants/parseToken";

const CoverPicture = () => {
  const [post_url, setpost_url] = useState("");
  const [image, setImage] = useState();
  const onChange = (e) => {
    const post_url = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(post_url);
    reader.onloadend = () => {
      setImage(reader.result);
        setpost_url(reader.result)
    };
    
  };
//   const idParsed = parseToken(localStorage.getItem('authToken')).userId

  return (
    <div className=" relative w-screen">
      <figure className="mb-0">
        <img
          src={image? image :"https://www.incimages.com/uploaded_files/image/1920x1080/getty_509107562_2000133320009280346_351827.jpg"}
        alt=""
          className="h-96 w-full "
        />
      </figure>
      {/* {idParsed === user._id ? */}

         <form className="edit-photo opacity-0 hover:opacity-100 duration-300 absolute bottom-0 bg-gray-900 h-16 w-48"> 
<i className="fa fa-camera-retro  mx-4 mt-4"></i>
<span className="ml-4 flex-grow h-4 text-xs ">Edit Cover picture</span>

<label className="fileContainer">
  <input type="file" onChange={onChange}/>
</label>
</form>
{/* :''} */}
     
    </div>
  );
};

export default CoverPicture;
