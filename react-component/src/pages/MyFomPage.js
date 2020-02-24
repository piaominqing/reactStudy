import React, { Component } from 'react'
import { Button} from 'antd'
import MyFormCreate from '../implements/MyFormCreate'

const nameRules = {required: true, message:'please input ur name'}
const passwordRules = {required: true, message:'please input ur password'}

@MyFormCreate
class AntdFormPage extends Component {
  submit= ()=>{
    const { validateFields } = this.props
    // 校验
    validateFields((err, values)=>{
      if(err){
        console.log('err', err)
      }else{
        console.log('success', values)
      }
    })
  }
  render() {
    console.log('props:',this.props)
    const {getFieldDecorator} = this.props
    return (
      <div>
        <h3>MyFormPage</h3>
            {getFieldDecorator('name', {rules: [nameRules]})(
              <input placeholder='input username'></input>
            )}
            {getFieldDecorator('password', {rules: [passwordRules]})(
              <input type='password' placeholder='input password'></input>
            )}
          <Button type='primary' onClick={this.submit}>提交</Button>
      </div>
    )
  }
}

export default AntdFormPage
