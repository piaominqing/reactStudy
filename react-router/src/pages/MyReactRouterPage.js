import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from '../implements/my-react-router'
import UserPage from './UserPage';
import HomePage from './HomePage';

class MyReactRouterPage extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <h3>My React Router Page</h3>
        <Router>
          <Link to='/'>首页</Link>
          <Link to='/user'>用户中心</Link>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/user' component={UserPage}></Route>
        </Router>
      </div>
     );
  }
}
 
export default MyReactRouterPage;