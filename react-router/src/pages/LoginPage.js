import React, { Component } from 'react';
import { Redirect } from 'react-router';

class LoginPage extends Component {
  state = {  }
  render() { 
    const {isLogin, location} = this.props
    const {redirect='/'} = location.state || {}
    if(isLogin){
      return <Redirect to={redirect}></Redirect>
    }else{
      return ( 
        <div>
          <h3>LoginPage</h3>
        </div>
       );
    }
  }
}
 
export default LoginPage;