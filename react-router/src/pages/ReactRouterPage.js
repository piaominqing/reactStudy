import React, { Component } from 'react';
// import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import {BrowserRouter as Router, Link, Route, Switch} from '../implements/my-react-router'
import UserPage from './UserPage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import DynamicRouteComponent from '../components/DynamicRouteComponent'
import PrivateRoute from '../components/PrivateRoute'
class ReactRouterPage extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <h3>ReactRouterPage</h3>
        <Router>
          <Link to='/'>首页</Link>
          <Link to='/user'>用户中心</Link>
          <Link to='/login'>登录</Link>
          <Switch>
            {/* router 优先级 children->component->render */}
            {/* children和render 都是function的形式 */}
            {/* component 使用组件形式，内联函数形式时使用render 内部实现不同*/}
            <Route exact path='/' component={HomePage}></Route>
            <PrivateRoute path='/user' component={UserPage}></PrivateRoute>
            <Route path='/login' component={LoginPage}></Route>
            <Route path='/search/:id' component={DynamicRouteComponent}></Route>
            <Route render={()=> <div>404 page</div>}></Route>
          </Switch>
        </Router>
      </div>
     );
  }
}
 
export default ReactRouterPage;