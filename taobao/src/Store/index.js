import { createStore, combineReducers,applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import userReducer from "./userReducer";
import rootSaga from "../action/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    combineReducers({
        user: userReducer
    }),
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);


export default store;