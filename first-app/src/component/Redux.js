import React, {Component} from 'react'
import store from '../store'

export default class Redux extends Component {
  render(){
    console.log('store', store)
    // dispatch 派发action
    // subscribe state更新之后
    // getState  获取state
    // replaceReducer
    // Symbol
    return (
      <div>
        <h3>Redux Page</h3>
        <p>{store.getState()}</p>
        <button onClick={()=>{store.dispatch({type:'add'})}}>add</button>
      </div>
    )
  }
}