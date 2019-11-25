import {combineReducers} from 'redux';

const initialState = {
  search: ''
}

const searchReducer = (state = initialState, action) => {
 if( action.type === "CURRENT_WEATHER" ){
   
     console.log(state ,"CURRENT_WEATHER  action");
   return {
     ...state, search : action.payload
   }
 }
 if(action.type === "SET_WEATHER"){
   return {
     ...state, apiResponse : action.payload
   }
 }
 return state;
}
export default combineReducers({
  searchReducer
});