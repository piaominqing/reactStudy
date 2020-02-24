import React, {Component} from 'react'
import Dialog from './Dialog'
export default class DialogPage extends Component {
    constructor(props){
      super(props)
      this.state = {
        showDialog: false
      }
    }
    hideDialog = () => {
      this.setState({showDialog: false})
    }
    render(){
      return (
        <div>
          <h3>DialogPage</h3>
          <button onClick={()=>this.setState({showDialog: !this.state.showDialog})}>show</button>
          {this.state.showDialog && <Dialog hideDialog={this.hideDialog}/>}
        </div>
      )
    }
}