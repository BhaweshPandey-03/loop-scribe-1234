import axios from "axios";
import {
  ADD_TO_CART,
  CHANGE_LOGIN_LOGOUT,
  CHANGE_LOGIN_REQUEST,
  CHANGE_LOGIN_STATUS,
  CHANGE_THEME,
  DELETE_FROM_CART,
  GET_COLLEGE_FAILURE,
  GET_COLLEGE_REQUEST,
  GET_COLLEGE_SUCCESS,
  GET_COURSES_REQUEST,
  GET_COURSES_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  SORT_COURSES,
  UPDATE_CART_PRICE,
  url,
} from "./action";
import { useNavigate } from "react-router-dom";

export const addcollege_success = (college) => {
  return {
    type: GET_COLLEGE_SUCCESS,
    payload: college,
  };
};
export const addcollege_request = () => {
  return {
    type: GET_COLLEGE_REQUEST,
  };
};
export const addcollege_failure = () => {
  return {
    type: GET_COLLEGE_FAILURE,
  };
};

export const addusers_request = () => {
  return {
    type: GET_USER_REQUEST,
  };
};

export const adduser_success = (user) => {
  return {
    type: GET_USER_SUCCESS,
    payload: user,
  };
};
export const adduser_failure = () => {
  return {
    type: GET_USER_FAILURE,
  };
};
export const change_login = () => {
  return {
    type: CHANGE_LOGIN_STATUS,
  };
};
export const sortCourses = (criteria) => {
  return {
    type: SORT_COURSES,
    payload: criteria,
  };
};
export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};
export const deleteFromCart = (data) => {
  return {
    type: DELETE_FROM_CART,
    payload: data,
  };
};

export const change_theme = () => {
  return {
    type: CHANGE_THEME,
  };
};
export const getCollege = () => {
  return async (dispatch) => {
   
    dispatch({ type: GET_COLLEGE_REQUEST });
    try {
      let data = await axios.get("http://localhost:8080/colleges");
     
      dispatch({
        type: GET_COLLEGE_SUCCESS,
        payload: { isLoading: false, colleges: data.data },
      });
    } catch(err) {
      console.log(err)
    }
  };
};
export const set_cart_price = (price) => {
 
  return {
    type: UPDATE_CART_PRICE,
    payload: price,
  };
};
export const getCourses = (search) => {
  return async (dispatch) => {
    dispatch({ type: GET_COURSES_REQUEST });
    try {
      if (search) {
      
        let data = await axios.get(`${url}/courses?${search}`);

        console.log(`${url}/courses?courseTitle_like=${search}`);
        dispatch({
          type: GET_COURSES_SUCCESS,
          payload: { isLoading: false, courses: data.data },
        });
      } else {
        let data = await axios.get(`${url}/courses`);
       
        dispatch({
          type: GET_COURSES_SUCCESS,
          payload: { isLoading: false, courses: data.data },
        });
      }
    } catch {}
  };
};


export const getLogged = (email, pass) => {
  return async (dispatch) => {
    dispatch({ type: CHANGE_LOGIN_REQUEST });
    try {
      let res = (await axios.get(`${url}/users`)).data;
     

      const user = res.find(
        (u) =>
          (u.username === email || u.email === email) && u.password === pass
      );
      if (user) {
        dispatch({ type: GET_USER_SUCCESS, payload: user });
        dispatch({ type: CHANGE_LOGIN_STATUS, payload: true });
      } else {
        dispatch({ type: GET_USER_FAILURE });
        dispatch({ type: CHANGE_LOGIN_LOGOUT });
      }
      console.log("not getting", user);
    } catch (e) {
      dispatch({ type: GET_USER_FAILURE });
      dispatch({ type: CHANGE_LOGIN_LOGOUT });
    }
  };
};
