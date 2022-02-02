
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  DELETE_GROUP,
  DELETE_MEMBER,
  getAllGroupMembers,
  joinGroup,
  leaveGroup,
} from "../../redux/actions/groupsAction";
import { getotherUser } from "../../redux/actions/usersActions";
import InviteUser from "./InviteUser";

const Groups = ({ userId, name, id, membersOfgroup }) => {
  const [joining, setJoining] = useState(true);
  const [members, setMembers] = useState();
  const [showModal, setShowModal] = useState(false);

  const joinedToGroup = useSelector((state) => state.joinGroup);
  const { loading, error, join } = joinedToGroup;
  const dispatch = useDispatch();

  // ===========================================================================================================================================================
  useEffect(() => {
    setMembers(membersOfgroup);
  }, [membersOfgroup]);
  // ==========================================================================================================================================
  const parseToken = (t) => {
    if (!t) {
      return;
    }
    const base64URL = t.split(".")[1];
    const base64 = base64URL.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  };
  const token = localStorage.getItem("authToken");
  const userConnected = parseToken(token).userId;

  // ====================JOIN AND LEAVE ========================
  useEffect(() => {
    members && members.find((e) => e._id === userConnected)
      ? setJoining(false)
      : setJoining(true);
  }, [members]);

  const handleLeave = () => {
    dispatch(leaveGroup(id));
    setJoining(true);
  };
  const handleJoin = () => {
    dispatch(joinGroup(id));
    setJoining(false);
  };
  // =================================================
  const handleDelete = () => {
    dispatch(DELETE_GROUP(id));
  };
  const handleDeleteMember = (idx, e) => {
    const temp = [...members];
    temp.splice(idx, 1);
    setMembers(temp);
    dispatch(DELETE_MEMBER(e));
  };
  
  return (
    <>
      {" "}
      <div className="  min-w-96 rounded-lg overflow-hidden shadow-lg my-2 mr-4 bg-white">
        <div className="relative mb-6">
          <div className="text-center  w-full ">
            {userId !== userConnected ? (
              !joining ? (
                <button
                  onClick={handleLeave}
                  className="unJoinGroup mt-4 p-4 rounded-full transition ease-in duration-200 focus:outline-none"
                >
                  <svg className=" h-6 w-6 " viewBox="0 0 24 24">
                    <g>
                      <path d="M0,0h24v24H0V0z" fill="none" />
                    </g>
                    <g>
                      <path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z" />
                    </g>
                  </svg>
                </button>
              ) : (
                <button
                  onClick={handleJoin}
                  className="joinGroup mt-4 p-4 rounded-full transition ease-in duration-200 focus:outline-none"
                >
                  <svg className=" h-6 w-6 " viewBox="0 0 24 24">
                    <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z" />
                  </svg>
                </button>
              )
            ) : (
              <button
                onClick={handleDelete}
                className="unJoinGroup mt-4 p-4 rounded-full transition ease-in duration-200 focus:outline-none"
              >
                <svg className=" h-6 w-6 " viewBox="0 0 24 24">
                  <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z"></path>
                </svg>
              </button>
            )}
            <Link to={`/group/${id}/${userId}`}>
              {" "}
              <p className="text-gray-900 mt-4 tracking-wide uppercase text-lg font-bold">
                {name}
              </p>
            </Link>
          </div>
        </div>
        <div className="py-10 px-6 text-center tracking-wide flex justify-center items-center">
          <div className="following">
          {members&& (<p className="text-lg">{members.length}</p>)}
            <p className="text-gray-400 text-sm">Members</p>
          </div>
        </div>
      </div>

    </>
  );
};

export default Groups;
