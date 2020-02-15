import React from 'react';

import { Layout } from 'antd';
import Main from './Main';

import 'css/normalize.css';
import 'css/main.css';

const { Header } = Layout;

export default () => {
  return (
    <Layout>
      <Header style={{textAlign:'center',lineHeight:'64px'}}>疫情数据可视化平台</Header>
      <Layout className='main-wrapper'>
        <Main />
      </Layout>
    </Layout>
  );
}