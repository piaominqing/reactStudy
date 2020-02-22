import React, {Component, PureComponent} from 'react'

export default class PureComponentPage extends PureComponent {
  constructor(props){
    super(props)
    this.state={
      counter: 0
    }
  }
  addCounter=()=>{
    this.setState({counter:100})
  }
  render(){
    console.log('render')
    const {counter} = this.state
    return (
      <div>
        <h3>PureComponentPage</h3>
        <button onClick={this.addCounter}>{counter}</button>
      </div>
    )
  }
} 

// 使用Component实现PureComponent
export class ComponentPage extends Component {
  constructor(props){
    super(props)
    this.state={
      counter: 0
    }
  }
  addCounter=()=>{
    this.setState({counter:100})
  }
  shouldComponentUpdate(nextProps, nextState){
    return nextState.counter !== this.state.counter
  }
  render(){
    console.log('render')
    const {counter} = this.state
    return (
      <div>
        <h3>PureComponentPage</h3>
        <button onClick={this.addCounter}>{counter}</button>
      </div>
    )
  }
}

/**
 * React.PureComponent 与 React.Component 很相似。两者的区别在于 React.Component 并未实
现 shouldComponentUpdate() ，⽽ React.PureComponent 中以浅层对⽐ prop 和 state 的⽅式来
实现了该函数。
如果赋予 React 组件相同的 props 和 state， render() 函数会渲染相同的内容，那么在某些情况下使
⽤ React.PureComponent 可提⾼性能。
注意
React.PureComponent 中的 shouldComponentUpdate() 仅作对象的浅层⽐较。如果对象中
包含复杂的数据结构，则有可能因为⽆法检查深层的差别，产⽣错误的⽐对结果。仅在你的
props 和 state 较为简单时，才使⽤ React.PureComponent ，或者在深层数据结构发⽣变化时
调⽤ forceUpdate() 来确保组件被正确地更新。你也可以考虑使⽤ immutable 对象加速嵌套
数据的⽐较。
此外， React.PureComponent 中的 shouldComponentUpdate() 将跳过所有⼦组件树的 prop
更新。因此，请确保所有⼦组件也都是“纯”的组件。
 */

