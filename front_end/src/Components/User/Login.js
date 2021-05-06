import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 12,
    },
  };
  const tailLayout = {
    wrapperCol: {
    //   offset: 4,
    //   span: 16,
    },
  };

  const add_Account = (username,password) =>(
    axios.post('http://localhost:5000/login',{username,password}).then(res => res.data)
  )

  const onFinish = (values) => {
    add_Account(values.username,values.password)
    .then(response=>{
        if(response=='ok') 
        {
            alert(response);
            window.location.href = '/';
        }
        else alert(response);

    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

class Login extends Component {

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
                
                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                            <Button type="primary" htmlType="submit" >
                                Login
                            </Button>
                            <div className="link_sigup">
                                Don't have an account?<Link type="" to="/signup" style={{color: 'white'}}>  Signup</Link>
                            </div>
                        </Form.Item>
            
                    </Form>
        
                </div>
            </div>
        );
    }
}

export default Login;