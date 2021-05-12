import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import {Signup_click, home_click, login_click} from '../../router/Link_dieuhuong'
import {connect} from 'react-redux'


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
    },
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

class Login extends Component {

    render() {

        const onFinish = (values) => {
            this.props.accountinStore({account:values.username, password:values.password})
        };
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
                                Don't have an account?<Button className="link_sigup" type="text" onClick={()=>Signup_click()} style={{color: 'white'}}>  Signup Here</Button>
                            </div>
                        </Form.Item>
            
                    </Form>
        
                </div>
            </div>
        );
    } 
}

const mapStateToProps = (state, ownProps) => {
    return {
        account: state.account
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        accountinStore: (tmp) => {
            dispatch({type:'CHANGE_ACCOUNT',value:tmp})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)