import React, { Component } from 'react';
import { connect } from 'react-redux'

export default connect(
  ({user})=>({user}) => ({isLogin: user.isLogin}),
  {
    logout: () => ({type: "LOGOUT_SUCCESS"})
  }
)(class UserPage extends Component {
  state = {  }
  render() { 
    const {logout} = this.props
    return ( 
      <div>
        <h3>User Page</h3>
        <button onClick={logout}>注销</button>
      </div>
     );
  }
})