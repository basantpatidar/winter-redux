import axios from "axios";
const CURRENT_WEATHER = 'CURRENT_WEATHER';

export const currentWeather = (city) => {
  const res = axios.get("");
  return {
    type: CURRENT_WEATHER,
    payload: city
  }
}