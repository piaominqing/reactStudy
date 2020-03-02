import React, { Component, createContext } from 'react';
import {createBrowserHistory} from 'history'
import { matchPath } from 'react-router-dom';
const BrowserRouterContext = createContext()
export class BrowserRouter extends Component {
  constructor(props){
    super(props)
    this.history = createBrowserHistory()
    this.state = {
      location: this.history.location
    }
    this.unlisten = this.history.listen(location=>{
      this.setState({location})
    })
  }
  componentWillUnmount(){
    if(this.unlisten){
      this.unlisten()
    }
  }
  render() { 
    return ( 
      <BrowserRouterContext.Provider value = {{history: this.history, location: this.state.location}} >
        {this.props.children}
      </BrowserRouterContext.Provider>
    )
  }
}

export class Route extends Component {
  render() { 
    return ( 
      <BrowserRouterContext.Consumer>
        {context => {
          let {path, children, component, render} = this.props
          const location = this.props.location || context.location
          const match = matchPath(location.pathname,this.props)
          const props = {
              ...context,
              location,
              match
            }
          return (
            <BrowserRouterContext.Provider value={props}>
              {match ? 
                children ? 
                  (typeof children === "function" ? children(props): children)
                  : component ? React.createElement(component, props) : (render ? render(props) : null)
                : null
              }
            </BrowserRouterContext.Provider>
          )
        }}
      </BrowserRouterContext.Consumer>
     );
  }
}

export class Link extends Component {
  static contextType = BrowserRouterContext
  state = {  }
  handleClick = (e) => {
    e.preventDefault()
    const {history} = this.context
    history.push(this.props.to)
  }
  render() { 
    return ( 
      <a href={this.props.to} onClick={this.handleClick}>{this.props.children}</a>
     );
  }
}

export class Switch extends Component {
  render() {
    return (
      <BrowserRouterContext.Consumer>
        {context => {
          const location = context.location;
          let element, match;
    
          React.Children.forEach(this.props.children,child => {
            if (match == null && React.isValidElement(child)) {
              element = child;
              const path = child.props.path;
              match = path ? matchPath(location.pathname,{...child.props, path}) : context.match;
            }
          });
          return match ? React.cloneElement(element, {location}) : null;
        }}
      </BrowserRouterContext.Consumer>
    );
  }
}

export class Redirect extends Component
{
  render() {
    return (
      <BrowserRouterContext.Consumer>
        {context => {
          const {history} = context;
          const {to} = this.props;
          // history.push(location)
          return <LifeCycle onMount={() => history.push(to)} />;
        }}
      </BrowserRouterContext.Consumer>
    );
  }
}

class LifeCycle extends Component {
  componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount.bind(this, this);
    }
  }
  render() {
    return null;
  }
}