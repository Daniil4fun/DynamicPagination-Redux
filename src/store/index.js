import { combineReducers, legacy_createStore } from "redux";
import { postsReducer } from "./postsReducer";
import { currentPageReducer } from "./currentPageReducer";

let rootReducer = combineReducers({
    posts: postsReducer,
    currentPage: currentPageReducer
})

export let store = legacy_createStore(rootReducer)