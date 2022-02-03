import React from "react";

const ListOfGroupUsers = ({ picOfgroupUser, nameOfgroupUser, gender }) => {
  console.log(gender);
  return (
    <li className="relative">
       <div
                  className={`w-2 h-2 rounded-full 
                    bg-green-500
                 absolute   bottom-0 left-10`}
                ></div>
      <a
        href="#"
        class="flex rounded-full p-px w-16 h-16"
      >
          
        <img
        class="w-full h-full rounded-full"
          src={
            picOfgroupUser
              ? picOfgroupUser
              : "https://res.cloudinary.com/dp81gikbd/image/upload/v1643894684/anonyme_v2cws7.png"
          }
        />
    
      </a>
    </li>
  );
};

export default ListOfGroupUsers;
