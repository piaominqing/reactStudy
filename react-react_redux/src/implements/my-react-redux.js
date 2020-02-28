import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
const ReactContext = React.createContext()

export class Provider extends Component {
  render() { 
    return ( 
      <ReactContext.Provider value={this.props.store}>
        {this.props.children}
      </ReactContext.Provider>
     );
  }
}

export function connect(mapStateToProps, mapDispatchToProps, mergeProps){
  return (Cmp) => {
    return class extends Component {
      static contextType = ReactContext
      constructor(props){
        super(props)
        this.state={
          props: {

          }
        }
      }
      componentDidMount() {
        const {subscribe} = this.context
        this.update()
        // 订阅store变更时 执行update
        subscribe(()=>{
          this.update()
        })
      }
      /**将通过传入的规则，store state，dispatch -> this.props中 */
      update(){
        const {getState, dispatch} = this.context
        // store state
        let stateProps = mapStateToProps(getState())
        // store dispatch
        let dispatchProps
        if(typeof mapDispatchToProps === 'function'){
          dispatchProps = mapDispatchToProps(dispatch,this.props)
        } else if (typeof mapDispatchToProps === 'object'){
          dispatchProps = bindActionCreators(mapDispatchToProps, dispatch)
        }else{
          // 默认
          dispatchProps = {dispatch}
        }
        this.setState(
          {
            props:{
              ...stateProps,
              ...dispatchProps
            }
          }
        )
      }
      render(){
        return <Cmp {...this.state.props}/>
      }
    }
  }
}