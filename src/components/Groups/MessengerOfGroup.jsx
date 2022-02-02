import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_MESSAGES, SEND_MESSAGE } from "../../redux/actions/groupsAction";
import MessagesOfGroup from "./MessagesOfGroup";
import "./messenger.css";
import { io } from "socket.io-client";
import { useHref } from "react-router";
import axios from "axios";

const MessengerOfGroup = ({ id, userId }) => {
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const dispatch = useDispatch();
  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    // socket.current.on("getMessage", (data) => {
    //  console.log(data)
    // });
  }, []);
  useEffect(() => {
    // socket.current.emit("addUser", userId);
    // socket.current.on("getUsers", (users) => {
    //   // notification of userConnected
    // });
  }, []);


  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get('http://seniors-app.herokuapp.com/api/group/messages/'+id)
        setMessages(res.data.messageOfGroup)
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
   
    
  }, [id]);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    dispatch(SEND_MESSAGE(id, message, userId));
    
    socket.current.emit("sendMessage", {
   message:message,
   userId:userId
    });
  };
  return (
    <div className="messenger  w-2/3 flex  text-gray-200  overflow-hidden">
      <div className="flex-1 flex flex-col">
        <main className="flex-grow flex flex-row min-h-0">
          <section className="flex flex-col flex-auto  border-gray-800">
            <div className="chat-header px-6 py-4 flex flex-row flex-none justify-between items-center shadow">
              <div className="flex">
                <div className="w-12 h-12 mr-4 relative flex flex-shrink-0">
                  <img
                    className="shadow-md rounded-full w-full h-full object-cover"
                    src="https://assets.webiconspng.com/uploads/2017/01/Group-Users-Icon.png"
                    alt=""
                  />
                </div>
                <div className="text-sm">
                  <p className="font-bold">Scarlett Johansson</p>
                </div>
              </div>
            </div>
            <div className="chat-body p-4 flex-1 overflow-y-scroll">
            {messages&&messages.map((m,index) => (
              <MessagesOfGroup
              key={index}
               userId={userId}
             messages={m}
            
              />))}
            </div>
            <div className="chat-footer flex-none">
              <div className="flex flex-row items-center p-4">
                <div className="relative flex-grow">
                  <label className="w-full">
                    <input
                      onChange={(e) => setMessage(e.target.value)}
                      className="rounded-full bg-gray-900 py-2 pl-3 pr-10 w-full  text-gray-100"
                      type="text"
                      value={message}
                      placeholder="Aa"
                    />
                    <button
                      onClick={handleSendMessage}
                      type="button"
                      className="absolute top-0 right-0 mt-2 mr-4 flex flex-shrink-0 focus:outline-none block text-gray-100 hover:text-gray-700 w-6 h-6"
                    >
                      <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                    </button>
                  </label>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MessengerOfGroup;
