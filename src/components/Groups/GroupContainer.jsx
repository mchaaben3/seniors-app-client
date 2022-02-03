import React, { useEffect, useState } from "react";
import { groupAction } from "../../redux/actions/groupsAction";
import { useDispatch, useSelector } from "react-redux";
import { BarLoader } from "react-spinners";
import CreateGroup from "./CreateGroup";
import Groups from "./Groups";

const GroupContainer = ({ userConnected }) => {
  const [showModal, setShowModal] = useState(false);
  const [groupsState, setGroupsState] = useState([]);
  const [filterGroupByName, setFilterGroupByName] = useState({
    value: "",
  });
  const displayAllGroup = useSelector((state) => state.getGroups);
  const { loading, error, groups } = displayAllGroup;

  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(groupAction());
  }, [dispatch]);

  const handleFilter = (e) => {
    setFilterGroupByName({ value: e.target.value });
  };

  ////////// ////////////////////////////// /////

  // =========================================
  const parseToken = (t) => {
    if (!t) {
      return;
    }
    const base64URL = t.split(".")[1];
    const base64 = base64URL.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  };
  const token = localStorage.getItem("authToken");
  const isBlocked = parseToken(token).isBlocked;
  // =========================================

  setTimeout(() => {
    setGroupsState(displayAllGroup.Allgroups);
  }, 5000);

  return (
    <>
      <div className="flex-none mt-24 px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 w-1/3 mx-auto ">
        {isBlocked == true ? (
          <>
            <div class="relative mt-6 max-w-lg mx-auto">
              <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg
                  class="h-5 w-5 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>

              <input
                onChange={handleFilter}
                className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Search"
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex   justify-center  ">
              <button
                onClick={() => setShowModal(true)}
                className="border border-gray-700 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white bg-gray-800 focus:outline-none focus:shadow-outline"
              >
                <i className="fa fa-plus text-white" />
              </button>
            </div>
            <br />

            <div class="relative mt-6 max-w-lg mx-auto ">
              <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg
                  class="h-5 w-5 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>

              <input
                onChange={handleFilter}
                class="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Search"
              />
            </div>
          </>
        )}
      </div>
      <div className="flex flex-col grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 w-full  mb-10 px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5  mt-4">
        {loading ? (
          <BarLoader loading />
        ) : error ? (
          error.message
        ) : displayAllGroup.Allgroups.length === 0 ? (
          <h1>There is No Groups Here</h1>
        ) : displayAllGroup.Allgroups.filter((obj) =>
            obj.group_name
              .toLowerCase()
              .includes(filterGroupByName.value.toLowerCase())
          ).length === 0 ? (
          <h1>no group with this name</h1>
        ) : (
          displayAllGroup.Allgroups.filter((obj) =>
            obj.group_name
              .toLowerCase()
              .includes(filterGroupByName.value.toLowerCase())
          ).map((u) => (
            <Groups
              key={u._id}
              userConnected={userConnected}
              userId={u.userId}
              id={u._id}
              name={u.group_name}
              membersOfgroup={u.group_members_id}
            />
          ))
        )}
      </div>

      {isBlocked == true ? (
        <></>
      ) : showModal ? (
        <CreateGroup
          setShowModal={setShowModal}
          groupsState={groupsState}
          setGroupsState={setGroupsState}
        />
      ) : null}
    </>
  );
};

export default GroupContainer;
