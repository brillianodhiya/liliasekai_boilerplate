import React from "react";
import Section2 from "../../components/section/section2";
import QueueAnim from "rc-queue-anim";
import Banner from "../../assets/solutionimg.jpg";
// import Texty from "rc-texty";
import LogoWeiots from "../../assets/weiots-transparent.png";

const Solution = () => {
  return (
    <QueueAnim>
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
            backgroundImage: `url(${Banner})`,
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
            <img
              src={LogoWeiots}
              style={{
                position: "relative",
                display: "block",
                width: "240px",
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
                textAlign: "center",
                marginBottom: "24px",
              }}
            />

            <p style={{ color: "#fff", fontSize: "18px", lineHeight: "24px" }}>
              WE Provide End to End IOT Solution
            </p>
          </span>
        </div>
      </QueueAnim>
      <Section2 key="b" />
    </QueueAnim>
  );
};

export default Solution;
