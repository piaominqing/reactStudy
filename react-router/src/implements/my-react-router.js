import React, { Component, createContext } from 'react';
import {createBrowserHistory} from 'history'
const BrowserRouterContext = createContext()
export class BrowserRouter extends Component {
  constructor(props){
    super(props)
    this.history = createBrowserHistory()
  }
  render() { 
    return ( 
      <BrowserRouterContext.Provider
        children={this.props.children}
        value = {{history: this.history}}
      /> 
    );
  }
}

export class Route extends Component {
  state = {  }
  render() { 
    const {path, component} = this.props
    const match = window.location.pathname === path
    return ( match ? React.createElement(component) : null );
  }
}

export class Link extends Component {
  static contextType = BrowserRouterContext
  state = {  }
  handleClick = (e) => {
    // e.preventDefault()
    const {history} = this.context
    history.push(this.props.to)
  }
  render() { 
    
    return ( 
      <a href={this.props.to} onClick={this.handleClick}>{this.props.children}</a>
     );
  }
}
