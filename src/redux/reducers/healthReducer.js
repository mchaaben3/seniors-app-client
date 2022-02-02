import { CREATE_ARTICLES_FAILED, CREATE_ARTICLES_REQUEST, CREATE_ARTICLES_SUCCESS, GET_ARTICLES_FAILED, GET_ARTICLES_REQUEST, GET_ARTICLES_SUCCESS } from "../actions/healthTypes";
const ArticleState = {
    loading: false,
    isCreated: false,
    result: null,
  };
  const GET_ARTICLES = {
    loading: false,
    ARTICLES:null,
    error: false,
  }
export const createArticle = (state = ArticleState, action) => {
    switch (action.type) {
      case CREATE_ARTICLES_REQUEST:
        return {
          loading: false,
          ...state,
        };
      case CREATE_ARTICLES_SUCCESS:
        return {
          ...state,
          result: action.payload,
          isCreated: true,
        };
      case CREATE_ARTICLES_FAILED:
        return {
          result: action.payload,
          loading: false,
          isCreated: false,
        };
      default:
        return state;
    }
  };

  export const getArticles = (state = GET_ARTICLES, action) => {
    switch (action.type) {
      case GET_ARTICLES_REQUEST:
        return {
          loading: true,
          ...state,
        };
      case GET_ARTICLES_SUCCESS:
        return {
          loading: false,
          ARTICLES: action.payload,
          error: false,
        };
      case GET_ARTICLES_FAILED:
        return {
          error: action.payload,
          loading: false,
          ARTICLES: {},
        };
      default:
        return state;
    }
  };