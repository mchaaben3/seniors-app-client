import axios from "axios"
import { GET_SPECIFIC_BLACKLIST_MEMBERS_FAILED, GET_SPECIFIC_BLACKLIST_MEMBERS_REQUEST, GET_SPECIFIC_BLACKLIST_MEMBERS_SUCCESS } from "./blackListTypes"


const token = localStorage.getItem('authToken')
export const getSpecificBlackListMember = (info)=>async (dispatch) => {
    dispatch({type:GET_SPECIFIC_BLACKLIST_MEMBERS_REQUEST})
    try {
        const res = await axios.get('http://seniors-app.herokuapp.com/api/blacklist/specific/user',{
            headers: {
                "authToken":token
            } 
        })
        dispatch( {
            type: GET_SPECIFIC_BLACKLIST_MEMBERS_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch( {
            type: GET_SPECIFIC_BLACKLIST_MEMBERS_FAILED,
            payload: error,
        })
    }
}
