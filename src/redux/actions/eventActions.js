import axios from "axios";
import {
  CREATE_EVENT_FAILED,
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  DELETE_EVENT_FAILED,
  DELETE_EVENT_REQUEST,
  DELETE_EVENT_SUCCESS,
  GET_ALL_EVENTS_FAILED,
  GET_ALL_EVENTS_REQUEST,
  GET_ALL_EVENTS_SUCCESS,
  LEAVE_EVENT_FAILED,
  LEAVE_EVENT_REQUEST,
  LEAVE_EVENT_SUCCESS,
  PARTICIPATE_EVENT_FAILED,
  PARTICIPATE_EVENT_REQUEST,
  PARTICIPATE_EVENT_SUCCESS,
} from "./eventTypes";



const token = localStorage.getItem("authToken");

export const createEvent = (info) => async (dispatch) => {
  dispatch({ type: CREATE_EVENT_REQUEST });
  try {
    const res = await axios.post(`http://seniors-app.herokuapp.com/api/event/`, info, {
      headers: {
        authToken: token,
      },
    });
    dispatch({
      type: CREATE_EVENT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_EVENT_FAILED,
      payload: error,
    });
  }
};


export const getAllEvent = ()=>async (dispatch) => {
    dispatch({type:GET_ALL_EVENTS_REQUEST})
    try {
        const res = await axios.get('http://seniors-app.herokuapp.com/api/event/all/all',{
            headers: {
                "authToken":token
            } 
        })
        dispatch( {
            type: GET_ALL_EVENTS_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch( {
            type: GET_ALL_EVENTS_FAILED,
            payload: error,
        })
    }
}


export const participateToEvent = (info,userConnected)=>async (dispatch) => {
  dispatch({type:PARTICIPATE_EVENT_REQUEST})
  try {
      const res = await axios.put('http://seniors-app.herokuapp.com/api/event/join/'+info, {userConnected:userConnected
    })
      dispatch( {
          type: PARTICIPATE_EVENT_SUCCESS,
          payload: res.data
      })
  } catch (error) {
      dispatch( {
          type: PARTICIPATE_EVENT_FAILED,
          payload: error,
      })
  }
}



export const leaveEvent = (info,userConnected)=>async (dispatch) => {
  dispatch({type:LEAVE_EVENT_REQUEST})
  try {
      const res = await axios.put('http://seniors-app.herokuapp.com/api/event/leave/'+info, {userConnected:userConnected
    })
      dispatch( {
          type: LEAVE_EVENT_SUCCESS,
          payload: res.data
      })
  } catch (error) {
      dispatch( {
          type: LEAVE_EVENT_FAILED,
          payload: error,
      })
  }
}


export const deleteEvent = (info)=>async (dispatch) => {
  dispatch({type:DELETE_EVENT_REQUEST})
  try {
      const res = await axios.delete('http://seniors-app.herokuapp.com/api/event/'+info,{
          headers: {
              "authToken":token
          } 
      })
      dispatch( {
          type: DELETE_EVENT_SUCCESS,
          payload: res.data
      })
  } catch (error) {
      dispatch( {
          type: DELETE_EVENT_FAILED,
          payload: error,
      })
  }
}