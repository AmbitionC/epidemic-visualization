import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Layout } from 'antd';
import Head from './Head';
import Map from 'components/map/Map';
import CardShow from '../components/card/CardShow';

import 'css/normalize.css';
import 'css/main.css';

export const T1 = () => <div style={{ width: '100%', height: '100%', background: '#dddddd' }}>组件区域1</div>
export const T2 = () => <div style={{ width: '100%', height: '100%', background: '#d1d1d1' }}>组件区域2</div>
export const T3 = () => <div style={{ width: '100%', height: '100%', background: '#d1d1d1' }}>组件区域3</div>

const { Header } = Layout;

export const App = () => {
  return (
    <Router>
      <Layout>
        <Header>
          <Head />
        </Header>
        <Layout className='main-wrapper'>
          <Route path="/platform/">
            <div className="col">
              <Route path="/platform/test1" component={T1}/>
              <Route path="/platform/test2" component={T2}/>
              <Route path="/platform/test3" component={T3}/>
            </div>
            <div className="col" >
              <div className="row" style={{ height: '66.67%' }}>
                <Map />
              </div>
              <div className="row" style={{ height: '33.33%' }}>
                <CardShow />
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