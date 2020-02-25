import React, { Component } from 'react';
import { UserConsumer } from '../contexts/userContext';
import { ThemeConsumer } from '../contexts/themeContext';

class MultipleContextPage extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <ThemeConsumer>
          {context=><h3 className={context.themeColor}>MultipleContextPage-theme</h3>}
        </ThemeConsumer>
        <UserConsumer>
          {context=><h3 className={context.userColor}>MultipleContextPage-user</h3>}
        </UserConsumer>
      </div>
     );
  }
}
 
export default MultipleContextPage;