import React from "react";

const Paginate = ({ pagination, postsPerPage, totalPosts }) => {
  const PageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    PageNumbers.push(i);
  }

  return (
    <div>
      <ul className="flex pl-0 list-none rounded my-2">
        {PageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => pagination(number)}
            className="relative block py-2 px-3  cursor-pointer leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200"
          >
            <span  className="">
              {" "}
              {number}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Paginate;
