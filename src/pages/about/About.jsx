import React from "react";
import QueueAnim from "rc-queue-anim";
import Banner from "../../assets/cdd519ba6168c6087451cb730f621a54.jpeg";
import Banner2 from "../../assets/7e4824c7cce8d25fe1427e806d6320b6.jpeg";
import { Col, Row } from "antd";

const About = () => {
  return (
    <div>
      <QueueAnim
        key="a"
        style={{
          height: "720px",
          overflow: "hidden",
          maxHeight: "720px",
          position: "relative",
        }}
      >
        <div
          key="1"
          style={{
            backgroundImage: `url(${Banner2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        ></div>
        <div
          key="2"
          style={{
            background: "rgba(0,0,0, 0.5)",
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 2,
          }}
        ></div>

        <div
          key="3"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span style={{ textAlign: "center" }}>
            {/* <p style={{ color: "#fff", fontSize: "18px", fontWeight: "bold" }}>
              Who we are
            </p> */}
            <h1 style={{ color: "#fff", fontWeight: "700", fontSize: "48px" }}>
              PT.IOT KREASI INDONESIA
            </h1>
            <p style={{ color: "#fff", fontSize: "18px", lineHeight: "24px" }}>
              An IoT provider company based in Indonesia. <br /> Focusing on IoT
              Solution in the era of 4.0 <br /> and build an IoT platform to
              connect all the communication <br /> and information to achieve
              customer satisfaction.
            </p>
          </span>
        </div>
      </QueueAnim>
      <div className="about-us-content">
        {/* <h3>Our Jouney</h3>
        <p>
          An IoT provider company based in Indonesia. Focusing on IoT Solution
          in the era of 4.0 and build an IoT platform to connect all the
          communication and information to achieve customer satisfaction.
        </p> */}
        <img src={Banner} alt="img" />
        <Row>
          <Col
            xl={12}
            lg={12}
            md={12}
            sm={24}
            xs={24}
            style={{ textAlign: "left" }}
          >
            <h3>Our Vision</h3>
            <p>One Stop End-End IOT Solution Provider</p>
          </Col>
          <Col
            xl={12}
            lg={12}
            md={12}
            sm={24}
            xs={24}
            style={{ textAlign: "left" }}
          >
            <h3>Our Mission</h3>
            <p>
              Connecting the world through IoT ecosystem infrastructure. We
              replace manual business process and bring the IoT solution for
              Digital Transformation
            </p>
          </Col>
        </Row>
      </div>
      <div className="footer-black-wiots">
        <div
          key="1"
          style={{
            backgroundImage: `url(https://s3-alpha-sig.figma.com/img/bb0a/7323/f407fef6eaab7722674cf98344079154?Expires=1615161600&Signature=AmNKsYQa5cCRpSo~ya5FPXfCOZCGBF~mY0gBGmjASQ0ToqXdV2dm92Qu0o80zermR0VsSdn9cJAnrNJ0QA5Eo2a4FuLbheynq20kRL0CTm8RitiSTiBuLPJ3ByMVdRxDM71xVT-Wo4ySQi0o4n7rBWzA-3saPhub9N1mheoXwYGZYD34JiOw6BamBU3QwD3CB1ZCzwKi947gk1K6AXXj5yRlXQh6v2OP7hlzAxXrrH4VUCLT5Wf9UwgT2IPAZlGZFjGZvN6qa6IZ-XLTNOb-GVA~k4IZUuIYrwFXa2wqtQriLyJMuEBKEFOumg5iQN2to7NMSyi85XpR2BSgUgAdqA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
            width: "70%",
            height: "100%",
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
          }}
        ></div>
        <div
          key="2"
          style={{
            background: "rgba(0,0,0, 0.5)",
            position: "absolute",
            width: "70%",
            height: "100%",
            zIndex: 2,
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
          }}
        ></div>

        <div
          key="3"
          style={{
            position: "absolute",
            width: "70%",
            height: "100%",
            zIndex: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
          }}
        >
          <span style={{ textAlign: "center" }}>
            <h1 className="text-bottom-black-wiots">
              One Stop End-End IOT <br /> Solution Provier
            </h1>
          </span>
        </div>
      </div>
      <div className="white-bottom-weiots"></div>
      <div className="black-bottom-weiots"></div>
    </div>
  );
};

export default About;
