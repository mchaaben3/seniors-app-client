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
  console.log(members);
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
        members.group_members_id.find((e) => e._id === userConnected._id) ===
          userConnected._id &&
        members.group_members_id.length > 0) ||
      userConnected == userId ? (
        <div class="flex items-center justify-center min-h-screen bg-gray-200 py-8">
          <div class="flex flex-col w-full max-w-full shadow bg-white p-4">
            <ul class="flex flex-row space-x-3 overflow-x-auto py-4 px-2 mt-2">
              {all_member.members.group_members_id
                ? members.group_members_id.map((e, index) => (
                    <ListOfGroupUsers
                      key={index}
                      nameOfgroupUser={e.full_name}
                      picOfgroupUser={e.profilePicture}
                    />
                  ))
                : '"'}
            </ul>
            <MessengerOfGroup id={id} userId={userConnected} />
          </div>
        </div>
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
