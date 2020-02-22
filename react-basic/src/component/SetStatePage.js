import React, {Component} from 'react'
// 函数使用xxx = ()=> {} 方法没有必要在constructor绑定this
export default class SetStatePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
  }
  // 在生命周期中也是异步的
  componentDidMount(){
    this.setState({
      counter: this.state.counter +1
    })
    console.log('counter', this.state.counter)
    // 原生事件中也是同步的，说明原生事件回调函数为微任务
    document.getElementById('nativeEvent').addEventListener('click',this.nomalSetState)
  }
  // 在合成事件中是异步的，批量更新，达到渲染一次来优化性能
  nomalSetState = ()=>{
    this.setState({
      counter: this.state.counter +1
    })
    console.log('counter', this.state.counter)
  }
  // 在setTimeout中是同步的（微任务中是同步的）
  syncSetState= ()=>{
    setTimeout(()=>{
      this.setState({
        counter: this.state.counter +1
      })
      console.log('counter', this.state.counter)
    },0)
  }
  hasCallSetState=()=>{
    this.setState({
      counter: this.state.counter +1
    },
    ()=>{
      // callback就是在state更新之后再执行
      console.log('counter', this.state.counter)
    })
  }
  // setState更新会被合并，因为是批量更新前面的更新会被忽略（更新函数可能是在不可重复的list中）
  noMergeSetState = ()=>{
    this.setState({
      counter: this.state.counter +1
    })
    this.setState({
      counter: this.state.counter +2
    })
    console.log('counter', this.state.counter)
  }
  mergeSetState = ()=>{
    this.setState((state)=>{
      return {counter: state.counter +1}
    })
    this.setState((state)=>{
      return {counter: state.counter +2}
    })
    console.log('counter', this.state.counter)
  }
  render(){
    return (
      <div>
        <h3>SetStatePage</h3>
        <button onClick={this.nomalSetState}>nomalSetState:{this.state.counter}</button>
        <button onClick={this.syncSetState}>syncSetState:{this.state.counter}</button>
        <button id="nativeEvent">nativeEvent:{this.state.counter}</button>
        <button onClick={this.hasCallSetState}>hasCallSetState:{this.state.counter}</button>
        <button onClick={this.noMergeSetState}>noMergeSetState:{this.state.counter}</button>
        <button onClick={this.mergeSetState}>mergeSetState:{this.state.counter}</button>
      </div>
    )
  }
}