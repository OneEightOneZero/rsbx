import React from 'react';
import axios from 'axios';
import {
  Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,
} from 'antd';
import { connect } from 'react-redux';
import Gloading from '../components/Gloading.jsx';
import { fromBits } from 'long';
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [{
  value: '浙江',
  label: '浙江',
  children: [{
    value: '杭州',
    label: '杭州',
    children: [{
      value: '西湖',
      label: '西湖',
    }],
  }],
}, {
  value: '江苏',
  label: '江苏',
  children: [{
    value: '南京',
    label: '南京',
    children: [{
      value: '中华门',
      label: '中华门',
    }],
  }],
}, {
  value: '广东',
  label: '广东',
  children: [{
    value: '广州',
    label: '广州',
    children: [{
      value: '天河区',
      label: '天河区',
    }],
  }],
}];

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    capture: 'Get captcha',
    isEmailRegister: false,
  };
  getCapture = () => {
    let str = "0123456789abcdefghijklmnopqrstuvwxyz";
    let str2 = "";
    for (let i = 0; i < 4; i++) {
      let randomNum = parseInt(Math.random() * (str.length - 1));
      str2 += str.charAt(randomNum);
    }
    this.setState({
      capture: str2,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.register(values);
        this.props.setShow(true);
      }

    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }
  validateEmail = (rule, value, callback) => {
    const form = this.props.form;
    axios({
      url: 'http://localhost:7001/findemail',
      method: 'post',
      data: {
        email: form.getFieldValue('email')
      },
    }).then((data) => {
      if (data.data.status) {
        callback('该邮箱已被注册！');
      } else {
        callback();
      }
    })
  }
  validatePhone = (rule, value, callback) => {
    const form = this.props.form;
    axios({
      url: 'http://localhost:7001/findphone',
      method: 'post',
      data: {
        phone: form.getFieldValue('phone')
      },
    }).then((data) => {
      if (data.data.status) {
        callback('该手机号已被注册！');
      } else {
        callback();
      }
    })
  }
  register(userInfo) {
    let n = this;
    axios({
      url: 'http://localhost:7001/register',
      method: 'post',
      data: {
        email: userInfo.email,
        password: userInfo.password,
        nickname: userInfo.nickname,
        adress: userInfo.residence.map(item => item).join(''),
        phone: userInfo.phone,
        website: userInfo.website,
      },
    }).then((data) => {
      n.props.setShow(false);
      window.location.href = "/login";
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <Form onSubmit={this.handleSubmit}>
        <Gloading />
        <Form.Item
          {...formItemLayout}
          label="E-mail"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }, {
              validator: this.validateEmail,
            }],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Password"
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input type="password" />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Confirm Password"
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label={(
            <span>
              Nickname&nbsp;
                <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Habitual Residence"
        >
          {getFieldDecorator('residence', {
            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
            rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
          })(
            <Cascader options={residences} />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Phone Number"
        >
          {getFieldDecorator('phone', {
            rules: [{
              required: true, message: 'Please input your phone number!'
            },{
              pattern:new RegExp('^1[34578]\\d{9}$','g'),
              message:'手机号码不规范'
            }, {
              validator: this.validatePhone,
            }],
          })(
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Website"
        >
          {getFieldDecorator('website', {
            rules: [{ required: true, message: 'Please input website!' }],
          })(
            <AutoComplete
              dataSource={websiteOptions}
              onChange={this.handleWebsiteChange}
              placeholder="website"
            >
              <Input />
            </AutoComplete>
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Captcha"
          extra="We must make sure that your are a human."
        >
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [{ required: true, message: 'Please input the captcha you got!' }],
              })(
                <Input />
              )}
            </Col>
            <Col span={12}>
              <Button onClick={this.getCapture.bind(this)}>{this.state.capture}</Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
            rules: [{ required: true, message: 'Please agree the agreement!' }],
          })(
            <Checkbox>我已阅读并同意 <a href="javascript:;">协议</a></Checkbox>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">注册</Button>
        </Form.Item>
      </Form>
    );
  }
}

const Register = Form.create({ name: 'register' })(RegistrationForm);

export default connect(
  state => {
    return { state }
  },
  dispatch => {
    return {
      setShow(show) {
        dispatch({
          type: 'setShow',
          show
        })
      }
    }
  })(Register);