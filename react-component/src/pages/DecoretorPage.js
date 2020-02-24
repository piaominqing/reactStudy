import React, {Component} from 'react'
// 如果 vscode 对装饰器器有 warning，vscode 设置⾥里里加上 javascript.implicitProjectConfig.experimentalDecorator s": true
 
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

// !装饰器器只能⽤用在class上 // 执⾏行行顺序从下往上 
@foo2
@foo
@foo
class Child extends Component{
  render(){
    return <div>Child {this.props.name}</div>
  } 
}

export default class HocPage extends Component {
  render(){
    return (
      <div>
        <h3>HocPage</h3>
        <Child name='decorator'/>
      </div>
    )
  }
}