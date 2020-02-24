import React, {Component} from 'react'
import Schema from "async-validator";

export default function MyFormCreate(Cmp){
  return class extends Component{
    constructor(props){
      super(props)
      this.state = {}
      this.options= {}
    }
    handleChange = e => {
      let {name, value} = e.target
      this.setState({[name]:value})
    }
    getFieldDecorator = (field,option) => {
      this.options[field] = option
      return InputCmp => (
        React.cloneElement(InputCmp,{
          name:field,
          value: this.state[field] || '',
          onChange: this.handleChange
        })
      )
    }
    getFieldsValue = () => {
      return {...this.state}
    }
    getFieldValue = (field) => {
      return this.state[field]
    }
    validateFields = callback => {
      const state = {...this.state}
      for(let field in this.options){
        // 规则
        const rules = this.options[field]
        // 当前值
        const value = state[field];

        // 校验描述对象
        const desc = { [field]: rules };
        // 创建Schema实例
        const schema = new Schema(desc);
        
        schema.validate({ [field]: value }, errors => {
          if (errors) {
            console.log(errors[0].message)
          } else {
            // 校验通过
            console.log('success')
          }
        })
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