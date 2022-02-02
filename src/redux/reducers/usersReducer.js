import { GET_USER, GET_USERS, UPDATE_USER_ERROR, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, USER_ERROR } from "../actions/UsersTypes"

const initialState = {
    users:[],
    loading:true
}


const UserState = {
    oneUser : [],
    loading:true,
    error:[]
}
const updateState = {
    loading:false,
    isUpdated:false,
    error:false
}

export const usersReducer = (state = initialState, action)=>{

    switch(action.type){

        case GET_USERS:
        return {
            ...state,
            users:action.payload,
            loading:false

        }
        default: return state
    }

}


export const getUserReducer = (state = UserState, action)=>{

    switch(action.type){

        case GET_USER:
        return {
            ...state,
            user:action.payload,
            loading:false


        }
        case USER_ERROR:
            return {
               error:action.payload,
                user:[],
                loading:false
    
            }
           
        default: return state
    }

}



export const otherUser = (state = UserState, action)=>{

    switch(action.type){

        case GET_USER:
        return {
            ...state,
            oneUser:action.payload,
            loading:false


        }
        case USER_ERROR:
            return {
               error:action.payload,
                oneUser:[],
                loading:false
    
            }
           
        default: return state
    }

}

export const updateUser = (state = updateState, action) => {
    switch (action.type) {
        case UPDATE_USER_REQUEST:
           return  {
            loading:true,
            isUpdated:false,
            error:false
           } 
            
           case UPDATE_USER_SUCCESS:
            return  {
             loading:false,
             isUpdated:true,
             error:false
            } 
            case UPDATE_USER_ERROR:
                return  {
                 loading:false,
                 isUpdated:false,
                 error:true
                } 
        default:
            return state
    }
}