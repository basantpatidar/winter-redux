// import axios from "axios";
const CITY = 'CITY';
const SET_WEATHER = "SET_WEATHER";
const ZIP_CODE = 'ZIP_CODE'

<<<<<<< HEAD
export const city = (name, value) => async dispatch => {
   
  dispatch ({
    type: CITY,
    payload: {[name]: value}
=======
export const city = (city) => async dispatch => {
   
  dispatch ({
    type: CITY,
    payload: city
>>>>>>> 92c1709e1959979930d627d7c56967187277f3dd
  });

  
}

export const zip = (zip) => async dispatch => {
  dispatch({
    type: ZIP_CODE,
    payload: zip
  })
}

export const SearchResult = (res) => dispatch => {
  // const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=`);
  dispatch({
    type: SET_WEATHER,
    payload: res
  });
}


<<<<<<< HEAD
//How do reducers know that specifically only that reduce is got called?
//I mean that there are several reducers so do every action gets checked in each reducer?
=======
>>>>>>> 92c1709e1959979930d627d7c56967187277f3dd
