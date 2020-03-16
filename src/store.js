

import axios from 'axios'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import listTodoReducer from './components/ListTodo/ListTodo.reducer'
const API_ENDPOINT = "https://api...."

//combine project reducers
const reducers = combineReducers({
    listTodoReducer
});

const api = axios.create({
    headers:{
        authorization: 'TOKEN' //token loaded from localstore or ..
    },
    baseURL: `${API_ENDPOINT}/`
})

const store = createStore(
    reducers,
    applyMiddleware(thunk.withExtraArgument(api))
    );


export default store