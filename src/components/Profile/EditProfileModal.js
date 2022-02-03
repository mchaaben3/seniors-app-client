import React, { useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const EditProfileModal = ({ setShowModal }) => {
  const [first, setfirst] = useState("");
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    // display form data on success
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    return false;
  }
  return (
    <>
      <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}

            {/*body*/}

            <div className="p-4">
          

              <div className="text-xl  mt-2 font-bold text-gray-900 tracking-wide">
                Full Name
              </div>
              <input
                className="w-full text-lg p-2 mt-2  text-gray-900 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                placeholder="Full Name"
              />
              <div className="text-xl  mt-2 font-bold text-gray-900 tracking-wide mt-8">
                Date of Birthday
              </div>
              <input
                className="w-full text-lg text-gray-800 p-2 mt-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="date"
                placeholder="Full Name"
              />
              <div className="text-xl  mt-2 font-bold text-gray-900 tracking-wide">
                Job
              </div>
              <input
                className="w-full text-lg p-2 mt-2  text-gray-900 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                placeholder="JOB"
              />
              <div className="text-xl  mt-2 font-bold text-gray-900 tracking-wide">
                Actual Password
              </div>
              <input
                className="w-full text-lg p-2 mt-2  text-gray-900 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="password"
                placeholder="ACTUAL PASSWORD"
              />
              <div className="text-xl   mt-2 font-bold text-gray-900 tracking-wide">
                New Password
              </div>
              <input
                name="password"
                type="password"
                {...register("password")}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                value={first}
                onChange={(e)=>setfirst(e.target.value)}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>

              <PasswordStrengthBar className="mt-2" password={first} />

              <div className="text-xl  mt-2 font-bold text-gray-900 tracking-wide">
                Re-New Password
              </div>
              <input
                name="confirmPassword"
                type="password"
                {...register("confirmPassword")}
                className={`form-control ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
               
              />
            
            </div>

            {/*footer*/}
            <div className="flex items-center mt-8 justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            <input
                type="submit"
                className="text-green-500 bg-green-200 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                value="UPDATE"
              />
              
            </div>
          </div>
          </form>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default EditProfileModal;
