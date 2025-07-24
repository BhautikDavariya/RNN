'use client'
import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('User', '1', <UserOutlined />),
];
const siderStyle = {
    overflow: 'auto',
    height: '100vh',
    position: 'sticky',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarGutter: 'stable',
};
const LayoutPage = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const router = useRouter()
    return (
        <Layout style={{ minHeight: '100vh' }} hasSider>
            <Sider style={siderStyle} collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <div className="demo-logo-vertical bg-blue-950 my-3 flex justify-center align-middle rounded-2xl" >
                    <Image src="https://img.icons8.com/dusk/64/huawei-logo.png" className='object-contain' width={50} height={50} />
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>
                <Header

                    style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        background: colorBgContainer
                    }}
                >
                    <div className='text-end  w-full'>
                        <Button onClick={() => {
                            localStorage.clear()
                            router.push('/login')
                        }} className=' shadow-md !bg-red-400 !text-white hover:!bg-red-300 hover:!text-white !border-0' color='danger' >LogOut</Button>
                    </div>
                </Header>
                <Content style={{ padding: '0 16px', background: "rgb(169 169 169 / 51%)" }}>
                    <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'User' }, { title: 'table' }]} />
                    {children || 'hello'}
                </Content>
                <Footer style={{ textAlign: 'center', background: "rgb(169 169 169 / 51%)" }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default LayoutPage;


