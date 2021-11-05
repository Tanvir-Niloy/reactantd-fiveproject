import { Form, Input,Radio,Select,Button, DatePicker } from 'antd';
import TextArea from 'rc-textarea';
import React from 'react'
import Dashboard from './Dashboard';

function Forms() {


    function submitForm(values){
        
             console.log(values);
    }


    return (
        <Dashboard>
            <div>
                <Form layout='vertical' className='forms' onFinish={submitForm}>
                    <Form.Item label='First Name' name='firstName' required rules={[{ required: true,min:2 }]}>
                    <Input/>
                </Form.Item>
                <Form.Item label='Last Name' name='lastName' required rules={[{required:true,min:2}]}  >
                     <Input/>
                    </Form.Item>
                    <Form.Item label='Email' name='email' required rules={[{required:true,type:'email'}]} >
                     <Input/>
                    </Form.Item>
                    <Form.Item label='Gender' name='gender' required rules={[{required:true}]}  >
                        <Radio.Group>
                          <Radio value='male'>Male</Radio>
                          <Radio value='female'>Female</Radio>
                    </Radio.Group>
                    </Form.Item>
                    <Form.Item label='Date of Birth' name='dob' required rules={[{required:true}]} >
                     <DatePicker/>
                    </Form.Item>
                    <Form.Item label='Department' name='department' required rules={[{required:true}]}>
                        <Select placeholder='Choose your Department'>
                          <Radio value='computers'>Computers</Radio>
                          <Radio value='chemestry'>Chemestry</Radio>
                          <Radio value='Math'>Math</Radio>
                          <Radio value='Biology'>Biology</Radio>
                          <Radio value='political science'>Political Science</Radio>

                    </Select>
                    </Form.Item>
                    <Form.Item label='Address' name='address' required rules={[{required:true,min:10}]} >
                        <TextArea placeholder='Your Address....' style={{width:"100%"}}/>
                    </Form.Item>
                    <Button htmlType='submit' type='primary'>Register</Button>
                </Form>    
          </div>
        </Dashboard>
    )
}

export default Forms
