import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { signup } from "../../redux/actions/authActions";

const PasswordDetails = ({ prevStep, handleChange, nextStep, values }) => {
  
  const [information, setInformation] = useState(values);
  const signupSelector = useSelector((state) => state.signup);
  const navigate = useNavigate();
  console.log(information);
  useEffect(() => {
    if (signupSelector.isAuth) navigate("/");
  }, [signupSelector.isAuth]);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.gender == "female") {
    setInformation({...information,profilePicture:"https://res.cloudinary.com/dp81gikbd/image/upload/v1643798806/female_ffenti.png"})
    } else {
      setInformation({...information,profilePicture:"https://res.cloudinary.com/dp81gikbd/image/upload/v1643798807/male_er9asw.png"})
    } 
   
   

    dispatch(signup(values));
  };
  const back = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <div>
      <div className="signup-form">
        <div className="text-xl font-bold text-gray-100 tracking-wide">
          PASSWORD
        </div>
        <input
          className="w-full text-lg text-gray-900 p-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange("password")}
          placeholder="Password"
        />
        <div className="text-xl font-bold text-gray-100 tracking-wide mt-8">
          RE-PASSWORD
        </div>
        <input
          className="w-full text-lg text-gray-900 p-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
          type="password"
          value={values.re_password}
          onChange={handleChange("re_password")}
          placeholder="Re your password"
        />
        <div className="text-xl font-bold text-gray-100 tracking-wide mt-8">
          GENDER
        </div>
        <input
          className="w-full text-lg text-gray-900 p-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
          type="email"
          value={values.e_mail}
          onChange={handleChange("e_mail")}
          placeholder="example@gmail.com"
        />
        <div class="my-10 flex flex-row">
          <button
            onClick={handleSubmit}
            className=" bg-green-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline  shadow-lg "
          >
            {" "}
            Confirm
          </button>
          <button
            onClick={back}
            className=" bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline  shadow-lg   "
          >
            {" "}
            previous step
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordDetails;
