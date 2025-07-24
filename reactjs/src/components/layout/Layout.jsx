import { useState } from 'react';
import {
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
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
    return (
        <Layout style={{ minHeight: '100vh' }} hasSider>
            <Sider style={siderStyle} collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <div className="demo-logo-vertical bg-blue-950 my-3 flex justify-center align-middle rounded-2xl" >
                    <img src="https://img.icons8.com/dusk/64/huawei-logo.png" alt='sd' className='object-contain w-[50px] h-[50px]' />
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
                            window.location.reload()
                        }} className=' shadow-md !bg-red-400 !text-white hover:!bg-red-300 hover:!text-white !border-0' color='danger' >LogOut</Button>
                    </div>
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'User' }, { title: 'table' }]} />
                    {children || 'hello'}
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default LayoutPage;





// import React from 'react';
// import {
//   AppstoreOutlined,
//   BarChartOutlined,
//   CloudOutlined,
//   ShopOutlined,
//   TeamOutlined,
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from '@ant-design/icons';
// import { Layout, Menu, theme } from 'antd';
// const { Header, Content, Footer, Sider } = Layout;
// const siderStyle = {
//   overflow: 'auto',
//   height: '100vh',
//   position: 'sticky',
//   insetInlineStart: 0,
//   top: 0,
//   bottom: 0,
//   scrollbarWidth: 'thin',
//   scrollbarGutter: 'stable',
// };
// const items = [
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   BarChartOutlined,
//   CloudOutlined,
//   AppstoreOutlined,
//   TeamOutlined,
//   ShopOutlined,
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `nav ${index + 1}`,
// }));
// const App = () => {
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();
//   return (
//     <Layout hasSider>
//       <Sider style={siderStyle}>
//         <div className="demo-logo-vertical" />
//         <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
//       </Sider>
//       <Layout>
//         <Header style={{ padding: 0, background: colorBgContainer }} />
//         <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
//           <div
//             style={{
//               padding: 24,
//               textAlign: 'center',
//               background: colorBgContainer,
//               borderRadius: borderRadiusLG,
//             }}
//           >
//             <p>long content</p>
//             {
//               // indicates very long content
//               Array.from({ length: 100 }, (_, index) => (
//                 <React.Fragment key={index}>
//                   {index % 20 === 0 && index ? 'more' : '...'}
//                   <br />
//                 </React.Fragment>
//               ))
//             }
//           </div>
//         </Content>
//         <Footer style={{ textAlign: 'center' }}>
//           Ant Design ©{new Date().getFullYear()} Created by Ant UED
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };
// export default App;