import axios from 'axios';

import {
    ADD_USER,
    DELETE_USER,
    EDIT_USER,
    GET_USERS,
    GET_USER_BY_ID,
    GET_USER_TOKEN,
    ADD_ARTICLE,
    DELETE_ARTICLE,
    EDIT_ARTICLE,
    GET_ARTICLES
} from './../constants';

export const addUser = user => async dispatch => {
    console.log(user);
    let response = await axios.post('http://localhost:5000/api/token/register', user);
    console.log(response);
    dispatch({ type: ADD_USER, payload: response.data })
}

export const deleteUser = id => async dispatch => {
    let response = await axios.delete(`http://localhost:5000/api/users/${id}`);
    dispatch({ type: DELETE_USER, payload: response.data })
}

export const editUser = (id, user) => async dispatch => {
    let response = await axios.put(`http://localhost:5000/api/users/${id}`, user);
    dispatch({ type: EDIT_USER, payload: response.data });
}

export const getUserToken = (user) => async dispatch => {
    let response = await axios.post('http://localhost:5000/api/token/loginUser', user);
    dispatch({ type: GET_USER_TOKEN, token: response.data.token });
    dispatch({ type: GET_USER_BY_ID, payload: response.data.user })
}

export const getUsers = () => async dispatch => {
    let response = await axios.get('http://localhost:5000/api/users');
    dispatch({ type: GET_USERS, payload: response.data })
}

export const addArticle = article => async dispatch => {
    let response = await axios.post('http://localhost:5000/api/articles', article);
    dispatch({ type: ADD_ARTICLE, payload: response.data })
}

export const deleteArticle = id => async dispatch => {
    let response = await axios.delete(`http://localhost:5000/api/articles/${id}`);
    dispatch({ type: DELETE_ARTICLE, payload: response.data })
}

export const editArticle = (id, article) => async dispatch => {
    let response = await axios.put(`http://localhost:5000/api/articles/${id}`, article);
    dispatch({ type: EDIT_ARTICLE, payload: response.data })
}

export const getArticles = () => async dispatch => {
    let response = await axios.get('http://localhost:5000/api/articles');
    dispatch({ type: GET_ARTICLES, payload: response.data })
}