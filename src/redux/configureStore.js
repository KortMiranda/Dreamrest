import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { connectRouter, routerMiddleware } from "connected-react-router";
import{ createBrowserHistory } from "history"
import user from "./modules/user"
import cards from "./modules/cards"
import notification from "./modules/notification"

const env = process.env.NODE_ENV

export const history = createBrowserHistory();

const middlewares = [thunk, routerMiddleware(history)]

if (env === "development") {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}

const reducer = history => 
 combineReducers({
     user,
     cards,
     notification,
     router: connectRouter(history)
 })

 let store;

 if (env === "development") {
     store = initialState => 
        createStore(
            reducer(history),
            composeWithDevTools(applyMiddleware(...middlewares))
        )
 } else {
     store = initialState =>
        createStore(reducer(history), applyMiddleware(...middlewares))
 }

 export default store()