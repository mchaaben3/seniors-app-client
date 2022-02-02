import { combineReducers } from "redux";
import { authReducer, signupReducer, updateStatus, updateStatusUser } from "./authReducer";
import { getSpecificBlackListMember } from "./blackListReducer";
import { convReducer } from "./convReducer";
import { createEvent, deleteEvent, getAllEvent, leaveEvent, participateToEvent } from "./eventReducer";
import {
  createGroup,
  deleteGroup,
  getAllGroupMembers,
  GET_MESSAGE,
  groupsReducer,
  joinGroup,
  leaveGroup,
  send_message,
} from "./groupsReducer";
import {
  createPost,
  deletePost,
  getAllComments,
  getLikes,
  getPostsByUserId,
  get_all_comments,
  likeaPost,
  postsReducer,
  post_comment,
  unlikePost,
} from "./postsReducer";
import {
  otherUser,
  getUserReducer,
  updateUser,
  usersReducer,
} from "./usersReducer";

import {
  createArticle, getArticles
} from "./healthReducer";


export default combineReducers({
  auth: authReducer,
  signup: signupReducer,
  users: usersReducer,
  getGroups: groupsReducer,
  createGroup: createGroup,
  getAllPosts: postsReducer,
  getOneUser: getUserReducer,
  createPost: createPost,
  updateUser: updateUser,
  deletePost: deletePost,
  otherUser: otherUser,
  getPostsByUserId: getPostsByUserId,
  convReducer: convReducer,
  joinGroup: joinGroup,
  getAllGroupMembers: getAllGroupMembers,
  leaveGroup: leaveGroup,
  createEvent:createEvent,
  getAllEvent:getAllEvent,
  getSpecificBlackListMember:getSpecificBlackListMember,
  participateToEvent:participateToEvent,
  leaveEvent:leaveEvent,
  likeaPost:likeaPost,
  getLikes:getLikes,
  unlikePost:unlikePost,
  post_comment:post_comment,
  getAllComments:getAllComments,
  deleteGroup:deleteGroup,
  deleteEvent:deleteEvent,
  send_message:send_message,
  GET_MESSAGE:GET_MESSAGE,
  updateStatusUser:updateStatusUser,
  article : createArticle,
  getArticles:getArticles

});
