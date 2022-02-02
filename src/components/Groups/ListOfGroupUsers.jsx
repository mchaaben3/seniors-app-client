import React from 'react'

const ListOfGroupUsers = ({picOfgroupUser,nameOfgroupUser}) => {
    return (
        <div className="p-2 ">
        <div className="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg relative">
            <div className="w-16 h-16 relative flex flex-shrink-0">
                <img className="shadow-md rounded-full w-full h-full object-cover"
                     src={picOfgroupUser?picOfgroupUser:'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-group-512.png'}
                     alt=""
                />
            </div>
            <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                <p>{nameOfgroupUser}</p>
              
            </div>
        </div>
       
    </div>
    )
}

export default ListOfGroupUsers
