import React, { useEffect, useState } from "react";

const Messages = (m) => {


  return (
    <>
      {m.messages.user._id == m.userId ? (
        <div className="flex flex-row mt-2 justify-end">
          <div className="messages text-lg text-white grid grid-flow-row gap-2">
            <div className="flex items-center flex-row group">
              <p className="px-6 py-3  rounded-l-full  bg-blue-500  lg:max-w-md">
                {m.messages.messageBody}
              </p>{" "}
              <img
                src={m.messages.user.profilePicture}
                className="rounded-full w-10 h-10"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row mt-2 justify-start">
          <div className="messages text-lg text-white grid grid-flow-row gap-2">
            <div className="flex items-center flex-row-reverse group">
              <p className="px-6 py-3  rounded-r-full messagesAndInputs  lg:max-w-md">
                {m.messages.messageBody}
              </p>{" "}
              <img
                src={m.messages.user.profilePicture}
                className="rounded-full w-10 h-10"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Messages;
