import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import {login_click} from '../../router/Link_dieuhuong'


const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 12,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 4,
    //   span: 16,
    },
  };

  const add_Account = (username,password,confirm_password,email) =>(
    axios.post('http://localhost:5000/signup',{username,password,confirm_password,email}).then(res => res.data)
  )

  const onFinish = (values) => {
    add_Account(values.username,values.password,values.confirm_password,values.email)
    .then(response=> {
        (response=='ok') ? login_click(): alert(response)
        // document.getElementById("basic").reset();
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

class Signup extends Component {

    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
        }
    }

    render() {
        return (
            <div className="signup">
                <div className="form_signup">
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                        remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                required: true,
                                message: 'Please input your username!',
                                },
                            ]}
                            >
                            <Input  />
                        </Form.Item>
                
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                required: true,
                                message: 'Please input your password!',
                                },
                            ]}
                            >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            label="Confirm Password"
                            name="confirm_password"
                            rules={[
                                {
                                required: true,
                                message: 'Please input confirm your password!',
                                },
                            ]}
                            >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                required: true,
                                message: 'Please input your email!',
                                },
                            ]}
                            >
                            <Input/>
                        </Form.Item>
                
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit" >
                                Signup
                            </Button>
                            <div className="link_sigup">
                                Already have an account?<Button className="link_sigup" type="text" onClick={()=>login_click()} style={{color: 'white'}}>  Login Here</Button>
                            </div>
                        </Form.Item>
                    </Form>
        
                </div>
            </div>
        );
    }
}

export default Signup;