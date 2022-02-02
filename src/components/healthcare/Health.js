import React from "react";
import HealthModal from "./HealthModal";

const Health = ({ title, body, image }) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div class="max-w-sm rounded overflow-hidden shadow-sm">
      <div class="font-bold text-xl mb-2 p-2">{title}</div>

      {image ?( <> <img class="w-full h-44" src={image} alt="" /><div class="px-6 py-4">
        {body.length > 50 ? (
          <p class="text-gray-700 text-base">
            {body.substring(0, Math.min(150, body.length))}{" "}
            <strong
              onClick={() => setShowModal(true)}
              className="text-blue-500 cursor-pointer"
            >
              learn more{" "}
            </strong>{" "}
          </p>
        ) : (
          <p class="text-gray-700 text-base">{body}</p>
        )}
      </div></>)  : <div class="">
        {body.length > 150 ? (
          <p class="text-gray-700 text-base">
            {body.substring(0, Math.min(500, body.length))}{" "}
            <strong
              onClick={() => setShowModal(true)}
              className="text-blue-500 cursor-pointer"
            >
              learn more{" "}
            </strong>{" "}
          </p>
        ) : (
          <p class="text-gray-700 text-base">{body}</p>
        )}
      </div>}
    
      {showModal ? (
        <HealthModal setShowModal={setShowModal} body={body} />
      ) : null}
    </div>
  );
};

export default Health;
