import React, { Component } from 'react';
import store from '../store'

class ReduxPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      inputCount: ''
     }
  }
  // componentDidMount() {
       // 变更订阅
  //   store.subscribe(()=>{
  //     console.log(store.getState())
  //     this.forceUpdate()
  //   })
  // }
  aysncAdd = ()=>{
    store.dispatch(dispatch => {
      setTimeout(() => {
        dispatch({type: "ADD"});
      }, 1000);
    });
  }
  render() { 
    return ( 
      <div>
        <h3>MyReduxPage</h3>
        <input value={this.state.inputCount} onChange={(e)=>{this.setState({inputCount:e.target.value})}}/>
        <p>{store.getState().countReducer}</p>
        <p>{store.getState().counterReducer}</p>
        <button onClick={()=>store.dispatch({type: 'ADD'})}>++++</button>
        <button onClick={()=>store.dispatch({type: 'MINUS-COUNT', count:this.state.inputCount})}>----</button>
        <button onClick={this.aysncAdd}>async</button>
      </div>
     );
  }
}
 
export default ReduxPage;