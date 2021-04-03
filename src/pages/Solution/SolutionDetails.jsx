import { Col, Row } from "antd";
import React from "react";
import NotFound from "../../components/404/NotFound";
import { SolutionsData } from "../../data/solutionDetail";

const style = { padding: "8px 0" };

const SolutionDetails = (props) => {
  // console.log(props.match.params.type, "PROPS");
  const [data, setData] = React.useState({
    product: [],
  });
  const [left1H, setLeft1H] = React.useState(0);

  const size = useWindowSize();

  const refright1 = React.useRef(null);

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

  React.useEffect(() => {
    if (props.match.params.type) {
      setData(
        SolutionsData.filter(
          (val) =>
            val.key.toLowerCase() === props.match.params.type.toLowerCase()
        )[0]
      );
    } else {
      setData({
        product: [],
      });
    }
  }, []);

  return (
    <div>
      {props.match.params.type ? (
        SolutionsData.filter(
          (val) =>
            val.key.toLowerCase() === props.match.params.type.toLowerCase()
        ).length > 0 ? (
          <div className="detail-solution-container">
            <Row>
              <Col
                xl={0}
                lg={0}
                md={0}
                sm={24}
                xs={24}
                style={{
                  overflow: "hidden",
                  height: left1H,
                  backgroundImage: `url(${data.img})`,
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
                <h1 style={{ color: "#fff", fontSize: "48px" }}>
                  {data.title}
                </h1>
                <p
                  style={{
                    color: "#fff",
                    fontSize: "18px",
                    lineHeight: "24px",
                  }}
                >
                  {data.desc}
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
                  backgroundImage: `url(${data.img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "1px",
                }}
              ></Col>
            </Row>
            <Row style={{ margin: "64px 0 0 0" }}>
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
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              {data.product.map((val, idx) => {
                return (
                  <Col
                    className="gutter-row"
                    xl={6}
                    lg={6}
                    md={8}
                    sm={8}
                    xs={12}
                    style={{ margin: "64px 0 0 0" }}
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
                          src={val.img}
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
          </div>
        ) : (
          <NotFound />
        )
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default SolutionDetails;
