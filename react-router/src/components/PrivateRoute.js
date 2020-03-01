import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux'

export default connect(
  ({user})=>({user}) => ({isLogin: user.isLogin})
)(class PrivateRoute extends Component {
  state = {  }
  render() { 
    const {isLogin, path, component} = this.props
    if(isLogin){
      return <Route to={path} component={component}></Route>
    }else{
      return <Redirect to={{pathname: '/login', state: {redirect: path}}}></Redirect>
    }
  }
})