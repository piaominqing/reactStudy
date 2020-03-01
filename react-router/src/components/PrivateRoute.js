import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';

class PrivateRoute extends Component {
  state = {  }
  render() { 
    const {isLogin, path, component} = this.props
    if(isLogin){
      return <Route to={path} component={component}></Route>
    }else{
      return <Redirect to={{pathname: '/login', state: {redirect: path}}}></Redirect>
    }
  }
}
 
export default PrivateRoute;