import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  createGroup, groupAction } from "../../redux/actions/groupsAction";



const CreateGroup = ({setShowModal,groupsState,  setGroupsState}) => {
  const [info, setInfo] = useState({
    group_name: "",
  });
  ///////////////////////
  const dispatch = useDispatch();
  const createGroupSelector = useSelector((state) => state.CreateGroup);




  const handleSubmit = async (e) => {
    e.preventDefault();
   await dispatch(createGroup(info));
    await dispatch(groupAction());

  };


    return (
        <>
        <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">Create New Group</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    X
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="md:flex flex-row md:space-x-4 w-full text-lg">
                      <div className="mb-3 space-y-2 w-full text-lg">
                        <label className="font-semibold text-gray-600 py-2">
                          Group Name
                        </label>
                        <input
                          placeholder="Enter your Group Name "
                          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required="required"
                         value={info.group_name}
                          type="text"
                          name="GroupName "
                           onChange={(e) =>
                             setInfo({ ...info, group_name: e.target.value })
                          }
                        />
                      </div>
                    </div>

              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                onClick={handleSubmit}
                  className="bg-emerald-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                 
                >
                  Add New Group
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    )
}

export default CreateGroup
