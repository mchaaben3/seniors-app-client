import axios from "axios";
import {
  CREATE_POST_FAILED,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  DELETE_POST_FAILED,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  GET_ALL_COMMENT_FAILED,
  GET_ALL_COMMENT_REQUEST,
  GET_ALL_COMMENT_SUCCESS,
  GET_ALL_LIKES_FAILED,
  GET_ALL_LIKES_REQUEST,
  GET_ALL_LIKES_SUCCESS,
  GET_ALL_POSTS_FAILED,
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_SUCCESS,
  GET_POST_BY_USER_FAILED,
  GET_POST_BY_USER_REQUEST,
  GET_POST_BY_USER_SUCCESS,
  LIKE_POST_FAILED,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  POST_COMMENT_FAILED,
  POST_COMMENT_REQUEST,
  POST_COMMENT_SUCCESS,
  UNLIKE_POST_FAILED,
  UNLIKE_POST_REQUEST,
  UNLIKE_POST_SUCCESS,
} from "./postsTypes";
const token = localStorage.getItem("authToken")

export const getPosts = (info) => async (dispatch) => {
  
  dispatch({ type: GET_ALL_POSTS_REQUEST });
  try {
    if(info) {
      const res = await axios.get(`http://seniors-app.herokuapp.com/api/posts/user/`+info);
      dispatch({
        type: GET_ALL_POSTS_SUCCESS,
        payload: res.data,
      });
  }else {
    const res = await axios.get(`http://seniors-app.herokuapp.com/api/timeline/`);
    dispatch({
      type: GET_ALL_POSTS_SUCCESS,
      payload: res.data,
    });
  }
  } catch (e) {
    dispatch({
      type: GET_ALL_POSTS_FAILED,
      payload: console.log(e),
    });
  }
};

export const createPostAction = (info) => async (dispatch) => {
  dispatch({ type: CREATE_POST_REQUEST });

  try {
    const res = await axios.post(`http://seniors-app.herokuapp.com/api/posts/`, info);
    dispatch({
      type: CREATE_POST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_POST_FAILED,
      payload: console.log(error),
    });
  }
};


export const deletePostAction = (info) => async (dispatch)=> {
  dispatch({type:DELETE_POST_REQUEST})
  try {
    const response = await axios.delete('http://seniors-app.herokuapp.com/api/posts/'+info,{
  
      headers: {
          "authToken":token
      } })
    dispatch({
      type:DELETE_POST_SUCCESS,
      payload:response.data
    })
  } catch (error) {
      dispatch({
        type:DELETE_POST_FAILED,
        payload:error
      })
  }
}


export const getPostsByUserId = (info) => async (dispatch)=> {
  dispatch({type:GET_POST_BY_USER_REQUEST})
  try {
    const response = await axios.get('http://seniors-app.herokuapp.com/api/timeline/'+info)
    dispatch({
      type:GET_POST_BY_USER_SUCCESS,
      payload:response.data
    })
  } catch (error) {
      dispatch({
        type:GET_POST_BY_USER_FAILED,
        payload:console.log(error)
      })
  }
}



export const likePost = (info) => async (dispatch)=> {
  dispatch({type:LIKE_POST_REQUEST})
  try {
    const response = await axios.put('http://seniors-app.herokuapp.com/api/posts/'+info+'/like')
    dispatch({
      type:LIKE_POST_SUCCESS,
      payload:response.data
    })
  } catch (error) {
      dispatch({
        type:LIKE_POST_FAILED,
        payload:console.log(error)
      })
  }
}


export const unlikePost = (info) => async (dispatch)=> {
  dispatch({type:UNLIKE_POST_REQUEST})
  try {
    const response = await axios.put('http://seniors-app.herokuapp.com/api/posts/'+info+'/unlike')
    dispatch({
      type:UNLIKE_POST_SUCCESS,
      payload:response.data
    })
  } catch (error) {
      dispatch({
        type:UNLIKE_POST_FAILED,
        payload:console.log(error)
      })
  }
}



export const getAllLikes = (info) => async (dispatch)=> {
  dispatch({type:GET_ALL_LIKES_REQUEST})
  try {
    const response = await axios.get('http://seniors-app.herokuapp.com/api/posts/'+info+'/likes')
    dispatch({
      type:GET_ALL_LIKES_SUCCESS,
      payload:response.data
    })
  } catch (error) {
      dispatch({
        type:GET_ALL_LIKES_FAILED,
        payload:console.log(error)
      })
  }
}



export const post_comment = (id,comment) => async (dispatch)=> {
  dispatch({type:POST_COMMENT_REQUEST})
  try {
    const response = await axios.put('http://seniors-app.herokuapp.com/api/posts/'+id+'/comment',{
      comment: comment,
      headers: {
          "authToken":token
      } })
    console.log(id,comment)
    dispatch({
      type:POST_COMMENT_SUCCESS,
      payload:response.data
    })
  } catch (error) {
      dispatch({
        type:POST_COMMENT_FAILED,
        payload:console.log(error)
      })
  }
}



export const get_all_comments = (id) => async (dispatch)=> {
  dispatch({type:GET_ALL_COMMENT_REQUEST})
  try {
    const response = await axios.get('http://seniors-app.herokuapp.com/api/posts/'+id+'/comments',{
     
      headers: {
          "authToken":token
      } })
    dispatch({
      type:GET_ALL_COMMENT_SUCCESS,
      payload:response.data.comment
    })
  } catch (error) {
      dispatch({
        type:GET_ALL_COMMENT_FAILED,
        payload:console.log(error)
      })
  }
}

