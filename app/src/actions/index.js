import axiosWithAuth from '../helpers';
import axios from 'axios';
export const GET_FRIENDS_START = "GET_FRIENDS_START",
    GET_FRIENDS_SUCCESS = "GET_FRIENDS_SUCCESS",
    GET_FRIENDS_ERROR = "GET_FRIENDS_ERROR",
    SET_LOADING = "SET_LOADING";


export const getFriends = () => dispatch => {
    dispatch({type: SET_LOADING});
    dispatch({type: GET_FRIENDS_START})

    axios.get('http://localhost:5000')
        .then(response => {
            console.log(response);
            dispatch({type: GET_FRIENDS_SUCCESS, payload: response});
        })
        .catch(error => {console.log(error);
        dispatch({type: GET_FRIENDS_ERROR, payload: error})})
}