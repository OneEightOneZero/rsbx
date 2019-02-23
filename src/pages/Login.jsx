import React from 'react';
import axios from 'axios';
import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';
import './Login.css';
class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.findUser(values);
            }
        });
    }
    findUser(loginInfo) {
        axios({
            url: 'http://localhost:7001/login',
            method: 'post',
            data: {
                phone: loginInfo.userName,
                password: loginInfo.password,
            },
        }).then((data) => {
            if(data.data.status){
                window.location.href = "/";
            }else{
                window.alert('用户名或密码错误');
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>记住密码</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">忘记密码</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
            </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
        );
    }
}

const Login = Form.create({ name: 'normal_login' })(LogIn);
export default Login;