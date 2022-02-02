import React, { useEffect, useState } from "react";

const InviteUser = ({ setShowModal }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (!search) {
      return;
    }

    const findUsers = () => {
      setLoading(true);
      fetch(`https://seniors-app.herokuapp.com/api/users/ByName?keyword=${search}`)
        .then((res) => res.json())
        .then((res) => {
          setUsers(res);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    findUsers();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]); // every time search changes, we call the fn

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-1/4 my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-xl font-semibold">
                Invite User to your Group
              </h3>
              <button
                className="p-1 ml-auto  border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="h-6 w-6 text-2xl  ">X</span>
              </button>
            </div>
            {/*body*/}
            <div className="md:flex flex-row md:space-x-4 w-full text-lg">
              <div className="mb-3 space-y-2 w-full text-lg">
                <input
                  placeholder="Enter Name of User "
                  className="appearance-none block w-11/12 ml-2 bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  h-10 px-4"
                  required="required"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  type="text"
                  name="InviteFriend "
                />
              </div>
            </div>
            <ul className="md:flex flex-row md:space-x-4 w-full text-lg">
              {users &&
                users.map((u) => (
                  //onClick invite
                  <li
                    key={u._id}
                    class="flex mb-4 items-center cursor-pointer "
                  >
                    <div className="relative">
                      <img
                        src={
                          u.profilePicture
                            ? u.profilePicture
                            : "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                        }
                        alt="avatar"
                        className="object-cover w-10 h-10 mx-4 rounded-full"
                      />
                    </div>
                    <p>
                      <a
                        href="#"
                        class="mx-1 font-bold text-gray-700 hover:underline"
                      >
                        {u.full_name}
                      </a>
                    </p>
                  </li>
                ))}
            </ul>
            {/*footer*/}
            {/* <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
               
              </div> */}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default InviteUser;
