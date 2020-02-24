import React, {Component} from 'react'
import Schema from "async-validator";

export default function MyFormCreate(Cmp){
  return class extends Component{
    constructor(props){
      super(props)
      this.state = {
        error: []
      }
      this.options= {}
    }
    handleChange = e => {
      let {name, value} = e.target
      this.validate({
        ...this.state,
        [name]:value
      })
      // this.setState({[name]:value}, ()=>{
      //   this.validate()
      // })
    }
    getFieldDecorator = (field,option) => {
      this.options[field] = option
      const fieldErrors = this.state.error.filter(item=> item.field === field)
      return InputCmp => (
        <div>
          {React.cloneElement(InputCmp,{
            name:field,
            value: this.state[field] || '',
            onChange: this.handleChange
          })}
          {
            fieldErrors.map((err,index)=><p key={index}>{err.message}</p>)
          }
        </div>
      )
    }
    getFieldsValue = () => {
      return {...this.state}
    }
    getFieldValue = (field) => {
      return this.state[field]
    }
    validate = (state) => {
      let desc = {}
      let values = {}
      for(let field in this.options){
        // 校验描述对象
        desc[field] = this.options[field].rules

        values[field] = state[field]
        
      }
      // 创建Schema实例
      const schema = new Schema(desc);
      schema.validate(values, error => {
        this.setState({...state,error})
        
      })
    }
    validateFields = callback => {
      const state = {...this.state}
      const {error} = this.state
      if (error) {
        callback(error,state)
      } else {
        // 校验通过
        callback(undefined, state)
      }
    }
    render(){
      return (
        <div className='border'>
          <Cmp
            {...this.props}
            getFieldDecorator={this.getFieldDecorator}
            getFieldsValue={this.getFieldsValue}
            getFieldValue={this.getFieldValue}
            validateFields={this.validateFields}
          />
        </div>
      )
    }
  }
} 