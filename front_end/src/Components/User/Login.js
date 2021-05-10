import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import {Signup_click, home_click, login_click} from '../../router/Link_dieuhuong'
import {useDispatch} from 'react-redux'
import {change_account} from '../../Redux_toolkit/AccountReducer'


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
);

const onFinishFailed = (errorInfo) => {
console.log('Failed:', errorInfo);
};

  
function Login () {

    const dispath = useDispatch();

    const onFinish = (values) => {
        add_Account(values.username,values.password)
        .then(response=>{
            if(response.kq=='ok')
            {
                localStorage.setItem('account', response.account);
                localStorage.setItem('token', response.token);
                dispath(change_account(values.username));
                home_click();
            }
            else 
            {
                alert(response);
                login_click();
            }
        });
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


export default Login;