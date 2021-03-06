import React, { Component } from 'react'
import {Form, Input, Button} from 'antd'

const nameRules = {required: true, message:'please input ur name'}
const passwordRules = {required: true, message:'please input ur password'}

@Form.create({})
class AntdFormPage extends Component {
  submit= ()=>{
    const { validateFields } = this.props.form
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
    const {getFieldDecorator} = this.props.form
    return (
      <div>
        <h3>AntdFormPage</h3>
        <Form>
          <Form.Item>
            {getFieldDecorator('name', {rules: [nameRules]})(
              <Input placeholder='input username'></Input>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {rules: [passwordRules]})(
              <Input type='password' placeholder='input password'></Input>
            )}
          </Form.Item>
          <Button type='primary' onClick={this.submit}>提交</Button>
        </Form>
      </div>
    )
  }
}

export default AntdFormPage
