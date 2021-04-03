import { createFromIconfontCN } from "@ant-design/icons";
import { Space } from "antd";
import React from "react";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2372312_khsjz5kyn4.js",
});

const Scrollfiturtype = ({ data = [] }) => {
  // console.log(data, "DATA");
  return (
    <div>
      <div style={{ width: "100%", overflowX: "scroll" }}>
        <div style={{ width: "max-content" }}>
          <Space style={{ margin: "20px 0" }}>
            {data.map((val, idx) => {
              return (
                <a href={"/product/detail/" + val.keyProduct}>
                  <div
                    key={idx}
                    style={{
                      width: "172px",
                      padding: "16px",
                      border: "1px solid #34488D",
                      borderRadius: "5px",
                      height: "240px",
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
                        height: "140px",
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
              );
            })}
          </Space>
        </div>
      </div>
      <Space align="center">
        <IconFont
          type="icon-ellipse-solid"
          style={{ color: "#FF3636", fontSize: "8px" }}
        />
        Slide to see more
        <IconFont
          type="icon-swap-right"
          style={{ fontSize: "28px", fontWeight: 300 }}
        />
      </Space>
    </div>
  );
};

export default Scrollfiturtype;
