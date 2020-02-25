import React, { Component } from 'react';
import {ThemeProvider, ThemeConsumer} from "../contexts/themeContext";
import ContextTypePage from '../components/ContextTypePage'
import ConsumerPage from '../components/ConsumerPage'
import MultipleContextPage from '../components/MultipleContextPage';
import { UserProvider } from '../contexts/userContext';


class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      value:{
        theme: {
          themeColor: 'red'
        },
        user: {
          userColor: 'green'
        }
      }
     }
  }
  render() { 
    const {theme, user} = this.state.value
    return ( 
      <div>
        <h3>ContextPage</h3>
        <button onClick={() => (
          this.setState({
            value:{
              theme: { 
                themeColor: this.state.value.theme.themeColor === 'red'? 'green':'red', 
              },
              user: {
                userColor:this.state.value.user.userColor
              }
            }
          })
        )}>
          changeColor
        </button>
        {/* 通过Provider数据供应 通过value*/}
        <ThemeProvider value={theme}>

          {/* 单个class组件使用context */}
          <ContextTypePage/>

          {/* 函数组件使用context */}
          <ThemeConsumer>
            {ctx=> <ConsumerPage {...ctx} />}
          </ThemeConsumer>
          {/* class组件使用多个context */}
          <UserProvider value={user}>
            <MultipleContextPage/>
          </UserProvider>
        </ThemeProvider>
      </div>
     );
  }
}
 
export default ContextPage;