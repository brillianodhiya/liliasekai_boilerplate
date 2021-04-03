import { Col, Row, Tabs } from "antd";
import React from "react";
import { Products } from "../../data/solutionDetail";

const { TabPane } = Tabs;

const Product = () => {
  return (
    <div className="detail-product-container">
      <Row>
        <Col span={24}>
          <div>
            <h1 style={{ margin: "0" }}>The Products</h1>
            <div
              style={{
                width: "120px",
                borderTop: "6px solid #ee3326",
                borderRadius: "1px",
              }}
            ></div>
          </div>
        </Col>
      </Row>
      <Tabs defaultActiveKey="1" style={{ marginTop: "24px" }}>
        <TabPane tab="IoT Sensors" key="1">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {Products.filter(
              (val) => val.is_gateway !== true && val.is_smart_meter !== true
            ).map((val, idx) => {
              return (
                <Col
                  className="gutter-row"
                  xl={6}
                  lg={6}
                  md={8}
                  sm={8}
                  xs={12}
                  style={{ margin: "32px 0 0 0" }}
                >
                  <a href={"/product/detail/" + val.keyProduct}>
                    <div
                      key={idx}
                      style={{
                        width: "100%",
                        padding: "16px",
                        border: "1px solid #34488D",
                        borderRadius: "5px",
                        height: "280px",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={val.img[0]}
                        key={idx}
                        style={{
                          height: "160px",
                          position: "relative",
                          alignSelf: "center",
                        }}
                      />
                      <br />
                      <p
                        style={{
                          alignSelf: "center",
                          color: "#000",
                        }}
                      >
                        {val.desc}
                      </p>
                    </div>
                  </a>
                </Col>
              );
            })}
          </Row>
        </TabPane>
        <TabPane tab="Smart Meter" key="3">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {Products.filter((val) => val.is_smart_meter === true).map(
              (val, idx) => {
                return (
                  <Col
                    className="gutter-row"
                    xl={6}
                    lg={6}
                    md={8}
                    sm={8}
                    xs={12}
                    style={{ margin: "32px 0 0 0" }}
                  >
                    <a href={"/product/detail/" + val.keyProduct}>
                      <div
                        key={idx}
                        style={{
                          width: "100%",
                          padding: "16px",
                          border: "1px solid #34488D",
                          borderRadius: "5px",
                          height: "280px",
                          textAlign: "center",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={val.img[0]}
                          key={idx}
                          style={{
                            height: "160px",
                            position: "relative",
                            alignSelf: "center",
                          }}
                        />
                        <br />
                        <p
                          style={{
                            alignSelf: "center",
                            color: "#000",
                          }}
                        >
                          {val.desc}
                        </p>
                      </div>
                    </a>
                  </Col>
                );
              }
            )}
          </Row>
        </TabPane>
        <TabPane tab="Lora Gateway" key="2">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {Products.filter((val) => val.is_gateway === true).map(
              (val, idx) => {
                return (
                  <Col
                    className="gutter-row"
                    xl={6}
                    lg={6}
                    md={8}
                    sm={8}
                    xs={12}
                    style={{ margin: "32px 0 0 0" }}
                  >
                    <a href={"/product/detail/" + val.keyProduct}>
                      <div
                        key={idx}
                        style={{
                          width: "100%",
                          padding: "16px",
                          border: "1px solid #34488D",
                          borderRadius: "5px",
                          height: "280px",
                          textAlign: "center",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={val.img[0]}
                          key={idx}
                          style={{
                            height: "160px",
                            position: "relative",
                            alignSelf: "center",
                          }}
                        />
                        <br />
                        <p
                          style={{
                            alignSelf: "center",
                            color: "#000",
                          }}
                        >
                          {val.desc}
                        </p>
                      </div>
                    </a>
                  </Col>
                );
              }
            )}
          </Row>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Product;
