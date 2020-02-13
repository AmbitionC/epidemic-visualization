import React from 'react';

import { Layout } from 'antd';

import 'css/normalize.css';
import 'css/main.css';

const { Header, Sider, Content } = Layout;

export default () => {
  return (
    <Layout>
      <Header>疫情数据可视化平台</Header>
      <Layout className='main-wrapper'>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
    </Layout>
  );
}