import React, { Component } from 'react';
import store from '../store'

class ReduxPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
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
        <h3>ReduxPage</h3>
        <p>{store.getState()}</p>
        <button onClick={()=>store.dispatch({type: 'ADD'})}>++++</button>
        <button onClick={()=>store.dispatch({type: 'MINUS'})}>----</button>
        <button onClick={this.aysncAdd}>async</button>
      </div>
     );
  }
}
 
export default ReduxPage;