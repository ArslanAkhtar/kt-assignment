import React, { useState, useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import SearchArtist from "../SearchArtist/SearchArtist";
import About from "../About/About";

const { Header, Sider, Content, Footer } = Layout;

const App = () => {
  const pathname = window.location.pathname;
  const [Key, setKey] = useState(["1"]);

  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  useEffect(() => {
    if (pathname === "/search") {
      setKey(["2"]);
    } else {
      setKey(["1"]);
    }
  }, [pathname]);

  return (
    <Router>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">{!collapsed && <span>Assignment</span>}</div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            selectedKeys={Key}
          >
            <Menu.Item
              key="1"
              icon={<UserOutlined />}
              onClick={() => setKey(["1"])}
            >
              <NavLink to="/" activeClassName="selected">
                About Me
              </NavLink>
            </Menu.Item>

            <Menu.Item
              key="2"
              icon={<VideoCameraOutlined />}
              onClick={() => setKey(["2"])}
            >
              <NavLink to="/search" activeClassName="selected">
                Search Artist
              </NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route exact path="/">
                <About />
              </Route>
              <Route path="/search">
                <SearchArtist />
              </Route>
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            KT Assignment ©2021 Created by Muhammad Arslan
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
