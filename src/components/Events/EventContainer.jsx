import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvent } from "../../redux/actions/eventActions";
import CreateEvent from "./CreateEvent";
import Events from "./Events";

const EventContainer = ({ user, userConnected }) => {
  const [showModal, setShowModal] = React.useState(false);
  const ALL_EVENTS = useSelector((state) => state.getAllEvent);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEvent());
  }, [dispatch]);

  const handleFilter = () => {};
  // ////////// ////////////////////////////// /////
  // =======================================
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
  return (
    <>
      <div className="container flex flex-col items-center justify-center  mt-24  bg-white shadow-xl ring-1 ring-gray-900/5 p-10  w-1/3">
        {isBlocked === true ? (
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
        ) : (
          <>
            <div className="flex  pl-4 justify-center w-full">
              <button
                onClick={() => setShowModal(true)}
                className="border border-gray-700 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white bg-gray-800 focus:outline-none focus:shadow-outline"
              >
                <i className="fa fa-plus text-white" />
              </button>
            </div>
            <br />
            <div class="relative mt-6 ">
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
        )}
      </div>
      <div className="container flex flex-col   bg-white shadow-xl ring-1 ring-gray-900/5 p-10 justify-center w-full lg:grid lg:grid-cols-4 lg:gap-4 md:grid md:grid-cols-2 md:gap-4 mt-4 pl-4  lg:h-auto">
        {ALL_EVENTS && ALL_EVENTS.allEvent.length > 0 ? (
          ALL_EVENTS.allEvent.map((e) => (
            <Events
              idOfEvent={e._id}
              userConnected={userConnected}
              creator_id={e.creator_id}
              event_title={e.event_title}
              event_description={e.event_description}
              event_localisation={e.event_localisation}
              event_date={e.event_date}
              eventPicture={e.eventPicture}
              event_members_id={e.event_members_id}
            />
          ))
        ) : (
          <h1>There is No Events here</h1>
        )}
      </div>
      {showModal ? <CreateEvent setShowModal={setShowModal} /> : null}
    </>
  );
};

export default EventContainer;
