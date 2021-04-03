import React from "react";
import {
  createFromIconfontCN,
  LeftSquareFilled,
  RightSquareFilled,
} from "@ant-design/icons";
import { Breadcrumb, Button, Col, Row } from "antd";
import { Products, SolutionsData } from "../../data/solutionDetail";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import QueueAnim from "rc-queue-anim";
import Kominfo from "../../assets/kominfo.png";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2372312_6m9ag3ounf.js",
});

const ProductDetail = (props) => {
  const [left1H, setLeft1H] = React.useState(0);

  const refright1 = React.useRef(null);

  const size = useWindowSize();

  React.useEffect(() => {
    setLeft1H(refright1.current.clientHeight);
    // console.log(refright1.current.clientHeight);
  }, [size]);
  // Hook
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = React.useState({
      width: undefined,
      height: undefined,
    });

    React.useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
  }

  const useData2 = () => {
    if (props.match.params.key) {
      return SolutionsData.filter(
        (val) =>
          val.key.toLowerCase() ==
          Products.filter(
            (val) =>
              val.keyProduct.toLowerCase() ==
              props.match.params.key.toLowerCase()
          )[0].key.toLowerCase()
      )[0];
    } else {
      return {
        product: [],
      };
    }
  };

  const data2 = useData2();

  const useData = () => {
    if (props.match.params.key) {
      return Products.filter(
        (val) =>
          val.keyProduct.toLowerCase() == props.match.params.key.toLowerCase()
      )[0];
    } else {
      return {
        img: [],
      };
    }
  };

  const data = useData();

  //   console.log(data2, "DATA2");

  const settings = {
    dots: true,
    className: "product-settings",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    rows: 1,
    nextArrow: (
      <RightSquareFilled style={{ color: "#ff3636", fontSize: "32px" }} />
    ),
    prevArrow: (
      <LeftSquareFilled style={{ color: "#ff3636", fontSize: "32px" }} />
    ),
  };

  return (
    <div className="detail-product-container">
      <Breadcrumb
        style={{ fontSize: "18px", color: "#000" }}
        separator={<IconFont style={{ color: "#ff3636" }} type="icon-dot" />}
      >
        <Breadcrumb.Item>Homepage</Breadcrumb.Item>
        <Breadcrumb.Item>Products</Breadcrumb.Item>
        <Breadcrumb.Item>{data.desc}</Breadcrumb.Item>
      </Breadcrumb>
      <Row style={{ marginTop: "42px" }}>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <Slider {...settings}>
            {data.img.map((val, idx) => {
              return (
                <div>
                  <div
                    style={{
                      width: "100%",
                      textAlign: "center",
                      display: "inline-block",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        overflow: "hidden",
                        position: "relative",
                        display: "inline-block",
                        // padding: val.name == "Puri Indah Mall" ? "0 0 40 0" : 0,
                      }}
                    >
                      <img
                        alt="ImgProduct"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          width: "70%",
                          margin: "0 auto 0 16px",
                          height: "auto",
                        }}
                        src={val}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
          {data.is_gateway ? (
            <div
              style={{
                fontStyle: "italic",
                float: "right",
                textAlign: "center",
                margin: "0 24px",
              }}
            >
              Certified by <br />
              <img
                src={Kominfo}
                style={{ position: "relative", width: "52px" }}
              />
            </div>
          ) : null}
          {data.logo_mini ? (
            <div
              style={{
                fontStyle: "italic",
                float: "right",
                textAlign: "center",
                margin: "0 32px",
              }}
            >
              <img
                src={data.logo_mini}
                style={{ position: "relative", width: "132px" }}
              />
            </div>
          ) : null}
        </Col>
        <Col
          xl={12}
          lg={12}
          md={12}
          sm={24}
          xs={24}
          //   style={{ padding: "0 32px" }}
          className="product-detail-right"
        >
          {/* <h3 style={{ fontWeight: "bold" }}>{data2.title}</h3> */}
          <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>{data.desc}</h1>
          <br />
          <p
            style={{ fontSize: "18px", lineHeight: "24px", fontWeight: "400" }}
          >
            {data.desc_product}
          </p>
          <br />
          {/* <img
            alt="desc"
            style={{ position: "relative", width: "100%" }}
            src={data.desc_img}
          /> */}
          <QueueAnim component="table" className="table-striped-weiots">
            {/* <table className="table-striped-weiots"> */}
            {data.spec.map((val, idx) => {
              return (
                <tr key={idx}>
                  <td
                    style={{
                      width: val.title == "" ? "auto" : "140px",
                      fontWeight: "bold",
                    }}
                  >
                    {val.title}
                  </td>
                  <td>{val.value}</td>
                </tr>
              );
            })}
            {/* </table> */}
          </QueueAnim>
        </Col>
      </Row>

      <Row style={{ marginTop: "64px" }}>
        <Col
          xl={0}
          lg={0}
          md={0}
          sm={24}
          xs={24}
          style={{
            overflow: "hidden",
            height: left1H,
            backgroundImage: `url(${data2.img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "1px",
          }}
        ></Col>
        <Col
          xl={14}
          lg={14}
          md={14}
          sm={24}
          xs={24}
          ref={refright1}
          className="left-solution-details"
          // style={{ padding: "20px", background: "#EE3326" }}
        >
          <h1 style={{ color: "#fff", fontSize: "48px" }}>{data2.title}</h1>
          <p
            style={{
              color: "#fff",
              fontSize: "18px",
              lineHeight: "24px",
            }}
          >
            {data2.desc}
          </p>
        </Col>
        <Col
          xl={10}
          lg={10}
          md={10}
          sm={0}
          xs={0}
          style={{
            overflow: "hidden",
            height: left1H,
            backgroundImage: `url(${data2.img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "1px",
          }}
        ></Col>
      </Row>
      <Row style={{ marginTop: "24px" }}>
        <Col span={24}>
          <Button
            onClick={() => props.history.push("/solution")}
            className="button-orange"
            block
            size="large"
            type="primary"
            style={{ height: "64px" }}
          >
            See Solution Detail
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;
