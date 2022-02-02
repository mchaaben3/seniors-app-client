import React from "react";

const TODO = () => {
  return (
    <div className="ml-14  md:col-span-2 xl:col-span-4">
      <div className="rounded bg-blue-900 p-3">
        <div className="flex justify-between py-1 text-black dark:text-white">
          <h3 className="text-sm font-semibold text-white">Tasks in TO DO</h3>
        </div>
        {/* tasks.map () */}
        <div className="text-sm  mt-2">
          <div
            className="bg-white hover:bg-gray-50
                          p-2 rounded mt-1 border-b border-gray-100 cursor-pointer"
          >
            task here
            <div className="float-right text-red">
              <button className="text-red">
                <i className="fa fa-minus-square-o " />
              </button>
            </div>
          </div>
        </div>
        <div className="text-sm  mt-2">
          <div
            className="bg-white hover:bg-gray-50
                          p-2 rounded mt-1 border-b border-gray-100 cursor-pointer"
          >
            task here
            <div className="float-right text-red">
              <button className="text-red">
                <i className="fa fa-minus-square-o " />
              </button>
            </div>
          </div>
        </div>
        <div className="text-sm  mt-2">
          <div
            className="bg-white hover:bg-gray-50
                          p-2 rounded mt-1 border-b border-gray-100 cursor-pointer"
          >
            task here
            <div className="float-right text-red">
              <button className="text-red">
                <i className="fa fa-minus-square-o " />
              </button>
            </div>
          </div>
        </div>
        {/* } */}
        <input
          type="text"
          className="mt-3 text-gray-900 w-1/3 p-2"
          placeholder="Add something to do ..."
        />
      </div>
    </div>
  );
};

export default TODO;
