import { LeftSquareFilled, RightSquareFilled } from "@ant-design/icons";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Clients = ({ data = [] }) => {
  const settings = {
    dots: true,

    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 500,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: data.length > 3,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          // autoplay: true,
          // autoplaySpeed: 2000,
          // rtl: true
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          nextArrow: (
            <RightSquareFilled style={{ color: "#ff3636", fontSize: "32px" }} />
          ),
          prevArrow: (
            <LeftSquareFilled style={{ color: "#ff3636", fontSize: "32px" }} />
          ),

          //   rows: 2,
          // autoplay: true,
          // autoplaySpeed: 2000,
          // rtl: true
        },
      },
    ],
  };
  return (
    <div style={{ margin: "64px" }}>
      <Slider {...settings} autoplay={true}>
        {data.map((val, idx) => {
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
                    width: 214,
                    maxWidth: 214,
                    overflow: "hidden",
                    position: "relative",
                    display: "inline-block",
                    // padding: val.name == "Puri Indah Mall" ? "0 0 40 0" : 0,
                  }}
                >
                  <img
                    style={{
                      position: "relative",
                      display: "inline-block",
                      width: val.name == "Puri Indah Mall" ? "auto" : "80%",
                      margin: "0 auto 0 16px",
                      height: val.name == "Puri Indah Mall" ? 200 : "auto",
                    }}
                    src={val.img}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Clients;
