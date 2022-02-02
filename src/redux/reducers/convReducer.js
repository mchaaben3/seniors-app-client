import { GET_CONV_BY_ID_FAILED, GET_CONV_BY_ID_SUCCESS } from "../actions/conversationTypes"

const initialState = {
    conv : {},
    loading:false,
   error:false
}


export const convReducer =(state = initialState, action)=>{
    
    switch(action.type){
        
        case GET_CONV_BY_ID_SUCCESS:
        return {
            ...state,
            conv:action.payload,
            loading:false

        }
        case GET_CONV_BY_ID_FAILED:
            return{
                loading: false, 
                error: action.payload 
            }
        default: return state
    }

}