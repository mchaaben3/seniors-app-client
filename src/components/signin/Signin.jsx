import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login, updateUserStatus } from "../../redux/actions/authActions";
import Signup from "../signup/Signup";

const Signin = () => {
  const [showSignup, setShowSignup]=useState(false)
  const [info, setInfo] = useState({
    e_mail: "",
    password: "",
  });

  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (auth.isAuth) navigate("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, [auth.isAuth]);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(info));
  };

  return (
    <>
    {showSignup ? (  <Signup />):(   <div className="signin-form">
        <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold">
          Log in
        </h2>

        <div>
          <div className="text-xl font-bold text-gray-700 tracking-wide">
            Email Address
          </div>
          <input
            className="w-full text-lg p-2 text-gray-900 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
            value={info.e_mail}
            onChange={(e) => setInfo({ ...info, e_mail: e.target.value })}
            type="email"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="mt-8">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-700 tracking-wide">
              Password
            </div>
            <div>
              <a className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer">
                {" "}
                Forgot Password?{" "}
              </a>
            </div>
          </div>
          <input
            className="w-full text-lg p-2 border-b border-gray-300 text-gray-900 focus:outline-none focus:border-indigo-500"
            value={info.password}
            onChange={(e) => setInfo({ ...info, password: e.target.value })}
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="mt-10">
          <button
            className=" bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline  shadow-lg    bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline  shadow-lg"
            onClick={handleSubmit}
          >
            Log In
          </button>
        </div>

        <div className="mt-12 text-xl font-display font-semibold text-gray-700 text-center">
          Don't have an account ?{" "}
        
            <span
          onClick={()=>setShowSignup(true)}
              className="cursor-pointer text-indigo-600 hover:text-indigo-800"
            >
              Sign up
            </span>
        
        </div>
      </div>)}
   
    </>
  );
};

export default Signin;
