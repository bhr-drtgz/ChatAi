import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { chatReduser } from "./reduser/chatRedux";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
    chatState: chatReduser
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store