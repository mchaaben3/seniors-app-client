
import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllEvent } from '../../redux/actions/eventActions';
import { deletePostAction } from '../../redux/actions/postsAction';
import Events from './Events';
import Sidebar from './Sidebar';



const EventsA = () => {
const [events, setEvents] = useState([])
const ALL_EVENTS = useSelector((state) => state.getAllEvent);

const  dispatch = useDispatch()
// const handleDelete = (id)=>{
// dispatch(deletePostAction(id))
// }
  useEffect(() => {
    dispatch(getAllEvent());
  }, [])
  return (
    <div className="min-h-screen flex flex-col flex-auto mt-14 flex-shrink-0 antialiased bg-gray-200  text-black ">
    <center>
      <h1 className="text-6xl mt-4">ADMIN DASHBOARB</h1>
    </center>
    <Sidebar />

    <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
      <div class="grid grid-cols-4  sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
      {

ALL_EVENTS&&
  ALL_EVENTS.allEvent.length > 0 &&
  ALL_EVENTS.allEvent.map((e) => (
    <Events
    idOfEvent={e._id}
  
    creator_id={e.creator_id}
      event_title={e.event_title}
      event_description={e.event_description}
      event_localisation={e.event_localisation}
      event_date={e.event_date}
      eventPicture={e.eventPicture}
      event_members_id={e.event_members_id}
    />
  ))
  }
      </div>
    </div>
  

  </div>
   
   )}

export default EventsA





