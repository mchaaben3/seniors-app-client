import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import ReactCardFlip from "react-card-flip";

import {
  deleteEvent,
  getAllEvent,
  leaveEvent,
  participateToEvent,
} from "../../redux/actions/eventActions";

const Events = ({
  idOfEvent,
  creator_id,
  event_title,
  eventPicture,
  event_description,
  event_localisation,
  event_date,
  event_members_id,
}) => {
  // ===================================
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
  //========================================================================
  const [join, setJoin] = useState( event_members_id.find((e) => e == userConnected)?true:false);

  const [isFlipped, setIsFlipped] = useState(false);
  // ===========================================================================================================================================================
  
  
  useEffect(() => {
   
    
  }, []);

  // ===================================
  const dispatch = useDispatch();
  const handleParticipate = () => {
    dispatch(participateToEvent(idOfEvent,userConnected));
    setJoin(true);
  };
  const handleUngoing = () => {
    dispatch(leaveEvent(idOfEvent,userConnected));
    setJoin(false);
  };
  const handleDelete = () => {
    dispatch(deleteEvent(idOfEvent));
    dispatch(getAllEvent());
  };
  const handleFlipp = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  var d = new Date(event_date);
  //  console.log(d); Hours
  var momentDate = moment(event_date);
  var hour = momentDate.hours();
  var minutes = momentDate.minutes();
  var seconds = momentDate.seconds();
  console.log(momentDate.format("dddd"));

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <>
        <div className="block rounded-t overflow-hidden bg-white text-center w-60 ">
          <div className="bg-gray-200 text-3xl text-gray-900 py-4">
            {event_title}
          </div>
          <div className=" border-l border-r">
            <img
              src={eventPicture ? eventPicture : "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/92fe9a37853461.574e884067985.jpg"}
              className="w-full h-60"
            />
          </div>
          <div className="pt-4 px-2 border-l h border-r border-b rounded-b flex justify-center ">
            <span className="text-xl font-bold px-1">
              {momentDate.format("ddd")}
            </span>
            <span className="text-xl font-bold px-1">
              {momentDate.format("MM")}
            </span>
            <span className="text-xl font-bold px-1">
              {momentDate.format("MMM")}
            </span>
            <span className="text-xl font-bold px-1">
              {momentDate.format("YYYY")}
            </span>
          </div>
        </div>
        <button
          className="border border-gray-700 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-gray-800 focus:outline-none focus:shadow-outline"
          onClick={handleFlipp}
        >
          Show Event Details
        </button>
      </>
      <>
        <div className="block relative rounded-t overflow-hidden bg-white text-center w-60 " style={{height:'353px'}}>
          {event_description}
          <div className="text-gray-600 font-medium text-xl pt-1 text-center lg:text-left px-2">
            {event_localisation}
            <div className="absolute bottom-0 left-1/4">
              {creator_id !== userConnected ? (
                join == true ? (
                  <span
                    onClick={handleUngoing}
                    className="cursor-pointer tracking-wider text-gray-600 bg-gray-200 px-2 text-xl rounded leading-loose mx-2 font-semibold"
                  >
                    {" "}
                    unGoing{" "}
                  </span>
                ) : (
                  <span
                    onClick={handleParticipate}
                    className="cursor-pointer tracking-wider text-gray-600 bg-green-200 px-8 text-xl rounded leading-loose mx-2 font-semibold"
                  >
                    {" "}
                    Going{" "}
                  </span>
                )
              ) : (
                <span
                  onClick={handleDelete}
                  className="cursor-pointer tracking-wider text-gray-900 bg-red-500 px-8 text-xl rounded leading-loose mx-2 font-semibold"
                >
                  {" "}
                  Delete{" "}
                </span>
              )}
            </div>
          </div>
        </div>
        <button
          className=" border border-gray-700 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-gray-800 focus:outline-none focus:shadow-outline"
          onClick={handleFlipp}
        >
          Hide Event Details
        </button>
      </>
    </ReactCardFlip>
  );
};

export default Events;
