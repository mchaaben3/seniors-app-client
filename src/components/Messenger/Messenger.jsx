import React from 'react'
import Messages from './Messages'
import './messenger.css'

const Messenger = () => {
    return (
        
<div className="messenger  w-2/3 flex  text-gray-200  overflow-hidden">
  <div className="flex-1 flex flex-col">
    <main className="flex-grow flex flex-row min-h-0">
      <section className="flex flex-col flex-auto  border-gray-800">
        <div className="chat-header px-6 py-4 flex flex-row flex-none justify-between items-center shadow">
          <div className="flex">
            <div className="w-12 h-12 mr-4 relative flex flex-shrink-0">
              <img className="shadow-md rounded-full w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/33.jpg" alt="" />
            </div>
            <div className="text-sm">
              <p className="font-bold">Scarlett Johansson</p>
            </div>
          </div>
        </div>
        <div className="chat-body p-4 flex-1 overflow-y-scroll">
            <Messages />
         
        </div>
        <div className="chat-footer flex-none">
          <div className="flex flex-row items-center p-4">
            <div className="relative flex-grow">
              <label>
                <input className="rounded-full messagesAndInputs py-2 pl-3 pr-10 w-full  text-gray-900" type="text" value="" placeholder="Aa" />
                <button type="button" className="absolute top-0 right-0 mt-2 mr-4 flex flex-shrink-0 focus:outline-none block text-gray-900 hover:text-gray-700 w-6 h-6">
                <i class="fa fa-paper-plane-o" aria-hidden="true"></i>

                </button>
              </label>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</div>

    )
}

export default Messenger
