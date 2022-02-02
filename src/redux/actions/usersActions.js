import axios from 'axios'
import { GET_USERS, USERS_ERROR, GET_USER, USER_ERROR, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_ERROR } from './UsersTypes'

export const getUsers = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://seniors-app.herokuapp.com/api/users/all/all`)
        dispatch( {
            type: GET_USERS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}

export const getotherUser = (info) => async dispatch => {
    try{
        const res = await axios.get(`http://seniors-app.herokuapp.com/api/users/user/`+info)
        dispatch( {
            type: GET_USER,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: USER_ERROR,
            payload: console.log(e),
        })
    }

}



export const updateUser = (info) => async dispatch => {
    dispatch({type:UPDATE_USER_REQUEST})
    try {
        const res = await axios.put(`http://seniors-app.herokuapp.com/api/users/`, info)
        dispatch( {
            type: UPDATE_USER_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch( {
            type: UPDATE_USER_ERROR,
            payload: console.log(error),
        })
    }
}

