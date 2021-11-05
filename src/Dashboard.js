import { Layout, Menu } from 'antd';
import React from 'react'
import {

  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  OrderedListOutlined,
  HomeOutlined,
  FolderAddOutlined ,
  LogoutOutlined,
  ApiOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" >
             <h2 style={{marginTop:20}}>Noob Cooder</h2> 
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[window.location.pathname]}>
            <Menu.Item key="/" icon={<HomeOutlined />}>
            <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key="/tables" icon={<UserOutlined />}>
            <Link to='/tables'>Students Data Tables</Link>
            </Menu.Item>
            <Menu.Item key="/forms" icon={<FolderAddOutlined  />}>
            <Link to='/forms'>Forms Validation</Link>
            </Menu.Item>
            <Menu.Item key="/todolist" icon={<OrderedListOutlined />}>
            <Link to='/todolist'>TodoList</Link>
            </Menu.Item>
            <Menu.Item key="/api" icon={<ApiOutlined />}>
            <Link to='/api'>API</Link>
            </Menu.Item>
            <Menu.Item key="/logout" icon={<LogoutOutlined />}>
            <Link to='/logout'>Logout</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background">
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;