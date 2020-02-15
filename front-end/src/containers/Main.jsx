import React, { useState, useMemo } from 'react';

import { Layout, Menu, Icon, Button } from 'antd';

import DonateFormApp from 'form/DonateForm';
import NeedFormApp from 'form/NeedForm';
import AddressUi from 'map/map';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

// 这两个组件仅作为测试用
const TestComponent0 = () => <div>TestComponent0</div>
const TestComponent1 = () => <div>TestComponent1</div>

// 导航菜单的内容，主要包括：图标、名称、点击之后对应的主区域的组件
const menu = [
    {
        sub:'sub0',
        icon: 'dot-chart',
        name: '测试页面1',
        component: <TestComponent0 />
    },
    {
        sub:'sub0',
        icon: 'dot-chart',
        name: '测试页面2',
        component: <TestComponent1 />
    },
    {
        sub:'sub1',
        icon: 'line-chart',
        name: '测试组件1',
        component: <DonateFormApp />
    },
    {
        sub:'sub1',
        icon: 'line-chart',
        name: '测试组件2',
        component: <NeedFormApp />
    },
    {
        sub:'sub2',
        icon: 'environment',
        name: '武汉疫情地图',
        component: <AddressUi />,
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
                    <SubMenu
                        key="sub0"
                        title={
                            <span>
                                <Icon type="pie-chart"/>
                                <span>Navigation one</span>
                            </span>
                        }
                    >
                        {menu.map((item, index) => {
                            if(item.sub === 'sub0')
                            return (
                                <Menu.Item key={index}>
                                    <Icon type={item.icon} />
                                    <span>{item.name}</span>
                                </Menu.Item>
                            );
                        })}
                    </SubMenu>

                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="appstore"/>
                                <span>Navigation two</span>
                            </span>
                        }
                    >
                        {menu.map((item, index) => {
                            if(item.sub === 'sub1')
                            return (
                                <Menu.Item key={index}>
                                    <Icon type={item.icon} />
                                    <span>{item.name}</span>
                                </Menu.Item>
                            );
                        })}
                    </SubMenu>
                    <Menu.Item key="4">
                        <Icon type={menu[4].icon} />
                        <span>{menu[4].name}</span>
                    </Menu.Item>
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
