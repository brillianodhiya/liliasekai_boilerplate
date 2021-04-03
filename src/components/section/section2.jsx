import { Col, Row } from "antd";
import React from "react";
import ScrollType from "../scrolltypefitur/scrollfiturtype";

import KwhMeter from "../../assets/kwhmeter.png";
import WaterMeter from "../../assets/watermeter.png";
import GasMeter from "../../assets/gasmeter.png";
import LoraBridge from "../../assets/LoraBridge.png";
import Cyble from "../../assets/cyblenonmag.png";

import PressureSensor from "../../assets/pressuresensor.jpg";
import LoraWan from "../../assets/lorawan.png";
import IndustrialTracker from "../../assets/industrialtracker.png";
import PredictiveMaintenance from "../../assets/predictivemaintenance.jpg";

import NemaStreetLight from "../../assets/nema-street-ligt.png";
import InternalSingleLight from "../../assets/internal-single-light.png";
import DualLightController from "../../assets/dual-light-controller.png";
import StreetLightGateway from "../../assets/kerlink.png";

import CoSensor from "../../assets/cosensor.jpg";
import PhSensor from "../../assets/phsensor.jpg";
import WaterLevelSensor from "../../assets/waterlevelsensor.jpg";
import WeatherSensor from "../../assets/weathersensor.png";
import WasteSensor from "../../assets/wastesensor.jpg";

import Sectionimg1 from "../../assets/4eefff2fcdc1f8093296a87620e59783.jpeg";
import Sectionimg2 from "../../assets/436865aff13e7c1a3259fbf0360945b1.jpeg";
import Sectionimg3 from "../../assets/b577e852a9a72828e2e85353ff6a3298.jpeg";
import Sectionimg4 from "../../assets/79eaac1b2c714bacb0128648c146b38e.jpeg";

const EnergyMonitoringProduct = [
  {
    img: KwhMeter,
    desc: "KwH Meter (1 phase, 3 phase , 3 phase CT)",
    key: "Energy-Monitoring-Solutions",
    keyProduct: "KwH-Meter",
  },
  {
    img: WaterMeter,
    desc: "Water Meter (Dn.15 – Dn.25)",
    key: "Energy-Monitoring-Solutions",
    keyProduct: "Water-Meter",
  },
  {
    img: GasMeter,
    desc: "Gas Meter (G2.5 – G16)",
    key: "Energy-Monitoring-Solutions",
    keyProduct: "Gas-Meter",
  },
  {
    img: LoraBridge,
    desc: "RS 485 Lora Bridge (RTU)",
    key: "Energy-Monitoring-Solutions",
    keyProduct: "RS-485-Lora-Bridge",
  },

  {
    img: Cyble,
    desc: "Cyble Nonmag Sensor",
    key: "Energy-Monitoring-Solutions",
    keyProduct: "Cyble-Nonmag-Sensor",
  },
];

const SmartIndustry = [
  {
    img: PressureSensor,
    desc: "Pressure Sensor",
    key: "Smart-Industry-4.0-Solutions",
    keyProduct: "Pressure-Sensor",
  },
  {
    img: LoraWan,
    desc: "4-20 mA to LoraWAN",
    key: "Smart-Industry-4.0-Solutions",
    keyProduct: "4-20-mA-to-LoraWan",
  },
  {
    img: IndustrialTracker,
    desc: "Industrial Tracker",
    key: "Smart-Industry-4.0-Solutions",
    keyProduct: "Industrial-Tracker",
  },
  {
    img: LoraBridge,
    desc: "RS 485 Lora Bridge (RTU)",
    key: "Smart-Industry-4.0-Solutions",
    keyProduct: "RS-485-Lora-Bridge",
  },
  {
    img: PredictiveMaintenance,
    desc: "Predictive maintenance Sensor",
    key: "Smart-Industry-4.0-Solutions",
    keyProduct: "Predictive-maintenance-Sensor",
  },
];

const SmartStreetLightSolution = [
  {
    img: NemaStreetLight,
    desc: "NEMA Stret Light Controller",
    key: "Smart-Street-Light-Solutions",
    keyProduct: "NEMA-Street-Light-Controller",
  },
  {
    img: InternalSingleLight,
    desc: "Internal Single Light Controller",
    key: "Smart-Street-Light-Solutions",
    keyProduct: "Internal-Single-Light-Controller",
  },
  {
    img: DualLightController,
    desc: "Dual Light Controller",
    key: "Smart-Street-Light-Solutions",
    keyProduct: "Dual-Light-Controller",
  },
  {
    img: StreetLightGateway,
    desc: "Gateway Kerlink iStation",
    key: "Smart-Street-Light-Solutions",
    keyProduct: "Gateway-Kerlink-iStation",
  },
];

const SmartEnvironment = [
  {
    img: CoSensor,
    desc: "Co Sensor",
    key: "Smart-Environment",
    keyProduct: "Co-Sensor",
  },
  {
    img: PhSensor,
    desc: "PH Sensor",
    key: "Smart-Environment",
    keyProduct: "PH-Sensor",
  },
  {
    img: WaterLevelSensor,
    desc: "Water Level Sensor",
    key: "Smart-Environment",
    keyProduct: "Water-Level-Sensor",
  },
  {
    img: WeatherSensor,
    desc: "Weather Sensor",
    key: "Smart-Environment",
    keyProduct: "Weather-Sensor",
  },
  {
    img: WasteSensor,
    desc: "Waste Sensor",
    key: "Smart-Environment",
    keyProduct: "Waste-Sensor",
  },
];

const Section2 = () => {
  const [left1H, setLeft1H] = React.useState(0);
  const [left2H, setLeft2H] = React.useState(0);
  const [left3H, setLeft3H] = React.useState(0);
  const [left4H, setLeft4H] = React.useState(0);

  const size = useWindowSize();

  const refright1 = React.useRef(null);
  const refright2 = React.useRef(null);
  const refright3 = React.useRef(null);
  const refright4 = React.useRef(null);

  React.useEffect(() => {
    setLeft1H(refright1.current.clientHeight);
    setLeft2H(refright2.current.clientHeight);
    setLeft3H(refright3.current.clientHeight);
    setLeft4H(refright4.current.clientHeight);
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
  return (
    <Row style={{ marginTop: "24px" }}>
      <Col
        xl={12}
        lg={12}
        md={12}
        sm={24}
        xs={24}
        style={{
          overflow: "hidden",
          height: left1H,
          backgroundImage: `url(${Sectionimg1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Col>
      <Col
        xl={12}
        lg={12}
        md={12}
        sm={24}
        xs={24}
        id="refright1"
        ref={refright1}
      >
        <div className="section1-right" style={{ padding: "8%" }}>
          <a
            href="/solution/details/Energy-Monitoring-Solutions"
            className="solution-link"
          >
            <h1>Energy Monitoring Solutions</h1>
          </a>
          <div className="div-desc">
            <p>
              <b>Energy monitoring</b> aims to provide users with information
              about their consumption patterns and is carried out using{" "}
              <b>Energy Monitoring</b> software that gathers consumption data,
              analyses it and then provides useful information directly to the
              client's device.
            </p>
          </div>
          <ScrollType data={EnergyMonitoringProduct} />
        </div>
      </Col>
      <Col
        xl={0}
        lg={0}
        md={0}
        sm={24}
        xs={24}
        style={{
          overflow: "hidden",
          height: left2H,
          backgroundImage: `url(${Sectionimg2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Col>
      <Col
        xl={12}
        lg={12}
        md={12}
        sm={24}
        xs={24}
        id="refright1"
        ref={refright2}
      >
        <div className="section1-right" style={{ padding: "8%" }}>
          <a
            href="/solution/details/Smart-Industry-4.0-Solutions"
            className="solution-link"
          >
            <h1>Smart Industry 4.0 Solutions</h1>
          </a>
          <div className="div-desc">
            <p>
              Trend of automation and data exchange in manufacturing
              technologies, including cyber-physical systems, predictive
              maintenance the Internet of things, cloud computing and cognitive
              computing and creating the smart factory
            </p>
          </div>
          <ScrollType data={SmartIndustry} />
        </div>
      </Col>
      <Col
        xl={12}
        lg={12}
        md={12}
        sm={0}
        xs={0}
        style={{
          overflow: "hidden",
          height: left2H,
          backgroundImage: `url(${Sectionimg2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Col>
      <Col
        xl={12}
        lg={12}
        md={12}
        sm={24}
        xs={24}
        style={{
          overflow: "hidden",
          height: left3H,
          backgroundImage: `url(${Sectionimg3})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Col>
      <Col
        xl={12}
        lg={12}
        md={12}
        sm={24}
        xs={24}
        id="refright1"
        ref={refright3}
      >
        <div className="section1-right" style={{ padding: "8%" }}>
          <a
            href="/solution/details/Smart-Street-Light-Solutions"
            className="solution-link"
          >
            <h1>Smart Street Light Solutions</h1>
          </a>
          <div className="div-desc">
            <p>
              Street lighting fixtures can operate autonomously using smart
              scheduling algorithms, while allowing for overrides for specific
              events or requirements. LoRaWAN-compatible controllers allow for
              dimming for any LED streetlight, reducing energy consumption and
              increasing lamp lifetime.
            </p>
          </div>
          <ScrollType data={SmartStreetLightSolution} />
        </div>
      </Col>
      <Col
        xl={0}
        lg={0}
        md={0}
        sm={24}
        xs={24}
        style={{
          overflow: "hidden",
          height: left4H,
          backgroundImage: `url(${Sectionimg4})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Col>
      <Col
        xl={12}
        lg={12}
        md={12}
        sm={24}
        xs={24}
        id="refright1"
        ref={refright4}
      >
        <div className="section1-right" style={{ padding: "8%" }}>
          <a
            href="/solution/details/Smart-Environment"
            className="solution-link"
          >
            <h1>Smart Environment</h1>
          </a>
          <div className="div-desc">
            <p>
              A smart environment is a sensor and actuator instrumented room or
              space. Embedded networked computer systems make the room perceive
              physical state and activties within. In a smart environment user
              routines and information processes may seamlessly interact with
              each other.
            </p>
          </div>
          <ScrollType data={SmartEnvironment} />
        </div>
      </Col>
      <Col
        xl={12}
        lg={12}
        md={12}
        sm={0}
        xs={0}
        style={{
          overflow: "hidden",
          height: left4H - 44,
          backgroundImage: `url(${Sectionimg4})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Col>
    </Row>
  );
};

export default Section2;
