import axios from "axios"
import { CREATE_ARTICLES_FAILED, CREATE_ARTICLES_REQUEST, CREATE_ARTICLES_SUCCESS, GET_ARTICLES_FAILED, GET_ARTICLES_REQUEST, GET_ARTICLES_SUCCESS } from "./healthTypes"

export const addArticle = (info) => async dispatch => {
    dispatch( {
        type: CREATE_ARTICLES_REQUEST,
     
    })
    try{
        const res = await axios.post(`http://seniors-app.herokuapp.com/api/health/`,info)
        dispatch( {
            type: CREATE_ARTICLES_SUCCESS,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: CREATE_ARTICLES_FAILED,
            payload: error,
        })
    }

}

export const GET_ALL_ARTICLES = () => async dispatch => {
    dispatch( {
        type: GET_ARTICLES_REQUEST,
     
    })
    try{
        const res = await axios.get(`http://seniors-app.herokuapp.com/api/health/`)
        dispatch( {
            type: GET_ARTICLES_SUCCESS,
            payload: res.data
        })
    }
    catch(error){
        dispatch({
            type: GET_ARTICLES_FAILED,
            payload: error,
        })
    }

}