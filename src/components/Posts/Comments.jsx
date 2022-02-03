import React from "react";

const Comments = ({ commentbody, user }) => {
  console.log(user);
  return (
    <div className="flex justify-start flex-col space-y-3 items-start px-2 border-b border-gray-100">
      <div className="relative mt-1 mb-3 pt-2 flex">
        <div className="mr-2">
          <img
            src={
              user.profilePicture
              
            }
            alt="saman sayyar"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
        <div className="ml-2 w-full">
          <p className="text-gray-600 md:text-sm text-xs w-full">
            <span className="font-normal text-gray-900 mr-2">
              {user.full_name}
            </span>
            {commentbody}
          </p>
          <div className="flex space-x-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
