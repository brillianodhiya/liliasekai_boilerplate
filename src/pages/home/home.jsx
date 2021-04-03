import { Col, Row } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import Carousel from "../../components/carousel/carousel";
// import { useMediaQuery } from "react-responsive";
import { OverPack } from "rc-scroll-anim";
import QueueAnim from "rc-queue-anim";
import Section1 from "../../components/section/Section1";

import Devices from "../../assets/devices.jpg";
import Gateway from "../../assets/gateway.jpg";
import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2374854_964jvii9rf7.js",
});

const Home = () => {
  // const is654 = useMediaQuery({
  //   query: "(max-width: 672px)",
  // });

  return (
    <>
      <Carousel />
      <div
        style={{ textAlign: "center", width: "100%", height: "max-content" }}
      >
        <iframe
          className="iframe-weiots"
          src="https://www.youtube.com/embed/cR31l0yeGXQ"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <OverPack className="fitur-content">
        <QueueAnim component={Row} leaveReverse>
          <Col
            key="a"
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            style={{ textAlign: "center" }}
          >
            <Avatar
              src={Devices}
              // style={{ border: "1px solid #CCCCCC" }}
              size={{ xl: 128, lg: 128, md: 128, sm: 128, xs: 128 }}
            />
            <h3 className="title-fitur">Devices</h3>
            <p className="subtitle-fitur">
              connect the devices to <br /> an Available network
            </p>
          </Col>
          <Col
            key="b"
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            style={{ textAlign: "center" }}
          >
            <Avatar
              src={Gateway}
              // style={{ border: "1px solid #CCCCCC" }}
              size={{ xl: 128, lg: 128, md: 128, sm: 128, xs: 128 }}
            />
            <h3 className="title-fitur">Gateway</h3>
            <p className="subtitle-fitur">
              Extend a network by <br /> installing gateway links
            </p>
          </Col>
          <Col
            key="c"
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            style={{ textAlign: "center" }}
          >
            <Avatar
              style={{ backgroundColor: "#fff" }}
              icon={
                <IconFont
                  type="icon-cloud-server"
                  style={{ color: "#636466", fontSize: "92px" }}
                />
              }
              size={{ xl: 128, lg: 128, md: 128, sm: 128, xs: 128 }}
            />
            <h3 className="title-fitur">Network</h3>
            <p className="subtitle-fitur">
              Manage applications <br /> and devices
            </p>
          </Col>
          <Col
            key="d"
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            style={{ textAlign: "center" }}
          >
            <Avatar
              style={{ backgroundColor: "#fff" }}
              icon={
                <IconFont
                  type="icon-phone"
                  style={{ color: "#636466", fontSize: "92px" }}
                />
              }
              size={{ xl: 128, lg: 128, md: 128, sm: 128, xs: 128 }}
            />
            <h3 className="title-fitur">Application</h3>
            <p className="subtitle-fitur">
              Build applications for <br /> the devices
            </p>
          </Col>
        </QueueAnim>
      </OverPack>
      <Section1 />
      <div style={{ textAlign: "center", margin: "64px" }}>
        <h1 style={{ fontWeight: "bold" }}>Clients</h1>
      </div>
    </>
  );
};

export default Home;
