import {
    ADD_USER, 
    DELETE_USER,
    EDIT_USER, 
    GET_USERS,
    GET_USER_BY_ID,
    ADD_ARTICLE,
    DELETE_ARTICLE,
    EDIT_ARTICLE,
    GET_ARTICLES,
    GET_USER_TOKEN,

} from '../constants';

const initialState = {
    loggedUser: {},
    users: [],
    articles: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_USER:
        return {
            ...state,
            users: action.payload
        }
        case GET_USER_BY_ID: 
        return {
            ...state,
            loggedUser: action.payload
        }
        case GET_USERS:
        return {
            ...state,
            users: action.payload
        }
        case GET_USER_TOKEN:
            localStorage.setItem('token', action.token);
            break;
        case DELETE_USER:
        return {
            ...state,
            users: action.payload
        }
        case ADD_ARTICLE:
        return {
            ...state,
            articles: action.payload
        }
        case GET_ARTICLES:
        return {
            ...state,
            articles: action.payload
        }
        case DELETE_ARTICLE:
        return {
            ...state,
            articles: action.payload
        }
        default:
        return state;
    }
}

export default rootReducer;