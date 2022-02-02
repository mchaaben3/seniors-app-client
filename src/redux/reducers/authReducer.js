import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  UPDATE_STATUS_FAILED,
  UPDATE_STATUS_REQUEST,
  UPDATE_STATUS_SUCCESS,
} from "../actions/authTypes";

const initState = {
  auToken: localStorage.getItem("authToken"),
  isAuth: localStorage.getItem("isAuth"),
  user: null,
  loading: false,
};
const signupState = {
  token: localStorage.getItem("authToken"),
   isAuth: localStorage.getItem("isAuth"),
  loading: false,
};

const updateStatus = {
  error:"",
  result:"",
  loading: false,
};

export const signupReducer = (state = signupState, { type, payload }) => {

  switch (type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      localStorage.setItem("authToken", payload);
      localStorage.setItem("isAuth", true);
      return {
        ...state,
        loading: false,
        isAuth: true,
        authToken: payload,
      };
    case REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        isAuth: false,
        token: null,
      };
    default:
      return state;
  }
};
export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("authToken", payload);
      localStorage.setItem("isAuth", true);
      return {
        ...state,
        loading: false,
        isAuth: true,
        token: payload,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        isAuth: false,
        token: null,
      };
    default:
      return state;
  }
};

export const updateStatusUser = (state = updateStatus, { type, payload }) => {
  switch (type) {
    case UPDATE_STATUS_REQUEST:
      return {
        error:"",
        result:"",
        loading: true
      };
    case UPDATE_STATUS_SUCCESS:
     
      return {
        error:"",
  result:payload,
  loading: false
      };
    case UPDATE_STATUS_FAILED:
      return {
        error:payload,
        result:"",
        loading: false
      };
    default:
      return state;
  }
};

