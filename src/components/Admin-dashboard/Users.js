import axios from "axios";
import React, { useState } from "react";

const Users = ({ person }) => {
  const [isBlocked, setBlocked] = useState(person.isBlocked);
  const [Admin, setAdmin] = useState(person.isAdmin);

  const handleBlock = (id) => {
    setBlocked(!isBlocked);
    if (person.isBlocked === true) {
      const blockUser = async () => {
        try {
          const res = await axios.put(
            `https://seniors-app.herokuapp.com/api/admin/unblock/${id}`
          );

          console.log(res);
        } catch (error) {
          console.log(error);
        }
      };
      blockUser();
    } else {
      const blockUser = async () => {
        try {
          const res = await axios.put(
            `https://seniors-app.herokuapp.com/api/admin/block/${id}`
          );

          console.log(res);
        } catch (error) {
          console.log(error);
        }
      };
      blockUser();
    }
  };
  const handleSetAdmin = (id) => {
    setAdmin(!Admin);
    if (person.isBlocked === true) {
      const blockUser = async () => {
        try {
          const res = await axios.put(
            `https://seniors-app.herokuapp.com/api/admin/unblock/${id}`
          );

          console.log(res);
        } catch (error) {
          console.log(error);
        }
      };
      blockUser();
    } else {
      const blockUser = async () => {
        try {
          const res = await axios.put(
            `https://seniors-app.herokuapp.com/api/admin/block/${id}`
          );

          console.log(res);
        } catch (error) {
          console.log(error);
        }
      };
      blockUser();
    }
  };
  return (
    <tr key={person._id}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full"
              src={ person.profilePicture
                ? person.profilePicture
                : person.gender === "female"
                ? "https://res.cloudinary.com/dp81gikbd/image/upload/v1643798806/female_ffenti.png"
                : "https://res.cloudinary.com/dp81gikbd/image/upload/v1643798807/male_er9asw.png"}
              alt=""
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {person.full_name}
            </div>
            <div className="text-sm text-gray-500">{person.e_mail}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{person.createdAt}</div>
      </td>
      {Admin === "true" ? (
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex w-20 justify-center text-xs leading-5 font-semibold rounded-full bg-green-600 text-white">
            I'm Admin :)
          </span>
        </td>
      ) : isBlocked == true ? (
        <td className="px-6 py-4 whitespace-nowrap">
        
        </td>
      ): ( <td className="px-6 py-4 whitespace-nowrap">
      <span
        onClick={() => handleSetAdmin(person._id)}
        className={
        
            `px-2 inline-flex w-20 justify-center cursor-pointer text-xs leading-5 font-semibold rounded-full bg-red-600 text-white`
          
        }
      >
       Not Admin
      </span>
    </td>)}
      {person.isAdmin === "true" ? (
        <td className="px-6 py-4 whitespace-nowrap"></td>
      ) : (
        <td className="px-6 py-4 whitespace-nowrap">
          <span
            onClick={() => handleBlock(person._id)}
            className={
              isBlocked
                ? `px-2 inline-flex  w-20 justify-center cursor-pointer text-xs leading-5 font-semibold rounded-full bg-red-600 text-white`
                : `px-2 inline-flex w-20 justify-center cursor-pointer text-xs leading-5 font-semibold rounded-full bg-green-600 text-white`
            }
          >
            {isBlocked === true ? "Blocked" : "Not Blocked"}
          </span>
        </td>
      )}
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Edit
        </a>
      </td>
    </tr>
  );
};

export default Users;
