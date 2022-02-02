import React from "react"
const ProfileName =  ({userConnected}) => {


    
    return (
        <div className="text-center shadow-xs  lg:-mt-14 lg:mx-4 lg:text-left ">

            <h5 className="mx-1 mt-8 font-bold text-blue-700 text-5xl hover:text-gray-600 hover:underline">{userConnected.full_name ?userConnected.full_name :'undefined' }</h5>
            {/* <h5 className="mx-1 mt-8 font-bold text-blue-700 text-5xl hover:text-gray-600 hover:underline">Mahdi</h5>  */}
      </div>
    )
}

export default ProfileName
