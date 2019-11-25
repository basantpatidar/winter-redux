import axios from "axios";
const CURRENT_WEATHER = 'CURRENT_WEATHER';
const SET_WEATHER = "SET_WEATHER";

export const currentWeather = city => async dispatch => {
  // const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0dce981b281f3cfbd3f3ef95aab5a6c2`);
  // console.log(res); 
  
  dispatch ({
    type: CURRENT_WEATHER,
    payload: city
  });

  const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=`);
  dispatch({
    type: SET_WEATHER,
    payload: res.data
  })
}