import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Select,
  Button,
} from 'antd';

const { Option } = Select;

class DonateForm extends Component {

  constructor(props) {
    super(props)
    this.cancelDonateClick = this.cancelDonateClick.bind(this);
  }
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };


  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.form.resetFields();
      }
      else {
        alert("请完善输入")
      }
    });
   
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };

  cancelDonateClick(e) {
    this.props.form.resetFields();
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 12 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 12 },
        sm: { span: 6 },
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
      </Select>,
    );


    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="您的姓名">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: '请输入您的名称',
              },
            ],
          })(<Input style={{width:'270px'}}/>)}
        </Form.Item>
        <Form.Item label="您的联系方式">
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: '请输入您的联系方式!' }],
          })(<Input addonBefore={prefixSelector} style={{width:'270px'}} />)}
        </Form.Item>
        <Form.Item label="邮箱">
        {getFieldDecorator('email', {
          rules: [
            {
              type: 'email',
              message: '这不是一个有效的邮箱!',
            },
            {
              required: true,
              message: '请输入您的邮箱!',
            },
          ],
        })(<Input style={{width:'270px'}}/>)}
      </Form.Item>
        <Form.Item label="您要捐赠的物资名称" >
          {getFieldDecorator('donate-item', {
            rules: [
              {
                required: true,
                message: '请填写您将要捐赠的物品名称！',
              },
            ],
          })(<Input style={{width:'270px'}}/>)}
        </Form.Item>
        <Form.Item label="您要捐赠的物资数量或重量" >
          {getFieldDecorator('donate-number', {
            rules: [
              {
                required: true,
                message: '请填写您将要捐赠的物品数量或重量！',
              },
            ],
          })(<Input style={{width:'270px'}}/>)}
        </Form.Item>
        <Form.Item label="您想要捐赠哪所医院">
          {getFieldDecorator('hospital', {
            rules: [
              {
                required: false,
                message: '请输入您想捐赠的医院名字!' },
            ],
          })(<Input style={{width:'270px'}}/>) }
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button>
            推荐捐赠对象
          </Button>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            确定
          </Button>
          <Button style={{marginLeft:"95px"}} onClick={this.cancelDonateClick}>
            取消
        </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(DonateForm);

export default WrappedRegistrationForm;