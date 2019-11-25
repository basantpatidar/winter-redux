import {combineReducers} from 'redux';

const initialState = {
  search: ''
}

const searchReducer = (state = initialState, action) => {
 if( action.type === "CURRENT_WEATHER" ){
   
     console.log("CURRENT_WEATHER  action");
   return {
     ...state, search : action.payload
   }
 }
 return state;
}
export default combineReducers({
  searchReducer
});