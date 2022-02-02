import {
  CREATE_GROUP_FAILED,
  CREATE_GROUP_REQUEST,
  CREATE_GROUP_SUCCESS,
  DELETE_GROUP_FAILED,
  DELETE_GROUP_REQUEST,
  DELETE_GROUP_SUCCESS,
  GET_ALL_GROUPS_FAILED,
  GET_ALL_GROUPS_SUCCESS,
  GET_ALL_MEMBERS_GROUP_FAILED,
  GET_ALL_MEMBERS_GROUP_REQUEST,
  GET_ALL_MEMBERS_GROUP_SUCCESS,
  GET_MESSAGE_GROUP_FAILED,
  GET_MESSAGE_GROUP_REQUEST,
  GET_MESSAGE_GROUP_SUCCESS,
  JOIN_GROUP_FAILED,
  JOIN_GROUP_REQUEST,
  JOIN_GROUP_SUCCESS,
  LEAVE_GROUP_FAILED,
  LEAVE_GROUP_REQUEST,
  LEAVE_GROUP_SUCCESS,
  SEND_MESSAGE_GROUP_FAILED,
  SEND_MESSAGE_GROUP_REQUEST,
  SEND_MESSAGE_GROUP_SUCCESS,
} from "../actions/groupTypes";

const initialState = {
  Allgroups: [],
  loading: false,
};
const deleteState = {
  delete: false,
  loading: false,
  error: null,
};
const join = {
  join: "",
  loading: false,
  error: false,
};

const leave = {
  leave: "",
  loading: false,
  error: false,
};
const get_All_members = {
  members: [],
  loading: false,
  error: false,
};

const createGroupState = {
  loading: false,
  isCreated: false,
  result: null,
};

const send_message_state = {
  loading: false,
  send: "",
  error: "",
};

const get_messages = {
  loading: false,
  messages: [],
  error: "",
};

export const groupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_GROUPS_SUCCESS:
      return {
        ...state,
        Allgroups: action.payload,
        loading: false,
      };
    case GET_ALL_GROUPS_FAILED:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const createGroup = (state = createGroupState, action) => {
  switch (action.type) {
    case CREATE_GROUP_REQUEST:
      return {
        loading: false,
        ...state,
      };
    case CREATE_GROUP_SUCCESS:
      return {
        ...state,
        result: action.payload,
        isCreated: true,
      };
    case CREATE_GROUP_FAILED:
      return {
        result: action.payload,
        loading: false,
        isCreated: false,
      };
    default:
      return state;
  }
};

export const joinGroup = (state = join, action) => {
  switch (action.type) {
    case JOIN_GROUP_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case JOIN_GROUP_SUCCESS:
      return {
        ...state,
        join: action.payload,
        loading: false,
      };
    case JOIN_GROUP_FAILED:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export const leaveGroup = (state = leave, action) => {
  switch (action.type) {
    case LEAVE_GROUP_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case LEAVE_GROUP_SUCCESS:
      return {
        ...state,
        leave: action.payload,
        loading: false,
      };
    case LEAVE_GROUP_FAILED:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export const getAllGroupMembers = (state = get_All_members, action) => {
  switch (action.type) {
    case GET_ALL_MEMBERS_GROUP_REQUEST:
      return {
        members: [],
        loading: true,
        error: false,
      };
    case GET_ALL_MEMBERS_GROUP_SUCCESS:
      return {
        members: action.payload,
        loading: false,
        error: false,
      };
    case GET_ALL_MEMBERS_GROUP_FAILED:
      return {
        members: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
export const deleteGroup = (state = deleteState, action) => {
  switch (action.type) {
    case DELETE_GROUP_REQUEST:
      return {
        delete: false,
        loading: true,
        error: null,
      };
    case DELETE_GROUP_SUCCESS:
      return {
        delete: true,
        loading: false,
        error: null,
      };
    case DELETE_GROUP_FAILED:
      return {
        delete: false,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const send_message = (state = send_message_state, action) => {
  switch (action.type) {
    case SEND_MESSAGE_GROUP_REQUEST:
      return {
        send: "",
        loading: true,
        error: "",
      };
    case SEND_MESSAGE_GROUP_SUCCESS:
      return {
        send: action.payload,
        loading: false,
        error: "",
      };
    case SEND_MESSAGE_GROUP_FAILED:
      return {
        send: "",
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const GET_MESSAGE = (state = get_messages, action) => {
  switch (action.type) {
    case GET_MESSAGE_GROUP_REQUEST:
      return {
        loading: true,
        messages: [],
        error: "",
      };
    case GET_MESSAGE_GROUP_SUCCESS:
      return {
        loading: false,
        messages: action.payload,
        error: "",
      };
    case GET_MESSAGE_GROUP_FAILED:
      return {
        loading: false,
        messages: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
