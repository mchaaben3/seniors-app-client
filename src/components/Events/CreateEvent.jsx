import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEvent, getAllEvent } from "../../redux/actions/eventActions";

const CreateEvent = ({ setShowModal }) => {
  const [info, setInfo] = useState({
    event_title: "",
    event_description: "",
    event_localisation: "",
    event_date: "",
    eventPicture_url: "",
  });
  const [image, setImage] = useState();

  const onChange = (e) => {
    const post_url = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(post_url);
    reader.onloadend = () => {
      setImage(reader.result);
      setInfo({...info, eventPicture_url:reader.result});
    };
  };
  ///////////////////////
  const dispatch = useDispatch();
  const event = useSelector((state) => state.createEvent);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createEvent(info));
    await dispatch(getAllEvent());
  };
  return (
    <>
      <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Create New Event</h3>
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

            <div className="p-4">
              {/**/}
              <div className="md:flex flex-row md:space-x-4 w-full text-lg">
                <div className="mb-3 space-y-2 w-full text-lg">
                  <label className="font-semibold text-gray-900 py-2">
                    Event Title
                  </label>
                  <input
                    placeholder="Event Title "
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    required="required"
                    type="text"
                    name="EventTitle "
                    onChange={(e) =>
                      setInfo({ ...info, event_title: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="md:flex md:flex-row md:space-x-4 w-full text-lg">
                <div className="w-full flex flex-col mb-3">
                  <label className="font-semibold text-gray-900 py-2">
                    Event Date
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    type="date"
                    name="eventDate"
                    id=""
                    value={info.event_date}
                    onChange={(e) =>
                      setInfo({ ...info, event_date: e.target.value })
                    }
                  />
                </div>
                <div className="w-full flex flex-col mb-3">
                  <label className="font-semibold text-gray-900 py-2">
                    Location
                  </label>
                  <select
                    className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                    required="required"
                    name="integration[city_id]"
                    id="integration_city_id"
                    onChange={(e) =>
                      setInfo({ ...info, event_localisation: e.target.value })
                    }
                  >
                    <option value="">Select Event location</option>
                    <option value="">Sousse</option>
                    <option value="">Mahdia</option>
                    <option value="">Monastir</option>
                  </select>
                </div>
              </div>
              <div className="flex-auto w-full mb-1 text-lg space-y-2">
                <label className="font-semibold text-gray-900 py-2">
                  Description
                </label>
                <textarea
                  required=""
                  name="message"
                  onChange={(e) =>
                    setInfo({ ...info, event_description: e.target.value })
                  }
                  id=""
                  className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                  placeholder="Enter your Event info"
                  spellcheck="false"
                ></textarea>
                 <div className="icons flex text-gray-500 m-2">
        <form>
          <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            />
          </svg>
          <label className="fileContainer">
            <input type="file" onChange={onChange} />
          </label>
          {image && (
            <img src={image} alt="The current file" className="w-1/2 h-1/2" />
          )}
        </form>
      </div>
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
                className="bg-emerald-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleSubmit}
              >
                Add New Event
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default CreateEvent;
