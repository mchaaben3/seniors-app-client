import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const Notification = ({ notifications, idx }) => {
  const [user, setUser] = useState({})
  useEffect(() => {
    const fetchUser = async () => {
      try{
      const res = await axios.get(`http://seniors-app.herokuapp.com/api/users/`+notifications.sender);
      setUser(res.data);
    }catch(error){
      console.log(error)
    }
    };
    fetchUser();
   
  }, []);
  return (
    <a
      key={idx}
      href="#"
      className="flex items-center px-4 py-3 hover:bg-gray-100 -mx-2"
    >
      <img
        className="h-8 w-8 rounded-full object-cover mx-1"
        src={user.profilePicture}

      />
      <p className="text-gray-600 text-sm mx-2">
        <span className="font-bold" href="#">
         {user.full_name}
        </span>{" "}
       {notifications.message}
      </p>
    </a>
  );
};

export default Notification;
