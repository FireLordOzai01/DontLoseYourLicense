import {
    ADD_USER, 
    DELETE_USER,
    EDIT_USER, 
    GET_USERS,
    ADD_ARTICLE,
    DELETE_ARTICLE,
    EDIT_ARTICLE,
    GET_ARTICLES,

} from '../constants';

const initialState = {
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
        case GET_USERS:
        return {
            ...state,
            users: action.payload
        }
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