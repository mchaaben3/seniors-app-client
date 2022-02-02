import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {
  getAllGroupMembers,
  joinGroup,
} from "../../redux/actions/groupsAction";
import ListOfGroupUsers from "./ListOfGroupUsers";
import MessengerOfGroup from "./MessengerOfGroup";

const GroupPage = () => {
  const { id, userId } = useParams();
  const all_member = useSelector((state) => state.getAllGroupMembers);
  const { members } = all_member;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(async () => {
    await dispatch(getAllGroupMembers(id));
  }, []);

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

  return (
    <>
      {(members.group_members_id &&
        members.group_members_id.find((e) => e._id === userConnected._id) === userConnected._id) &&  members.group_members_id.length > 0 ||
      userConnected == userId  ? (
        <section className=" mx-2 mt-28  lg:flex-row lg:flex lg:mx-10 justify-between ">
          <div className="flex-row w-1/3 overflow-y-scroll messenger ">
            <div className="p-2 ">
              <div className="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg relative">
                <div className="w-16 h-16 relative flex flex-shrink-0">
                  <img
                    className="shadow-md rounded-full w-full h-full object-cover"
                    src={
                      "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-group-512.png"
                    }
                    alt=""
                  />
                </div>
                <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                  <p>You</p>
                </div>
              </div>
            </div>
            {all_member.members.group_members_id
              ? members.group_members_id.map((e,index) => (
                  <ListOfGroupUsers
                  key={index}
                    nameOfgroupUser={e.full_name}
                    picOfgroupUser={e.profilePicture}
                  />
                ))
              : '"'}
          </div>

          <MessengerOfGroup id={id} userId={userConnected} />
        </section>
      ) : (
        <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
          <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
            <div className="relative">
              <div className="absolute">
                <div className="">
                  <h1 className="my-2 text-gray-800 font-bold text-2xl">
                    Looks like you want to Join this Group ???
                  </h1>
                  <p className="my-2 text-gray-800">
                    Sorry about that! Please Try to join.
                  </p>
                  <button
                    onClick={() => navigate(-1)}
                    className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
                  >
                    Take me there!
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
          </div>
        </div>
      )}
    </>
  );
};

export default GroupPage;
