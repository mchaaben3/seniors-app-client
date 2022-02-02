
import axios from 'axios'
import { CREATE_GROUP_FAILED, CREATE_GROUP_REQUEST, CREATE_GROUP_SUCCESS, DELETE_GROUP_FAILED, DELETE_GROUP_REQUEST, DELETE_GROUP_SUCCESS,  DELETE_MEMBER_GROUP_REQUEST,  GET_ALL_GROUPS_FAILED, GET_ALL_GROUPS_SUCCESS, GET_ALL_MEMBERS_GROUP_FAILED, GET_ALL_MEMBERS_GROUP_REQUEST, GET_ALL_MEMBERS_GROUP_SUCCESS, GET_MESSAGE_GROUP_FAILED, GET_MESSAGE_GROUP_REQUEST, GET_MESSAGE_GROUP_SUCCESS, JOIN_GROUP_FAILED, JOIN_GROUP_REQUEST, JOIN_GROUP_SUCCESS, LEAVE_GROUP_FAILED, LEAVE_GROUP_REQUEST, LEAVE_GROUP_SUCCESS, SEND_MESSAGE_GROUP_FAILED, SEND_MESSAGE_GROUP_REQUEST, SEND_MESSAGE_GROUP_SUCCESS } from "../actions/groupTypes"
const token = localStorage.getItem("authToken")

export const groupAction = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://seniors-app.herokuapp.com/api/group/`,{
            headers: {
                "authToken":token
            }
        })
        dispatch( {
            type: GET_ALL_GROUPS_SUCCESS,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: GET_ALL_GROUPS_FAILED,
            payload: error,
        })
    }

}


export const createGroup = (info) => async (dispatch) => {
    dispatch({type:CREATE_GROUP_REQUEST})
    try{
        const res = await axios.post(`http://seniors-app.herokuapp.com/api/group/`,info,{
            headers: {
                "authToken":token
            }
            
        })
        dispatch( {
            type: CREATE_GROUP_SUCCESS,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: CREATE_GROUP_FAILED,
            payload: error,
        })
    }
}


export const joinGroup = (info)=>async (dispatch) => {
    dispatch({type:JOIN_GROUP_REQUEST})
    try {
        const res = await axios.put('http://seniors-app.herokuapp.com/api/group/join/'+info)
        dispatch( {
            type: JOIN_GROUP_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch( {
            type: JOIN_GROUP_FAILED,
            payload: error,
        })
    }
}


export const leaveGroup = (info)=>async (dispatch) => {
    dispatch({type:LEAVE_GROUP_REQUEST})
    try {
        const res = await axios.put('http://seniors-app.herokuapp.com/api/group/leave/'+info)
        dispatch( {
            type: LEAVE_GROUP_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch( {
            type: LEAVE_GROUP_FAILED,
            payload: error,
        })
    }
}



export const getAllGroupMembers = (info)=>async (dispatch) => {
    dispatch({type:GET_ALL_MEMBERS_GROUP_REQUEST})
    try {
        const res = await axios.get('http://seniors-app.herokuapp.com/api/group/members/'+info,{
            headers: {
                "authToken":token
            } 
        })
        dispatch( {
            type: GET_ALL_MEMBERS_GROUP_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch( {
            type: GET_ALL_MEMBERS_GROUP_FAILED,
            payload: error,
        })
    }
}


export const DELETE_GROUP = (info)=>async (dispatch) => {
    dispatch({type:DELETE_GROUP_REQUEST})
    try {
        const res = await axios.delete('http://seniors-app.herokuapp.com/api/group/'+info,{
            headers: {
                "authToken":token
            } 
        })
        dispatch( {
            type: DELETE_GROUP_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch( {
            type: DELETE_GROUP_FAILED,
            payload: error,
        })
    }
}

export const DELETE_MEMBER = (info) => async (dispatch)=>{
    dispatch({type:DELETE_MEMBER_GROUP_REQUEST})
    try {
        // const res = await axios.delete('http://seniors-app.herokuapp.com/api/group/'+info,{
        //     headers: {
        //         "authToken":token
        //     } 
        // })
        // dispatch( {
        //     type: DELETE_MEMBER_GROUP_SUCCESS,
        //     payload: res.data
        // })
    } catch (error) {
        // dispatch( {
        //     type: DELETE_MEMBER_GROUP_FAILED,
        //     payload: error,
        // })
    }

}


export const SEND_MESSAGE = (id,message,userId) => async (dispatch)=>{
    dispatch({type:SEND_MESSAGE_GROUP_REQUEST})
    try {
        const res = await axios.put('http://seniors-app.herokuapp.com/api/group/messenger/'+id,{
            message: message,userId:userId })
        dispatch( {
            type: SEND_MESSAGE_GROUP_SUCCESS,
            payload: res.status
        })
    } catch (error) {
        dispatch( {
            type: SEND_MESSAGE_GROUP_FAILED,
            payload: error,
        })
    }

}

export const GET_MESSAGES = (id) => async (dispatch)=>{
    dispatch({type:GET_MESSAGE_GROUP_REQUEST})
    try {
        const res = await axios.get('http://seniors-app.herokuapp.com/api/group/messages/'+id)
        dispatch( {
            type: GET_MESSAGE_GROUP_SUCCESS,
            payload: res.data.messageOfGroup
        })
    } catch (error) {
        dispatch( {
            type: GET_MESSAGE_GROUP_FAILED,
            payload: error,
        })
    }

}