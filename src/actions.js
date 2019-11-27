import axios from 'axios';
const CURRENT_WEATHER = 'CURRENT_WEATHER';
const SET_WEATHER = 'SET_WEATHER';

export const currentWeather = city => async dispatch => {
  const res = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  );
  console.log(res);

  dispatch({
    type: CURRENT_WEATHER,
    payload: city
  });

  // const res = await axios.get(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=31e12e179d9d9f7a0e0ba5d7c45a32a6`);
  // dispatch({
  //   type: "SET_WEATHER",
  //   payload: res
  // })
};
