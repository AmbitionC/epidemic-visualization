import React from 'react';

import { Layout } from 'antd';
import Head from './Head';
import Map from 'components/map/Map';

import 'css/normalize.css';
import 'css/main.css';

const T = () => <div style={{ width: '100%', height: '100%', background: '#dddddd' }}>组件区域</div>

const { Header } = Layout;

export default () => {
  return (
    <Layout>
      <Header>
        <Head />
      </Header>
      <Layout className='main-wrapper'>
        <div className="col">
          <T />
        </div>
        <div className="col">
          <div className="row" style={{ height: '66.67%' }}>
            <Map />
          </div>
          <div className="row" style={{ height: '33.33%' }}>
            <T />
          </div>
        </div>
      </Layout>
    </Layout>
  );
}