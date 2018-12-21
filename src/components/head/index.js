import React, { Component } from 'react';
import './index.scss';
import { Menu, Icon, Row, Col } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Head extends React.Component {
    state = {
        current: 'mail',
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <Row type="flex" justify="center">
                <Col md={8} xs={24} sm={24} className="hidden-sm-and-down">
                    <div className="combined-bar"></div>
                    <div className="logo">
                        xzzdll Blog
      </div>
                </Col>
                <Col className="menu" md={10} xs={24} sm={24}>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                    >
                        <Menu.Item key="mail">
                            <Icon type="mail" />文章
      </Menu.Item>
                        <Menu.Item key="app">
                            <Icon type="appstore" />说说
      </Menu.Item>
                        <Menu.Item key="alipay">
                            <Icon type="alipay" />归档
      </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        );
    }
}

export default Head
