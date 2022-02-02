import {
  GET_PROFILE_REQUEST,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  UPDATE_STATUS_FAILED,
  UPDATE_STATUS_REQUEST,
  UPDATE_STATUS_SUCCESS,
} from "./authTypes";
import axios from "axios";
// import { prefix } from "../../helpers/helpers"

export const login = (info) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const res = await axios.post(`http://seniors-app.herokuapp.com/api/user/login`, info);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILED,
      payload: error,
    });
  }
};

export const updateUserStatus = (info,b) => async (dispatch)=> {
  dispatch({ type: UPDATE_STATUS_REQUEST });

  try {
    const res = await axios.put(`http://seniors-app.herokuapp.com/api/users/updatestatus/`+info, {b:b});
    dispatch({
      type: UPDATE_STATUS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_STATUS_FAILED,
      payload: error,
    });
  }
}

export const signup = (info) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });

  try {
    const res = await axios.post(
      "http://seniors-app.herokuapp.com/api/user/register",
      info
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAILED,
      payload: error,
    });
  }
};

export const getProfile = () => async (dispatch) => {
  dispatch({ type: GET_PROFILE_REQUEST });

  try {
    const res = await axios.post(`http://seniors-app.herokuapp.com/api/user/login`);
    console.log({ res });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILED,
      payload: error,
    });
  }
};
