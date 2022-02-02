import { GET_SPECIFIC_BLACKLIST_MEMBERS_FAILED, GET_SPECIFIC_BLACKLIST_MEMBERS_REQUEST, GET_SPECIFIC_BLACKLIST_MEMBERS_SUCCESS } from "../actions/blackListTypes";

const BlacklistState = {
    loading:false,
    result:null,
    error:{}
}


export const getSpecificBlackListMember = (state = BlacklistState, action) => {
    switch (action.type) {
      case GET_SPECIFIC_BLACKLIST_MEMBERS_REQUEST:
        return {
          loading: true,
          ...state,
        };
      case GET_SPECIFIC_BLACKLIST_MEMBERS_SUCCESS:
        return {
          loading: false,
          result: action.payload,
          error: {},
        };
      case GET_SPECIFIC_BLACKLIST_MEMBERS_FAILED:
        return {
          error: action.payload,
          loading: false,
          result: null,
        };
      default:
        return state;
    }
  };
  