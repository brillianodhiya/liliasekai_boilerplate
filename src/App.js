import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.less";
import Loading from "./components/loading/Loading";
import { Layout, Menu, BackTop, Row, Col, Space, Button, Input } from "antd";
import routes from "./routes";
import WeiotsLogo from "./assets/iki-logo.png";
import { createFromIconfontCN, MenuOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import Texty from "rc-texty";
import "rc-texty/assets/index.css";
import QueueAnim from "rc-queue-anim";
import CookieConsent from "react-cookie-consent"; // getCookieConsentValue, // Cookies,

const { Search } = Input;

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2372312_1swxkgabrem.js",
});

const { Header, Content, Footer } = Layout;

const App = (props) => {
  const is654 = useMediaQuery({
    query: "(max-width: 672px)",
  });
  const [path, setPath] = React.useState("/home");
  const [collapse, setcollapse] = React.useState(true);

  const getPath = () => {
    return window.location.pathname;
  };
  const pathdata = getPath();

  React.useEffect(() => {
    setPath(pathdata === "/" ? "/home" : pathdata);
  }, [pathdata]);

  return (
    <BrowserRouter>
      <Layout className="layout" style={{ background: "unset" }}>
        <Header style={{ background: "unset" }}>
          <Menu
            style={{
              background: "#fff",
            }}
            mode="horizontal"
            onSelect={(e) => setPath(e.selectedKeys[0])}
            theme="light"
            selectedKeys={[path]}
            expandIcon={<MenuOutlined />}
          >
            <Menu.Item style={{ float: "left" }} key="/home" className="logo">
              <Link to="/">
                <img src={WeiotsLogo} className="weiots-logo" />
              </Link>
            </Menu.Item>
            {!is654 ? (
              [
                <Menu.Item key="/contact-us" style={{ float: "right" }}>
                  <Link to="/contact-us">Contact Us</Link>
                </Menu.Item>,
                <Menu.Item key="/about-us" style={{ float: "right" }}>
                  <Link to="/about-us">About Us</Link>
                </Menu.Item>,
                <Menu.Item key="/product" style={{ float: "right" }}>
                  <Link to="/product">Product</Link>
                </Menu.Item>,
                <Menu.Item key="/solution" style={{ float: "right" }}>
                  <Link to="/solution">Solution</Link>
                </Menu.Item>,
                <Menu.Item key="/home" style={{ float: "right" }}>
                  <Link to="/">Home</Link>
                </Menu.Item>,
              ]
            ) : (
              <Menu.Item style={{ float: "right" }}>
                <Button size="large" onClick={() => setcollapse(!collapse)}>
                  {/* <MenuOutlined style={{ margin: 0, fontWeight: "bold" }} /> */}
                  <IconFont
                    type="icon-menu"
                    style={{ fontSize: "16px", margin: 0 }}
                  />
                </Button>
              </Menu.Item>
            )}
          </Menu>
        </Header>
        <Menu
          theme="light"
          // collapsedWidth="0"
          mode="inline"
          className="sider-custom"
          onSelect={(e) => setPath(e.selectedKeys[0])}
          theme="light"
          selectedKeys={[path]}
          inlineCollapsed={collapse}
        >
          <Menu.Item key="/home" className="logo" style={{ margin: "12px 0" }}>
            <Link to="/">
              <img src={WeiotsLogo} className="weiots-logo" />
            </Link>
          </Menu.Item>
          <Menu.Divider></Menu.Divider>
          <Menu.Item key="/home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/solution">
            <Link to="/solution">Solution</Link>
          </Menu.Item>
          <Menu.Item key="/product">
            <Link to="/product">Product</Link>
          </Menu.Item>
          <Menu.Item key="/about-us">
            <Link to="/about-us">About Us</Link>
          </Menu.Item>
          <Menu.Item key="/contact-us">
            <Link to="/contact-us">Contact Us</Link>
          </Menu.Item>
        </Menu>
      </Layout>
      <Content onClick={() => setcollapse(true)}>
        <React.Suspense fallback={Loading()}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <route.component {...props} name={route.name} />
                  )}
                />
              ) : null;
            })}
            {/* <Route path="/" render={() => <Home />} />
            <Route path="/home" render={() => <Home />} /> */}
          </Switch>
        </React.Suspense>
      </Content>
      <Footer
        onClick={() => setcollapse(true)}
        style={{
          background: "#000",
        }}
      >
        <Row>
          <Col xl={{ span: 7, offset: 1 }} sm={11} xs={24}>
            <h2
              style={{
                color: "#fff",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
            >
              <Texty interval={5}>IKI (PT. IoT Kreasi Indonesia)</Texty>
            </h2>
            <Space align="center">
              <IconFont
                type="icon-place"
                className="icon-place-footer"
                style={{
                  color: "#F2C40F",
                  fontSize: "24px",
                }}
              />
              <span
                // style={{ display: "block", color: "#fff", lineHeight: "28px" }}
                className="alamat-iki"
              >
                {/* <Texty interval={5} type="left" mode="smooth"> */}
                Rukan Crown, Jl. Green Lake City Boulevard No.10, <br />
                RT.001/RW.010, Petir, Cipondoh, Tangerang City, <br /> Banten
                15147
                {/* </Texty> */}
              </span>
            </Space>
          </Col>
          <Col
            xl={{ span: 6, offset: 2 }}
            sm={{ span: 5, offset: 1 }}
            xs={{ span: 24, offset: 0 }}
          >
            {/* <QueueAnim delay={500}> */}
            <QueueAnim
              component="ul"
              style={{
                listStyle: "none",
                padding: "unset",
                width: "max-content",
              }}
              delay={300}
              className="ul-footer"
            >
              <li key="a">
                <Link
                  to="/"
                  onClick={() => setPath("/home")}
                  className="footerlink"
                >
                  Homepage
                </Link>{" "}
              </li>
              <li key="b">
                <Link
                  to="/solution"
                  onClick={() => setPath("/solution")}
                  className="footerlink"
                >
                  Solution
                </Link>
              </li>
              <li key="c">
                <Link
                  to="/product"
                  onClick={() => setPath("/product")}
                  className="footerlink"
                >
                  Products
                </Link>
              </li>
              <li key="d">
                <Link
                  to="/about-us"
                  onClick={() => setPath("/about-us")}
                  className="footerlink"
                >
                  About Us
                </Link>
              </li>
            </QueueAnim>
            {/* </QueueAnim> */}
          </Col>
          <Col
            xl={7}
            sm={24}
            xs={24}
            style={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5263764823853!2d106.70011661476906!3d-6.19406049551589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f917f6f93d4b%3A0x7464ce7403c546f4!2sIoT%20Kreasi%20Indonesia!5e0!3m2!1sid!2sid!4v1614155956739!5m2!1sid!2sid"
              width="100%"
              loading="lazy"
            ></iframe>
            {/* <span style={{ color: "#fff" }}>
              Stay up to date on the latest news
              <Search
                className="subscribe-weiots"
                placeholder="Your Email"
                allowClear
                enterButton="Send"
                size="large"
                onSearch={(value) => console.log(value)}
              />
            </span> */}
          </Col>
        </Row>
        <Row style={{ marginTop: "20px", borderTop: "2px solid #000" }}>
          <Col span={24} style={{ color: "#fff", textAlign: "center" }}>
            @2021 PT.IoT Kreasi Indonesia . All rights reserved
          </Col>
        </Row>
        <CookieConsent
          location="bottom"
          buttonText="ACCEPT"
          enableDeclineButton
          ButtonComponent={Button}
          cookieName="myAwesomeCookieName2"
          style={{ background: "rgba(61,65,66,0.85)" }}
          buttonStyle={{}}
          expires={150}
          contentClasses="cookie-content"
          declineButtonText="DECLINE"
          declineButtonClasses="cookie-button ant-btn ant-btn-lg"
          buttonClasses="cookie-button ant-btn ant-btn-primary ant-btn-lg"
        >
          <div className="cookie-img-box">
            <img
              src="data:image/svg+xml,%3Csvg width='50' height='50' xmlns='http://www.w3.org/2000/svg' fill='white' fill-rule='evenodd' clip-rule='evenodd'%3E%3Cpath d='M48 24.3A24 24 0 010 24c8 2.1 15.4-4 12-12 9.3 1.3 13.7-4.8 12.2-12A24 24 0 0148 24.3zm-31.2-8.2c0 6.7-5.6 11.7-12.3 12.3a20 20 0 1023.8-24 12.7 12.7 0 01-11.5 11.7zM27 34a3 3 0 110 6 3 3 0 010-6zm-11-5.7a4 4 0 110 8 4 4 0 010-8zM36 24a4 4 0 110 8 4 4 0 010-8zm-10 0a2 2 0 110 4 2 2 0 010-4zm5-10a3 3 0 110 6 3 3 0 010-6zM6 14a2 2 0 110 4 2 2 0 010-4zM3 6a3 3 0 110 6 3 3 0 010-6zm12-4a3 3 0 110 6 3 3 0 010-6zM8 0a2 2 0 110 4 2 2 0 010-4z'/%3E%3C/svg%3E"
              className="cookie-img"
              alt="cookie-img"
            />
          </div>
          <div>
            <div className="cookie-box-title">Cookies Policy</div>
            <div className="cookie-box-content">
              Our website uses cookies to analyze how the site is used and to
              ensure your experience is consistent between visits
            </div>
          </div>
        </CookieConsent>
      </Footer>
      <BackTop />
    </BrowserRouter>
  );
};

export default App;
