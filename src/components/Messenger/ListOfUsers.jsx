import React from 'react'

const ListOfUsers = () => {
    return (
        <div className="p-2 ">
        <div className="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg relative">
            <div className="w-16 h-16 relative flex flex-shrink-0">
                <img className="shadow-md rounded-full w-full h-full object-cover"
                     src="https://randomuser.me/api/portraits/women/61.jpg"
                     alt=""
                />
            </div>
            <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                <p>Angelina Jolie</p>
              
            </div>
        </div>
       
    </div>
    )
}

export default ListOfUsers
