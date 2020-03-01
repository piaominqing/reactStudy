import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux'

export default connect(
  ({user})=>({user}) => ({isLogin: user.isLogin}),
  {
    login: () => ({type: "LOGIN_SUCCESS"})
  }
)(class LoginPage extends Component {
  state = {  }
  render() { 
    const {isLogin, location, login} = this.props
    const {redirect='/'} = location.state || {}
    if(isLogin){
      return <Redirect to={redirect}></Redirect>
    }else{
      return ( 
        <div>
          <h3>LoginPage</h3>
          <button onClick={login}>登录</button>
        </div>
       );
    }
  }
})