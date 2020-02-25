import {createStore, applyMiddleware,combineReducers} from 'redux'
// import {createStore, applyMiddleware, combineReducer} from '../implements/my-redux'
// import logger from "redux-logger";
// import thunk from "redux-thunk";

// reducer 初始化、修改状态函数
function countReducer(state = 0, action){
  switch(action.type){
    case 'ADD':
      return state + 1
    case 'MINUS':
      return state - 1
    default:
      return state
  }
}

function counterReducer(state = 0, action){
  switch(action.type){
    case 'ADD-COUNT':
      return state + action.count
    case 'MINUS-COUNT':
      return state - action.count
    default:
      return state
  }
}

// 手写logger
function logger(storeApi){
  return dispatch => action => {
    console.log(`
      action ${action.type}
      prev state ${storeApi.getState()}
      dispatch   ${storeApi.dispatch}
    `)
    return dispatch(action)
  } 
}

// 手写thunk
function thunk({getState}){
  return dispatch => action => {
    if(typeof action === 'function'){
      return action(dispatch, getState)
    }
    return dispatch(action)
  } 
}
const store = createStore(combineReducers({countReducer,counterReducer}), applyMiddleware(logger, thunk))
export default store