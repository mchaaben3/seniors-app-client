import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getConv } from "../../redux/actions/conversationActions";
import ListOfUsers from "./ListOfUsers";
import Messenger from "./Messenger";

const MessengerContainer = () => {
  let { id } = useParams();

  const dispatch = useDispatch();
  const getConver = useSelector((state) => state.convReducer);
  const { loading, error, conv } = getConver;
  useEffect(() => {
    dispatch(getConv(id));
  }, []);
  console.log(getConver);
  return (
    <section className=" mx-2 mt-28   lg:flex-row lg:flex lg:mx-10 justify-between ">
      <div className="flex flex-row w-1/3 overflow-y-scroll messenger ">
        <ListOfUsers />
      </div>
      {}
      <Messenger />
    </section>
  );
};

export default MessengerContainer;
