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
    SAVE_AVATAR,
    LOGOUT_USER,

} from '../constants';

const initialState = {
    loggedUser: {},
    users: [],
    articles: [],
    isLogged: false
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
            return {
                ...state,
                isLogged: true
            }
        case DELETE_USER:
        return {
            ...state,
            users: action.payload
        }
        case SAVE_AVATAR:
        return {
            ...state,
            loggedUser: {
                ...state.loggedUser,
                avatar: action.avatar
            }
        }
        case LOGOUT_USER:
        return {
            ...state,
            isLogged: false,
            loggedUser: {}
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