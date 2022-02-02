import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import TODO from "./TODO";
import Users from "./Users";

const UsersDashboard = () => {
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
    const isAdmin = parseToken(token).isAdmin;

  const [people, setPeople] = useState([]);

const dispatch = useDispatch()
  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const res = await axios.get(`http://seniors-app.herokuapp.com/api/users/all/all`);

        setPeople(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUsers();
  }, []);



  const navigate=useNavigate()
if(isAdmin==="false"){
  navigate('/404')

}

  //========================================
  return (
    <div className="min-h-screen flex flex-col flex-auto mt-14 flex-shrink-0 antialiased bg-gray-200  text-black ">
      <center>
        <h1 className="text-6xl mt-4">ADMIN DASHBOARB</h1>
      </center>
      <Sidebar />

      <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
        <div class="grid grid-cols-4  sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4"></div>
      </div>
      <div className="flex flex-col h-full ml-14  mb-10 md:ml-64">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="bg-white divide-y divide-gray-200">
                  {people.map((person) => (
                  <Users  person={person} />
                  ))}
                </tbody>
              </table>
            </div>
          
    {/*  <TODO /> */}
          </div>
        </div>

       
      
      
          
     
      </div>
    </div>
  );
};

export default UsersDashboard;
