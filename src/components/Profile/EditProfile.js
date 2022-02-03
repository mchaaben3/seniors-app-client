import {
  faAddressBook,
  faBirthdayCake,
  faBriefcase,
  faPen,
  faRunning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { idOfUserConnected } from "../../utils";
import EditProfileModal from "./EditProfileModal";

const EditProfile = ({ userConnected }) => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const idOfUser = idOfUserConnected()
  return (
    <>
      <div className="flex flex-col ml-4 px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">
      {idOfUser===id ? (
        <div className="mt-8 ml-8">
          <button
            className="border border-2 p-2"
            onClick={() => setShowModal(true)}
          >
            <FontAwesomeIcon icon={faPen} /> Edit Profile
          </button>{" "}
        </div>
      ) : (
        <></>
      )}

 
        <div class="text-normal text-gray-900 text-2xl mt-8 hover:text-gray-400 cursor-pointer">
          <FontAwesomeIcon icon={faAddressBook} />
          <span class=" ml-4 border-gray-500 pb-1">
            {userConnected.address ? userConnected.address : ""}
          </span>
        </div>
        <div class="text-normal text-gray-900  text-2xl mt-8 hover:text-gray-400 cursor-pointer">
          <FontAwesomeIcon icon={faBriefcase} />
          <span class="  ml-4 border-gray-500 pb-1">
            {userConnected.job ? userConnected.job : ""}
          </span>
        </div>
        <div class="text-normal text-gray-900 text-2xl mt-8 mt-8  hover:text-gray-400 cursor-pointer">
          <FontAwesomeIcon icon={faRunning} />
          <span class="   ml-4 border-gray-500 pb-1">
            {userConnected.hobbies ? userConnected.hobbies : ""}
          </span>
        </div>

        {showModal ? (
          <EditProfileModal setShowModal={setShowModal}  />
        ) : null}
      </div>
    </>
  );
};

export default EditProfile;
