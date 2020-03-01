import React, { Component } from 'react';

class UserPage extends Component {
  state = {  }
  render() { 
    console.log(this.props)
    return ( 
      <div>
        <h3>User Page</h3>
        <button>注销</button>
      </div>
     );
  }
}
 
export default UserPage;