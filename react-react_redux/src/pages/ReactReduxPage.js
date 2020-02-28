import React, { Component } from 'react';
// import {connect} from 'react-redux'
import {connect} from '../implements/my-react-redux'
import {bindActionCreators} from 'redux'

/**
 * connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
 * mapStateToProps(state, [ownProps]): stateProps] (Function) 
 * 该回调函数必须返回⼀一个纯对象，这个对象会与组件的 props 合并
 * 如果定义该参数，组件将会监听 Redux store 的变化，否 则 不不监听。
 * mapDispatchToProps(dispatch, [ownProps]): dispatchProps] (Object or Function): 
 * 如果你省略略这个 mapDispatchToProps 参数，默认情况 下，dispatch 会注⼊入到你的组件 props 中。
 * 如果传递的是⼀一个对象，那么每个定义在该对象的函数都 将被当作 Redux action creator，
 * 对象所定义的⽅方法名将 作为属性名；每个⽅方法将返回⼀一个新的函数，
 * 函数中 dispatch⽅方法会将action creator的返回值作为参数执⾏。这些属性会被合并到组件的 props 中。 
 * 如果传递的是⼀一个函数，该函数将接收⼀一个 dispatch 函 数，然后由你来决定如何返回⼀一个对象。  
 * mergeProps(stateProps, dispatchProps, ownProps): props] (Function) 
 * 如果指定了了这个参数，mapStateToProps() 与 mapDispatchToProps() 的执⾏行行结果和组件⾃自身的
 * props 将传⼊入到这个回调函数中。该回调函数返回的对象 将作为 props 传递到被包装的组件中。
 * 你也许可以⽤用这个 回调函数，根据组件的 props 来筛选部分的 state 数据， 或者把 props 中的某个特定变量量与 
 * action creator 绑定在 ⼀一起。如果你省略略这个参数，默认情况下返回
 * Object.assign({}, ownProps, stateProps, dispatchProps) 的结果
 */
export default connect(
  // mapStateToProps(state, [ownProps]): stateProps] (Function) 
  // ownprops <ReactReduxPage num='3' /> 传进来的属性。当props变更时 mapStateToProps逻辑执行一遍，所以影响性能 谨慎使用
  (state,ownprops) => {
    console.log(ownprops)
    return {num:state}
  },
  // mapDispatchToProps(dispatch, [ownProps]): dispatchProps] (Object or Function):
  (dispatch,ownProps) => {
    console.log('ownProps', ownProps)
    let dispatchs = bindActionCreators({
      add: () => ({type: 'ADD'}),
      minus: () => ({type: 'MINUS'})
    }, dispatch)
    return {
      dispatch,
      ...dispatchs
    }
    // mergeProps(stateProps, dispatchProps, ownProps): props] (Function) 
    // (stateProps, dispatchProps, ownProps) => {
    //   console.log("mergeProps", stateProps, dispatchProps, ownProps); //sy-log
    //   return {
    //     omg: "omg", 
    //     ...stateProps, 
    //     ...dispatchProps, 
    //     ...ownProps
    //   }
    // }
  }
)
( class ReactReduxPage extends Component {
  render() { 
    console.log('props:', this.props);
    const {add, minus} = this.props
    return ( 
      <div>
        <h3>ReactReduxPage</h3>
        <p>{this.props.num}</p>
        <button onClick={()=>this.props.dispatch({type:'ADD'})}>add</button>
        <button onClick={()=>this.props.dispatch({type:'MINUS'})}>minus</button>
        <button onClick={add}>add</button>
        <button onClick={minus}>minus</button>
      </div>
     );
  }
})