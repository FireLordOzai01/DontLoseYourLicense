import axios from 'axios';

import {
    ADD_USER
} from './../constants';

export const getUser = () => async dispatch => {
    let response = await axios.get('http://localhost:5000/api/users');
    dispatch({ type: ADD_USER, payload: response.data })
}