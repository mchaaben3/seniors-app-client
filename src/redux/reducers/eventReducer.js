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
} from "../actions/eventTypes";
const eventState = {
  loading: false,
  isCreated: false,
  result: null,
};
const participate = { loading: false, particip: {}, error: false };
const leave = { loading: false, leave: false, error: false };
const delEvent = {
  delete:false,
  loading:false,
  error:null
}
const get_all_events = {
  loading: false,
  allEvent: {},
  error: false,
};
export const createEvent = (state = eventState, action) => {
  switch (action.type) {
    case CREATE_EVENT_REQUEST:
      return {
        loading: false,
        ...state,
      };
    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        result: action.payload,
        isCreated: true,
      };
    case CREATE_EVENT_FAILED:
      return {
        result: action.payload,
        loading: false,
        isCreated: false,
      };
    default:
      return state;
  }
};

export const getAllEvent = (state = get_all_events, action) => {
  switch (action.type) {
    case GET_ALL_EVENTS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case GET_ALL_EVENTS_SUCCESS:
      return {
        loading: false,
        allEvent: action.payload,
        error: false,
      };
    case GET_ALL_EVENTS_FAILED:
      return {
        error: action.payload,
        loading: false,
        allEvent: {},
      };
    default:
      return state;
  }
};

export const participateToEvent = (state = participate, action) => {
  switch (action.type) {
    case PARTICIPATE_EVENT_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case PARTICIPATE_EVENT_SUCCESS:
      return {
        loading: false,
        particip: action.payload,
        error: false,
      };
    case PARTICIPATE_EVENT_FAILED:
      return {
        error: action.payload,
        loading: false,
        particip: {},
      };
    default:
      return state;
  }
};



export const leaveEvent = (state = leave, action) => {
  switch (action.type) {
    case LEAVE_EVENT_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case LEAVE_EVENT_SUCCESS:
      return {
        loading: false,
        leave: true,
        error: false,
      };
    case LEAVE_EVENT_FAILED:
      return {
        error: action.payload,
        loading: false,
        leave: false,
      };
    default:
      return state;
  }
};

export const deleteEvent = (state = delEvent, action) => {
  switch (action.type) {
    case DELETE_EVENT_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case DELETE_EVENT_SUCCESS:
      return {
        loading: false,
        delete: true,
        error: false,
      };
    case DELETE_EVENT_FAILED:
      return {
        error: action.payload,
        loading: false,
        delete: false,
      };
    default:
      return state;
  }
};