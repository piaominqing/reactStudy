import React, {Component} from 'react'
// 高阶组件hoc(提高代码复用率,保证组件功能单一性)，高阶组件是参数为组件，返回值为新组件的函数。
// ⾼高阶组件（HOC）是 React 中⽤用于复⽤用组件逻辑的⼀一种⾼高级技巧。
// HOC ⾃自身不不是 React API 的⼀一部分，它是⼀一种基于 React 的组合特 性⽽而形成的设计模式
/**
 * 不要在 render ⽅方法中使⽤用 HOC 
 * React 的 diﬀ 算法（称为协调）使⽤用组件标识来确定它是应该更更 新现有⼦子树还是将其丢弃并挂载新⼦子树。 
 * 如果从 render 返回 的组件与前⼀一个渲染中的组件相同（===），则 React 通过将 ⼦子树与新⼦子树进⾏行行区分来递归更更新⼦子树。 
 * 如果它们不不相等，则 完全卸载前⼀一个⼦子树。
 */

const foo = Cmp => props => {
  return (
    <div className='border'>
      <Cmp {...props} />
    </div>
  )
}

const foo2 = Cmp => props => {
  return (
    <div className='border2'>
      <Cmp {...props} />
    </div>
  )
}

function Child(props){
  return <div>Child {props.name}</div>
}
// 链式调用
const Foo = foo2(foo(foo(Child)))

export default class HocPage extends Component {
  render(){
    return (
      <div>
        <h3>HocPage</h3>
        <Foo name='msg'></Foo>
      </div>
    )
  }
}