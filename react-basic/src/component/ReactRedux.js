import React, {Component} from 'react'
import {connect} from 'react-redux'

export default connect(
  // mapStateToProps 手动
  state => ({num: state}),
  // mapDispatchToProPS 自动
  // 当使用多个dipatch时
  {
    add: ()=>({type:'add'})
  }
)(
  class ReactRedux extends Component{
    render(){
      console.log('props:', this.props)
      const {num,add} = this.props
      return (
        <div>
          <h3>ReactRedux Page</h3>
          <p>{num}</p>
          <button onClick={add}>add</button>
        </div>
      )
    }
  }
)