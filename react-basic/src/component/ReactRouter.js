import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

export default class ReactRouter extends Component {
  // Route渲染优先级：children>component>render。
  // 这三种⽅式互斥，你只能⽤⼀种。
  // children：func
  // 有时候，不管location是否匹配，你都需要渲染⼀些内容，这时候你可以⽤children。
  // 除了不管location是否匹配都会被渲染之外，其它⼯作⽅法与render完全⼀样。
  // render：func
  // 但是当你⽤render的时候，你调⽤的只是个函数。
  // 只在当location匹配的时候渲染。
  // component: component
  // 只在当location匹配的时候渲染。
  render () {
    return (
      <div>
        <h3>ReactRouter Page</h3>
        <Router>
          <Link to='/'>首页</Link>
          <Link to='/user'>用户中心</Link>

          <Route
            exact
            path='/'
            component={HomePage}
          // children={()=><div>children</div>}
          // render={()=><div>render</div>}
          >
          </Route>
          <Route exact path='/user' component={UserPage}></Route>
          <Route component={EmptyPage}></Route>
        </Router>
      </div>
    )
  }
}

class HomePage extends Component {
  render () {
    return (
      <div>
        <h3>HomePage</h3>
      </div>
    )
  }
}

class UserPage extends Component {
  render () {
    return (
      <div>
        <h3>UserPage</h3>
      </div>
    )
  }
}

class EmptyPage extends Component {
  render () {
    return (
      <div>
        <h3>EmptyPage-404</h3>
      </div>
    )
  }
}