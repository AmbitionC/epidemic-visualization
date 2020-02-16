import React, { useState, useMemo } from 'react';

import { Layout, Menu, Icon, Button } from 'antd';
import DonateForm from 'components/form/DonateForm';
import NeedForm from 'components/form/NeedForm';
import Map from 'components/map/Map';
import { variableMap } from '../global/variable';

const { Sider, Content } = Layout;

// 导航菜单的内容，主要包括：图标、名称、点击之后对应的主区域的组件
const menu = [
  {
    icon: 'environment',
    name: variableMap.menuMap,
    component: <Map />,
  },
  {
    icon: 'team',
    name: variableMap.menuDonate,
    component: <DonateForm />,
  },
  {
    icon: 'team',
    name: variableMap.menuNeed,
    component: <NeedForm />,
  },
];

export default () => {
  // 菜单是否收起
  const [collapsed, setCollapsed] = useState(false);
  // 菜单的索引，和上面的menu相同
  const [componentIndex, setComponentIndex] = useState(0);
  // 使用memo使得点击菜单时，不会重复刷新菜单
  const navigation = useMemo(() => {
    // 菜单点击之后的触发的函数
  const handleClick = e => setComponentIndex(e.key);
    return (
      <Sider collapsed={collapsed}>
        <Menu
          defaultSelectedKeys={['0']}
          mode="inline"
          theme="light"
          onClick={handleClick}
        >
          {menu.map((item, index) => {
            return (
              <Menu.Item key={index}>
                <Icon type={item.icon} />
                <span>{item.name}</span>
              </Menu.Item>
            );
          })}
        </Menu>
        <Button onClick={() => setCollapsed(!collapsed)}>
          <Icon type={collapsed ? 'right' : 'left'} />
        </Button>
      </Sider>
    );
  }, [collapsed]);

  return (
    <>
      {navigation}
      <Content>
        {menu[componentIndex]['component']}
      </Content>
    </>
  );
}
