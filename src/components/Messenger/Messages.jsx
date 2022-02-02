import React from 'react'

const Messages = () => {
    return (
        <>
                  {/* Sender */}
          <div className="flex flex-row justify-end">
            <div className="messages text-sm text-white grid grid-flow-row gap-2">
             
              
              <div className="flex items-center flex-row-reverse group">
                <p className="px-6 py-3 rounded-b-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.</p>
              </div>
            </div>
          </div>
          {/* Reciever */}
          <div className="flex flex-row justify-start">
           
            <div className="messages text-sm text-gray-700 grid grid-flow-row gap-2">
              <div className="flex items-center group">
                <p className="px-6 py-3 rounded-t-full rounded-r-full messagesAndInputs max-w-xs lg:max-w-md text-gray-200">Hey! How are you?</p>
              </div>
             
             
            </div>
          </div>
        </>
    )
}

export default Messages
