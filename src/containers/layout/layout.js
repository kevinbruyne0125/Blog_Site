import React, { Component } from 'react'
import { 
  Layout,
  Card,
  Row,
  Col
} from 'antd'
import HeaderCustom from '../../components/header/headerCustom'
import SiderCustom from '../../components/sider/siderCustom'
import './layout.css'
const { Content, Footer } = Layout
class Index extends Component {
  render() {
    return (
      <Layout className="wrapper">
        <HeaderCustom></HeaderCustom>
        <Layout className="wrapper-container">
          <Layout className="wrapper-content">
            <Content
              style={{ padding: 24, margin: 0, minHeight: 280, height: '100%', overflow: 'initial'}}
            >
              <Row>
                <Col span={14} offset={2}>
                  <Card title="Card title">
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                  </Card>
                  <Card title="Card title">
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                  </Card>
                  <Card title="Card title">
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                  </Card>
                  <Card title="Card title">
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                  </Card>
                </Col>
                <Col span={6} offset={1}>
                <SiderCustom></SiderCustom>
                </Col>
              </Row>
              <Footer
                style={{textAlign: 'center'}}
              >
                Blog website ©2018 Created by Water
              </Footer>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default Index