import React from "react";
import QueueAnim from "rc-queue-anim";
import Banner2 from "../../assets/9d96a33c8104f441c6f952b970ae43bb.jpeg";
import { Col, Row, Space, Form, Button, Input, message } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";
import Axios from "axios";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2372312_fkor7kha6c8.js",
});

const Contact = () => {
  const [loading, setLoading] = React.useState(false);
  const onFinish = (values) => {
    console.log("Success:", values);
    setLoading(true);
    Axios.post("https://smtp.we-iots.com/api/send/email", {
      email: "sales@weiots.io",
      subject:
        values.email + " | " + values.name + ": Send Email from contact Us",
      text: values.message,
    })
      .then((ok) => {
        setLoading(false);
        message.success("Email Sent");
      })
      .catch((err) => {
        console.log(err);
        message.error("Failed sending email");
        setLoading(false);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <QueueAnim
        key="a"
        style={{
          height: "520px",
          overflow: "hidden",
          maxHeight: "520px",
          position: "relative",
          zIndex: "auto",
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
            <h1 style={{ color: "#fff", fontWeight: "700", fontSize: "48px" }}>
              Contact Us
            </h1>
            <p style={{ color: "#fff", fontSize: "18px", lineHeight: "24px" }}>
              Don’t hesitate to call us if you need any <br /> information from
              us
            </p>
          </span>
        </div>
      </QueueAnim>
      <div
        className="container-contact-us"
        style={{
          position: "absolute",
          // width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zIndex: 5,
          top: 480,
        }}
      >
        <Row style={{ position: "relative" }}>
          <Col
            xl={12}
            lg={12}
            md={12}
            sm={24}
            xs={24}
            style={{ padding: "12px" }}
          >
            <div className="get-in-touch">
              <h3>GET IN TOUCH</h3>
              <div>
                <Space style={{ marginTop: "20px" }}>
                  <IconFont
                    type="icon-place"
                    style={{ color: "#e92b1d", fontSize: "24px" }}
                  />
                  <h4>Address</h4>
                </Space>
                <p>
                  Rukan Crown, Blok A No.23 Jl. Green Lake City Boulevard No.10,
                  RT.001/RW.010, Petir, Kec. Cipondoh, Kota Tangerang, Banten
                  15147 Indonesia
                </p>
                <Space style={{ marginTop: "20px" }}>
                  <IconFont
                    type="icon-phone"
                    style={{ color: "#e92b1d", fontSize: "24px" }}
                  />
                  <h4>Phone</h4>
                </Space>
                <p>+6221-5433-3290</p>
                <Space style={{ marginTop: "20px" }}>
                  <IconFont
                    type="icon-EmailHili"
                    style={{ color: "#e92b1d", fontSize: "24px" }}
                  />
                  <h4>Email</h4>
                </Space>
                <p>sales@weiots.io</p>
              </div>
            </div>
          </Col>
          <Col
            xl={12}
            lg={12}
            md={12}
            sm={24}
            xs={24}
            style={{ padding: "12px" }}
          >
            <div className="contact-us-form">
              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                size="large"
              >
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input placeholder="Name" className="new-form-black" />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input placeholder="Email" className="new-form-black" />
                </Form.Item>
                <Form.Item
                  name="message"
                  rules={[
                    { required: false, message: "Please input your email!" },
                  ]}
                >
                  <Input.TextArea
                    placeholder="Say Something"
                    className="new-form-black"
                    style={{ height: "180px" }}
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    size="large"
                    block
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                  >
                    Send
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <div className="white-contact-us"></div>
    </div>
  );
};

export default Contact;
