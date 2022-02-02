import axios from "axios";
import { GET_CONV_BY_ID_FAILED, GET_CONV_BY_ID_REQUEST, GET_CONV_BY_ID_SUCCESS } from "./conversationTypes";



const token = localStorage.getItem("authToken")
export const getConv = (info) => async (dispatch) => {
    dispatch({ type: GET_CONV_BY_ID_REQUEST });
    try {
      const res = await axios.post(`http://seniors-app.herokuapp.com/api/conversation/`+info,{
        headers: {
            "authToken":token
        }
        
    })
      dispatch({
        type: GET_CONV_BY_ID_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: GET_CONV_BY_ID_FAILED,
        payload: console.log(e),
      });
    }
  };