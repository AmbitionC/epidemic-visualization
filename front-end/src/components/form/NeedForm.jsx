import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import '@ant-design/compatible/assets/index.css';
import { FormDataContext, GET_FORM_DATA } from '../../store/reducer';



import {
  Form,
  Input,
  Select,
  Button
} from 'antd';

const { Option } = Select;


const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
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

const DonateForm = () => {
  const [form] = Form.useForm();
  const {dispatch} = useContext(FormDataContext);

  const onFinish = values => {
    console.log('Received values of form: ', values);
    dispatch({type:GET_FORM_DATA,data:values});
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: '86',
      }}
      scrollToFirstError
    >

      <Form.Item
      name="name"
      label='您或者您所在单位或团体的名字'
      rules={[
        {
          required: true,
          message: '请输入您或者您所在单位或团体的名字!',
          whitespace: true,
        },
      ]}
      >
      <Input />
      </Form.Item>  

      <Form.Item
        name="phone"
        label="您的联系方式"
        rules={[
          {
            required: false,
            message: '请输入您的联系方式!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="email"
        label="邮箱"
        rules={[
          {
            type: 'email',
            message: '请输入正确的邮箱!',
          },
          {
            required: true,
            message: '请输入您的邮箱!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="need_item"
        label="请输入您所需求的物资名称"
        rules={[
          {
            required: true,
            message: '请输入您所需求的物资!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        name="need_number"
        label="请输入您所需求的物资数量或重量"
        rules={[
          {
            required: true,
            message: '请输入您所需求的物资数量或重量!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            确定
          </Button>
          <Button style={{marginLeft:"95px"}} onClick={()=>{form.resetFields()}}>
            取消
        </Button>
        </Form.Item>
    </Form>
  );
};



export default DonateForm;