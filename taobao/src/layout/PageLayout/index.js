import React, { Component } from 'react';
import BottomNav from '../../components/BottomNav'
class PageLayout extends Component {
  render() { 
    const {children} = this.props
    return ( 
      <div>
        {children}
        <BottomNav />
      </div> 
    );
  }
}
 
export default PageLayout;