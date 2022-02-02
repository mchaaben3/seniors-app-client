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
  GET_ALL_POSTS_SUCCESS,
  GET_POST_BY_USER_FAILED,

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
} from "../actions/postsTypes";

const initialState = {
  allPosts: [],
  loading: false,
  error: "",
};
const GET_LIKES = {
  loading: false,
  all_likes: {},
  error: false,
};

const createPostState = {
  loading: false,
  isCreated: false,
  result: null,
};

const likePost = {
  loading: false,
  isLiked: false,
  error: {},
};

const notLiked = {
  loading: false,
  isnotLiked: false,
  error: null,
};

const post_comment_state = {
  loading: false,
  posted: false,
  error: null,
};
const allComments = {
  loading: false,
  comments: {},
  error: null,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        allPosts: action.payload,
        loading: false,
      };
    case GET_ALL_POSTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const createPost = (state = createPostState, action) => {
  switch (action.type) {
    case CREATE_POST_REQUEST:
      return {
        loading: false,
        ...state,
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        result: action.payload,
        isCreated: true,
      };
    case CREATE_POST_FAILED:
      return {
        result: action.payload,
        loading: false,
        isCreated: false,
      };
    default:
      return state;
  }
};

export const deletePost = (state = createPostState, action) => {
  switch (action.type) {
    case DELETE_POST_REQUEST:
      return {
        loading: true,
        isDeleted: false,
        error: {},
      };
    case DELETE_POST_SUCCESS:
      return {
        loading: false,
        isDeleted: true,
        error: {},
      };
    case DELETE_POST_FAILED:
      return {
        loading: false,
        isDeleted: false,
        error: action,
      };
    default:
      return state;
  }
};

export const getPostsByUserId = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_BY_USER_SUCCESS:
      return {
        ...state,
        allPosts: action.payload,
        loading: false,
      };
    case GET_POST_BY_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const likeaPost = (state = likePost, action) => {
  switch (action.type) {
    case LIKE_POST_REQUEST:
      return {
        loading: true,
        isLiked: false,
        error: {},
      };
    case LIKE_POST_SUCCESS:
      return {
        loading: false,
        isLiked: true,
        error: {},
      };
    case LIKE_POST_FAILED:
      return {
        loading: false,
        isLiked: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getLikes = (state = GET_LIKES, action) => {
  switch (action.type) {
    case GET_ALL_LIKES_REQUEST:
      return {
        loading: true,
        all_likes: {},
        error: false,
      };
    case GET_ALL_LIKES_SUCCESS:
      return {
        loading: false,
        all_likes: action.payload,
        error: false,
      };
    case GET_ALL_LIKES_FAILED:
      return {
        loading: false,
        all_likes: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export const unlikePost = (state = notLiked, action) => {
  switch (action.type) {
    case UNLIKE_POST_REQUEST:
      return {
        loading: true,
        isnotLiked: false,
        error: {},
      };
    case UNLIKE_POST_SUCCESS:
      return {
        loading: false,
        isnotLiked: true,
        error: {},
      };
    case UNLIKE_POST_FAILED:
      return {
        loading: false,
        isnotLiked: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const post_comment = (state = post_comment_state, action) => {
  switch (action.type) {
    case POST_COMMENT_REQUEST:
      return {
        loading: true,
        posted: false,
        error: null,
      };
    case POST_COMMENT_SUCCESS:
      return {
        loading: false,
        posted: true,
        error: null,
      };
    case POST_COMMENT_FAILED:
      return {
        loading: false,
        posted: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getAllComments = (state = allComments, action) => {
  switch (action.type) {
    case GET_ALL_COMMENT_REQUEST:
      return {
        loading: true,
        comments: {},
        error: null,
      };
    case GET_ALL_COMMENT_SUCCESS:
      return {
        loading: false,
        comments: action.payload,
        error: null,
      };
    case GET_ALL_COMMENT_FAILED:
      return {
        loading: false,
        comments: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
