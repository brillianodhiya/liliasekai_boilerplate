import { PhoneOutlined } from "@ant-design/icons";
import { Col, Row, Space } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import ImgSection from "../../assets/04499a33235b16bfdd18f99d2851c403.jpeg";
// import { OverPack } from "rc-scroll-anim";
// import QueueAnim from "rc-queue-anim";

const Section1 = () => {
  return (
    <Row sty>
      <Col xl={12} lg={12} md={12} sm={24} xs={24}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="section1-left">
            <img
              style={{
                position: "relative",
                width: "100%",
                borderRadius: "4px",
              }}
              src={ImgSection}
            />
          </div>
          {/* <a href="/contact-us" className="section-tag-a">
            <div className="section-tag">
              <Space size={40}>
                <p>
                  <h3>Contact Us</h3>
                  Request a Meeting
                </p>
                <Avatar
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(183,244,48,1) 0%, rgba(109,187,22,1) 100%)",
                  }}
                  icon={<PhoneOutlined />}
                />
              </Space>
            </div>
          </a> */}
        </div>
      </Col>
      <Col xl={12} lg={12} md={12} sm={24} xs={24}>
        <div className="section1-right">
          <h1>We Provide End to End IOT Solution</h1>
          <div>
            {/* Est. In 2021 ,  */}
            <p style={{ fontSize: "18px", lineHeight: "24px" }}>
              an IoT provider company based in Indonesia. Focusing on IoT
              Solution in the era of 4.0 and build an IoT platform to connect
              all the communication and information to achieve customer
              satisfaction.
            </p>
          </div>
          <a href="/contact-us" className="section-tag-a2">
            <div className="section-tag2">
              <Space size={40}>
                <p>
                  <h3>Contact Us</h3>
                  Request a Meeting
                </p>
                <Avatar
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(183,244,48,1) 0%, rgba(109,187,22,1) 100%)",
                  }}
                  icon={<PhoneOutlined />}
                />
              </Space>
            </div>
          </a>
        </div>
      </Col>
    </Row>
  );
};

export default Section1;
