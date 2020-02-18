import React from 'react';
import { variableMap } from 'global/variable'
import { Menu, Icon } from 'antd';
import { Link} from 'react-router-dom';
import Search from '../components/search/Search';

const menuItem = [
  {
    icon: 'book',
    key: '首页',
    name: variableMap.homePage,
    routeurl: '/'
  },
  {
    icon: 'usergroup-add',
    key: 'donate',
    name: variableMap.menuDonate,
    routeurl: '/platform/donateform/'
    
  },
  {
    icon: 'usergroup-delete',
    key: 'need',
    name: variableMap.menuNeed,
    routeurl: '/platform/needform/'
  },
  {
    icon: 'link',
    key: 'test',
    name: variableMap.test,
    routeurl: '/platform/test/'
  }
];


export default () => {
  const [current, setCurrent] = useState('首页')
  return (
    <Fragment>
      <div style={{float:'left',height:'48px',lineHeight:'48px'}}>{variableMap.header}</div>
      <div style={{float:'left',marginLeft:'20px'}}>
        <Menu onClick={e => setCurrent(e.key)} selectedKeys={current} mode="horizontal">
          {menuItem.map((item) => {
            //console.log(item)
            return (
              <Menu.Item key={item.key}>
                <Link to={item.routeurl}><Icon type={item.icon} />{item.name}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </div>
      <div style={{float:'right',marginRight:'20px'}}><Search /></div>
    </Fragment>
  );
}