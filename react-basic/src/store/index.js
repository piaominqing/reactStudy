import {createStore} from 'redux'

function counterRedux(state = 0, action){
  switch(action.type){
    case "add":
      return state + 1
    default:
      return state 
  }
}

const store = createStore(counterRedux)

export default store
