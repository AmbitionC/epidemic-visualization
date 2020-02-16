import React from 'react';

import { Layout } from 'antd';
import Main from './Main';
import { variableMap } from '../global/variable'

import 'css/normalize.css';
import 'css/main.css';

const { Header } = Layout;

export default () => {
  return (
    <Layout>
      <Header style={{textAlign:'center',lineHeight:'64px'}}>{variableMap.header}</Header>
      <Layout className='main-wrapper'>
        <Main />
      </Layout>
    </Layout>
  );
}