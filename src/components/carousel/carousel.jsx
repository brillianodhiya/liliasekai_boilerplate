import React from "react";
import BannerAnim from "rc-banner-anim";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import "rc-banner-anim/assets/index.css";
// import Carousel1 from "../../assets/carousel1.png";
import { Button } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";
import CarouselOverlay from "../../assets/overlay.png";
import Carousel2 from "../../assets/carousel2.png";
import Carousel3 from "../../assets/carousel3.jpg";
import Carousel4 from "../../assets/carousel4.jpg";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2372312_o2cgcf8xv7q.js",
});

const { Element } = BannerAnim;
const BgElement = Element.BgElement;

const Carousel = () => {
  return (
    <BannerAnim
      prefixCls="banner-user"
      autoPlay
      autoPlaySpeed={6000}
      type={[
        "gridBar",
        "vertical",
        "verticalOverlay",
        "across",
        "across",
        "acrossOverlay",
      ]}
    >
      <Element prefixCls="banner-user-elem" key="0">
        <QueueAnim>
          <img
            key="1"
            src={CarouselOverlay}
            className="overlay-carousel"
            style={{
              position: "fixed",
              zIndex: "2",
              height: "100%",
              transform: "rotate(270deg)",
              left: "-6%",
            }}
          />
          <div
            key="2"
            style={{
              width: "100%",
              height: "100%",
              position: "fixed",
              zIndex: "2",
              background:
                "linear-gradient(3deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 100%)",
            }}
          ></div>
        </QueueAnim>
        <BgElement
          key="bg"
          className="bg"
          style={{
            // backgroundImage: `url(${Carousel1})`,
            backgroundImage: `url(${Carousel2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <TweenOne
          className="banner-user-title"
          animation={{ y: 30, opacity: 0, type: "from" }}
        >
          Complete IoT Solution
        </TweenOne>
        <TweenOne
          className="banner-user-subtitle"
          animation={{ y: 30, opacity: 0, type: "from" }}
        >
          We have all solution to your company's IoT needs, <br /> and all of
          them are official, registered and in compliance <br /> with Government
          regulations
        </TweenOne>
        <TweenOne
          className="banner-user-text"
          animation={{ y: 30, opacity: 0, type: "from", delay: 100 }}
        >
          <Button
            type="primary"
            className="button-large-weiots"
            size="large"
            onClick={() => window.location.replace("/solution")}
          >
            Find Out How <IconFont type="icon-ArrowUpRight-1" />
          </Button>
        </TweenOne>
      </Element>
      <Element prefixCls="banner-user-elem" key="1">
        <QueueAnim>
          <img
            key="1"
            className="overlay-carousel"
            src={CarouselOverlay}
            style={{
              position: "fixed",
              zIndex: "2",
              height: "100%",
              transform: "rotate(270deg)",
              left: "-6%",
            }}
          />
          <div
            key="2"
            style={{
              width: "100%",
              height: "100%",
              position: "fixed",
              zIndex: "2",
              background:
                "linear-gradient(3deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 100%)",
            }}
          ></div>
        </QueueAnim>
        <BgElement
          key="bg"
          className="bg"
          style={{
            // backgroundImage:
            //   "url(https://images.unsplash.com/photo-1516799678038-5f2329f906b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80)",
            backgroundImage: `url(${Carousel3})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <TweenOne
          className="banner-user-title"
          animation={{ y: 30, opacity: 0, type: "from" }}
        >
          Industry 4.0 Focus
        </TweenOne>
        <TweenOne
          className="banner-user-subtitle"
          animation={{ y: 30, opacity: 0, type: "from" }}
        >
          We focus on helping your company enter the advanced phase <br /> of
          industrialization, because we believe <br /> that even though industry
          4.0 is a necessity.
        </TweenOne>
        <TweenOne
          className="banner-user-text"
          animation={{ y: 30, opacity: 0, type: "from", delay: 100 }}
        >
          <Button
            type="primary"
            className="button-large-weiots"
            size="large"
            onClick={() => window.location.replace("/solution")}
          >
            Find Out How <IconFont type="icon-ArrowUpRight-1" />
          </Button>
        </TweenOne>
      </Element>
      <Element prefixCls="banner-user-elem" key="2">
        <QueueAnim>
          <img
            key="1"
            src={CarouselOverlay}
            className="overlay-carousel"
            style={{
              position: "fixed",
              zIndex: "2",
              height: "100%",
              transform: "rotate(270deg)",
              left: "-6%",
            }}
          />
          <div
            key="2"
            style={{
              width: "100%",
              height: "100%",
              position: "fixed",
              zIndex: "2",
              background:
                "linear-gradient(3deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 100%)",
            }}
          ></div>
        </QueueAnim>
        <BgElement
          key="bg"
          className="bg"
          style={{
            // backgroundImage:
            //   "url(https://images.unsplash.com/photo-1601923112035-3e4819c82317?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)",
            backgroundImage: `url(${Carousel4})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <TweenOne
          className="banner-user-title"
          animation={{ y: 30, opacity: 0, type: "from" }}
        >
          Already Proven
        </TweenOne>
        <TweenOne
          className="banner-user-subtitle"
          animation={{ y: 30, opacity: 0, type: "from" }}
        >
          Our services have been used by many companies in Indonesia, <br /> and
          all expressed satisfaction with the services we have provided
        </TweenOne>
        <TweenOne
          className="banner-user-text"
          animation={{ y: 30, opacity: 0, type: "from", delay: 100 }}
        >
          <Button
            type="primary"
            className="button-large-weiots"
            size="large"
            onClick={() => window.location.replace("/solution")}
          >
            Find Out How <IconFont type="icon-ArrowUpRight-1" />
          </Button>
        </TweenOne>
      </Element>
    </BannerAnim>
  );
};

export default Carousel;
