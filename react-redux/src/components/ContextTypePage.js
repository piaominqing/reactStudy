import React, { Component } from 'react';
import {ThemeContext} from '../contexts/themeContext'

class ContextTypePage extends Component {
  /**
   * 指定context
   * 使用限制:获取单个context(会被覆盖)，在class组建中使用
   * 相当于ContextTypePage.contextType = ThemeContext
   * contextType是api，不能是其他值
   */
  static contextType = ThemeContext
  render() { 
    console.log('contextType:', this)
    const {themeColor} = this.context
    return ( 
      <div>
        <h3 className={themeColor}>ContextTypePage</h3>
      </div>
     )
  }
}
 
export default ContextTypePage;