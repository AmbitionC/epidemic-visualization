import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Layout, Button } from 'antd';
import Head from './Head';
import Map from 'components/map/Map';
import DonateForm from 'components/form/DonateForm';
import NeedForm from 'components/form/NeedForm';

import 'css/normalize.css';
import 'css/main.css';

export const T1 = () => <div style={{ width: '100%', height: '100%', background: '#dddddd' }}>组件区域</div>
export const T2 = () => <div style={{ width: '100%', height: '100%', background: '#d1d1d1' }}>组件区域2</div>

const { Header } = Layout;

export const APP = ()=> {
  return (
    <Router>
      <Layout>
        <Header>
          <Head />
        </Header>
        <Layout className='main-wrapper'>
          <Route path="/platform/">
            <div className="col">
              <Route path="/platform/donateform" component={DonateForm}/>
              <Route path="/platform/needform" component={NeedForm}/>
            </div>
            <div className="col" >
              <div className="row" style={{ height: '66.67%' }}>
                <Map />
              </div>
              <div className="row" style={{ height: '33.33%' }}>
                <T2/>
              </div>
            </div>
          </Route>
          <Route path="/" exact>
          <div className="home-page" >
            {/*<Button type="primary" style={{float:'left',zIndex:'100',marginTop:'15px',marginLeft:'15px'}}><Link to="/platform/">进入平台</Link></Button>*/}
            <div className="row" style={{ height: '100%' }}>
              <Map />
            </div>
          </div>
          </Route>
        </Layout>
      </Layout>
    </Router>
  );
}