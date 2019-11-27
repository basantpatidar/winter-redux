import { combineReducers } from 'redux';

const initialState = {
  search: '',
  apiResponse: null
<<<<<<< HEAD
};
=======
}
>>>>>>> 92c1709e1959979930d627d7c56967187277f3dd


const searchReducer = (state = initialState, action) => {
<<<<<<< HEAD
  if (action.type === 'CITY') {
    console.log(state, ' -< - <---  City  action');
    return {
      ...state,
      city: action.payload
    };
  }
  if (action.type === 'ZIP_CODE') {
    console.log('ZipCode');
    return {
      ...state,
      ...action.payload
    };
  }
  //  if(action.type === "SET_WEATHER"){
  //    return {
  //      ...state, apiResponse : action.payload
  //    }
  //  }
  return state;
};
=======
 if( action.type === "CITY" ){
   
     console.log(state ," -< - <---  City  action");
   return {
     ...state, city : action.payload
   }
 }
 if(action.type === "ZIP_CODE"){
   console.log("ZipCode");
   return {
     ...state, zipCode: action.payload
   }
 }
//  if(action.type === "SET_WEATHER"){
//    return {
//      ...state, apiResponse : action.payload
//    }
//  } 
 return state;
}
>>>>>>> 92c1709e1959979930d627d7c56967187277f3dd
export default combineReducers({
  searchReducer
});
