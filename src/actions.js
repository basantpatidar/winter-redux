// import axios from "axios";
const CITY = 'CITY';
const SET_WEATHER = "SET_WEATHER";
const ZIP_CODE = 'ZIP_CODE'

export const city = (name, value) => async dispatch => {
   
  dispatch ({
    type: CITY,
    payload: {[name]: value};
  });

  
}

export const zip = (zip) => async dispatch => {
  dispatch({
    type: ZIP_CODE,
    payload: zip
  })
}
export const hour = (hour) => async dispatch => {
  dispatch({
    type: HOURLY,
    payload: hour
  })
}

export const SearchResult = (res) => dispatch => {
  // const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=`);
  dispatch({
    type: SET_WEATHER,
    payload: res
  });
}

//How do reducers know that specifically only that reduce is got called?
//I mean that there are several reducers so do every action gets checked in each reducer?

