// import axios from "axios";
const CITY = 'CITY';
const SET_WEATHER = 'SET_WEATHER';
const ZIP_CODE = 'ZIP_CODE';

export const city = (name, value) => async dispatch => {
  dispatch({
    type: CITY,
    payload: { [name]: value }
  });
};

export const zip = zip => async dispatch => {
  dispatch({
    type: ZIP_CODE,
    payload: zip
  });
};
//for hourly weather
export const hour = hour => async dispatch => {
  dispatch({
    type: 'HOURLY',
    payload: hour
  });
};

//need check
 export const SearchResult = res => dispatch => {
   const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=`);
   dispatch({
     type: SET_WEATHER,
     payload: res
   });
 };

//How do reducers know that specifically only that reduce is got called?
//I mean that there are several reducers so do every action gets checked in each reducer?

// const objO = {a : 1};
// const objT = {b:2};
// const objTh = {c:3};
// const objF = {d:4};
// const objFi = {e:5};
// const objS = {...objO, ...objT, ...objTh, objF, objFi};
// console.log(objS);

// const newObj = {};
// const obj = () => {
//   const objects = [{a:1}, {b:2}, {c:3}, {d:4}, {e:5}];
//   objects.map( (o) => {
//     return  {...o, ...};
//   })
//   return newObj;
// }
// obj();
