import React,{ Fragment, useState, createContext} from 'react';
import { variableMap } from 'global/variable'
import { BookOutlined, AimOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link} from 'react-router-dom';
import SearchBox from '../components/search/Search';
import DonateFormDrawer from '../components/formdrawer/DonateFormDrawer';
import NeedFormDrawer from '../components/formdrawer/NeedFormDrawer';
import StatisticDrawer from '../components/statistic/StatisticDrawer';
import { StatisticData } from '../store/reducer';
import { FormData } from '../store/reducer';

const menuItem = [
  {
    icon: BookOutlined,
    key: '首页',
    name: variableMap.homePage,
    routeurl: '/'
  },
  {
    icon: AimOutlined,
    key: 'test1',
    name: variableMap.test,
    routeurl: '/platform/test1/'
    
  },
  {
    icon: AimOutlined,
    key: 'donate',
    name: variableMap.donate,
    routeurl: '/platform/donate/'
  },
  {
    icon: AimOutlined,
    key: 'test3',
    name: variableMap.test,
    routeurl: '/platform/test3/'
  }
];

export const CountContext = createContext();

export const Head = () => {
  const [current, setCurrent] = useState('首页')
  const [pot,setPot] = useState("isnotSearch");
  return (
    <Fragment>
      <div style={{float:'left',height:'48px',lineHeight:'48px'}}>{variableMap.header}</div>
      <div style={{float:'left',marginLeft:'20px'}}>
        <Menu onClick={e => setCurrent(e.key)} selectedKeys={current} mode="horizontal">
          {menuItem.map((item) => {
            //console.log(item)
            return (
              <Menu.Item key={item.key}>
                <Link to={item.routeurl}><item.icon />{item.name}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </div>
      <FormData>
      <div style={{float:'left',marginLeft:'20px',height:'48px',lineHeight:'48px'}}><DonateFormDrawer /></div>
      <div style={{float:'left',marginLeft:'20px',height:'48px',lineHeight:'48px'}}><NeedFormDrawer /></div>
      </FormData>
      <div style={{float:'left',marginLeft:'20px',height:'48px',lineHeight:'48px'}}><StatisticData><StatisticDrawer /></StatisticData></div>
      <div style={{float:'right',marginRight:'20px'}}>
        <CountContext.Provider value={{pot,setPot}}>  
          <SearchBox />
        </CountContext.Provider>
      </div>
    </Fragment>
  );
}