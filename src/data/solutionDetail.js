import React from "react";

import KwhMeter from "../assets/kwhmeter.png";
import WaterMeter from "../assets/watermeter.png";
import GasMeter from "../assets/gasmeter.png";
import LoraBridge from "../assets/LoraBridge.png";
import Cyble from "../assets/cyblenonmag.png";

import PressureSensor from "../assets/pressuresensor.jpg";
import LoraWan from "../assets/lorawan.png";
import IndustrialTracker from "../assets/industrialtracker.png";
import PredictiveMaintenance from "../assets/predictivemaintenance.jpg";

import NemaStreetLight from "../assets/nema-street-ligt.png";
import InternalSingleLight from "../assets/internal-single-light.png";
import DualLightController from "../assets/dual-light-controller.png";
import StreetLightGateway from "../assets/kerlink.png";

import CoSensor from "../assets/co2sensor.jpg";
import PhSensor from "../assets/phsensor2.jpg";
import WaterLevelSensor from "../assets/waterlevelsensor.png";
import WeatherSensor from "../assets/weathersensor.png";
import WasteSensor from "../assets/wastesensor2.jpg";

import Asystom from "../assets/asystom.png";
import R718MA from "../assets/R718MA.jpg";

import TsVaccine1 from "../assets/ts_vaccine1.jpeg";
import TsVaccine2 from "../assets/ts_vaccine2.jpeg";
import TsVaccine3 from "../assets/ts_vaccine3.jpeg";

// import Co2Sensor from "../assets/co2sensor.jpg";

import IfemtoCell from "../assets/ifemtocell.PNG";

const SolutionsData = [
  {
    key: "Energy-Monitoring-Solutions",
    title: "Energy Monitoring Solutions",
    desc:
      "Energy monitoring aims to provide users with information about their consumption patterns and is carried out using Energy Monitoring software that gathers consumption data, analyses it and then provides useful information directly to the client's device.",
    img:
      "https://s3-alpha-sig.figma.com/img/a2f7/a08a/4eefff2fcdc1f8093296a87620e59783?Expires=1614556800&Signature=UEXLRTbDlQLbfyhlFy~IZ64g0YgAyskM-KUfOmhGlyMoJIQsuz9m0pSLOJmmmdOaqkx02y0Zv-DOM4uqos0cCNHnBirbj47FcruKNIxwekqDmtRIvZ9~k3lnPk0P4-wyU~rOjSofX3XiO~U2wX-yE5JDBkUr0K7NE2quLXJQ8bQJ~BD8WhTFkYuLkFE4qOXB11ZMyFognJW-ko8eomJALTj1oESTAwe9kbtXxhmWg-2PL1WuzGhQOCY1Y~M8QojRkXnNnSRVJBkA3oZViElGLpo9qswkV9Ka9c1MdvRRxr~bxeoJuojMCIQkmxS1mNG1edAYLvQmSHt3dPs0wcfVww__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    product: [
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
    ],
  },
  {
    key: "Smart-Industry-4.0-Solutions",
    title: "Smart Industry 4.0 Solutions",
    desc:
      "Trend of automation and data exchange in manufacturing technologies, including cyber-physical systems, predictive maintenance the Internet of things, cloud computing and cognitive computing and creating the smart factory",
    img:
      "https://s3-alpha-sig.figma.com/img/bbda/ecaa/436865aff13e7c1a3259fbf0360945b1?Expires=1614556800&Signature=Ozii6jBLAcmptDFneGwPEv0VkObaXPP5-iCrOQMO7wAPnMEfmDx4Av3JpArd-omHFuFwL-9uZJIYmjH343hxtpaUYSpfrZGsFf-LwdU0sT57T97gdpxHJFgAAfXvsj8QglizBR7o-5SqUjl6BVZWUtYXyE4C7bl61vkGyBj9lBlcBupfRaiY-gNy0gPXWDDlN~1lZpjL07uN9HdORaVMCURcz3GcPsSgjGb-0b0jFEACvGG-RL0LIih3qd2JoBoXMjYBaDa3OmfWSP8qD8z7vUiXIfJoaSlJrmS1N0JKL3Uxow8zIoP6dXtHg8FHyJvLZNB3-~2aJDoUJPIqujZqEw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    product: [
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
    ],
  },
  {
    key: "Smart-Street-Light-Solutions",
    title: "Smart Street Light Solutions",
    desc:
      "Street lighting fixtures can operate autonomously using smart scheduling algorithms, while allowing for overrides for specific events or requirements. LoRaWAN-compatible controllers allow for dimming for any LED streetlight, reducing energy consumption and increasing lamp lifetime. ",
    img:
      "https://s3-alpha-sig.figma.com/img/7143/f501/b577e852a9a72828e2e85353ff6a3298?Expires=1614556800&Signature=MQgdQ33QTbRjBHqN1QLWW95DBCtCtHEcOa-7Bp2N8AlTqZOb77jh6oNZhP6GynLSWRoAEAebTA7PBB8T3HVicPh1rjm9MFK~2PGo-GMfPmhiyTJRpG1rzxPh3sQT19hraHw8zOpBXHKCrtA7sjCXI2ISJft~r8kxZBAwNpGHbGuZMk1Zc3YLQE1fnj~xkFGQ2NhnoUKQgTgnTqraGR0H0ovV~JAmg3AIz4C-XFuyrXNUtnKTOoU0Fy9z254tSgkVtvrGTHyEHEgh6bww5NZfYyvjy-cjzTo0Lgh~JAVQDrDpVyTMi3Z6LqceIKlfI5bGbahoRQkw6iPkxGtyhMWpLA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    product: [
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
    ],
  },
  {
    key: "Smart-Environment",
    title: "Smart Environment",
    desc:
      "A smart environment is a sensor and actuator instrumented room or space. Embedded networked computer systems make the room perceive physical state and activties within. In a smart environment user routines and information processes may seamlessly interact with each other",
    img:
      "https://s3-alpha-sig.figma.com/img/16a1/1d12/79eaac1b2c714bacb0128648c146b38e?Expires=1614556800&Signature=AXa8Ouzk1byx04nMopvCozOhKMuN4sR8F5zLynIoMjY1gfp8fZZxNcrHEmHvYz-3IklU1u7S22lG6~XJWSfc4OgQQmjsRTj0RAULhi~TiG3OFQUx3m2XnjII9Gt1-4Yft8uqXlH7bD1DcdsijkRS-elowQS0dVEyxifxIcqkwoz5aHNBh31WH4Ry5FUUoKt0RnBqqzMT-dy3KQ7wDV0ImvzZJixi8i4M66tk2hYYqdD20SWqbWXRcosiKLQ3eWE~~j7SFGmgm-0RlSf6-6yTFG0~FOh1apS84ZwYYIB6mccS6P4Fz0HFmW0ZlfuFOycJXbpFVDL5apSIgkBUu93Psg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    product: [
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
    ],
  },
];

const Products = [
  {
    img: [KwhMeter],
    desc: "KwH Meter (1 phase, 3 phase , 3 phase CT)",
    key: "Energy-Monitoring-Solutions",
    keyProduct: "KwH-Meter",
    desc_img:
      "https://s3-alpha-sig.figma.com/img/89d8/7065/ffa6c8439e62d259359306b102d2b9d6?Expires=1614556800&Signature=F9otzjeyctk2fjx54kTIppzM0UHdXJy1J55aimn4c7cfbmVGZDxpRICQcJN4~NEWpOzrRbWRW-Rn0FDt-4P2U6kn6uhuA2~0PFQMD9GTChmEXmSopSpm0thR1yrqasJzvhHkoA6JHyh36t6hYK--vYKojmAf31yw3MnJdkEMzV4NBefgH7ozrJmiOhUZ~SUYWcyEFavmezpqiTBSRSXMdDfTdvV0eGAnkZ-SruozK7blj2SNpF7D-FbetcyUckPJsgt8kFIOl4-MFOVEDYyBCkfW7j9Hd2JVmpaf8bPbjTaOBASv4WIgAJiF86nv7lWG8s8~JaX1OWn0d8I3MlClgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",

    desc_product:
      "CL710K22®LoRaWAN Single phase smart energy meter is the latest developed products in Venus meter series. Certificated with MID and DLMS/COSEM, it provides an excellent and stable accuracy and performance. With built-in LoRaW AN communication module, all the operations can be done remotely from the central server, including meter billing, conguration, credit purchase, alarm events report etc",
    spec: [
      {
        title: "Connection Wiring",
        value: "3P4W L1L1-L2L2-L3L3-NN",
      },
      {
        title: "Nominal voltage",
        value: "3*230V/400V",
      },
      {
        title: "Operating voltage range",
        value: "70% ~ 130% Un",
      },
      {
        title: "Basic current",
        value: "5A",
      },
      {
        title: "Maximum current",
        value: "0.25 - 5(100)A",
      },
      {
        title: "Starting current",
        value: "0.4‰Ib / 20mA",
      },
      {
        title: "Frequency",
        value: "50 Hz ± 5%",
      },
      {
        title: "Accuracy kWh/kVarh",
        value: "Class 1 / Class 2(IEC), Class B(MID)",
      },
      {
        title: "Pulse constant",
        value: "1000 imp/kWh, 1000 imp/kVarh",
      },
      {
        title: "Power consumption voltage circuit",
        value: "<=0.75W; <=1.2VA(for each phase",
      },
      {
        title: "Power consumption current circuit",
        value: "<=0.1VA(for each phase)",
      },
      {
        title: "Max power consumption in voltage circuit with PLC module",
        value: "5W",
      },
    ],
    is_smart_meter: true,
  },
  {
    img: [WaterMeter],
    desc: "Water Meter (Dn.15 – Dn.25)",
    key: "Energy-Monitoring-Solutions",
    keyProduct: "Water-Meter",
    desc_img:
      "https://s3-alpha-sig.figma.com/img/89d8/7065/ffa6c8439e62d259359306b102d2b9d6?Expires=1614556800&Signature=F9otzjeyctk2fjx54kTIppzM0UHdXJy1J55aimn4c7cfbmVGZDxpRICQcJN4~NEWpOzrRbWRW-Rn0FDt-4P2U6kn6uhuA2~0PFQMD9GTChmEXmSopSpm0thR1yrqasJzvhHkoA6JHyh36t6hYK--vYKojmAf31yw3MnJdkEMzV4NBefgH7ozrJmiOhUZ~SUYWcyEFavmezpqiTBSRSXMdDfTdvV0eGAnkZ-SruozK7blj2SNpF7D-FbetcyUckPJsgt8kFIOl4-MFOVEDYyBCkfW7j9Hd2JVmpaf8bPbjTaOBASv4WIgAJiF86nv7lWG8s8~JaX1OWn0d8I3MlClgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    desc_product:
      "The Mercury®LoRa series LXSGF model is IMPELLER (turbine) water meter with build-in valve, dry type register for residential application with sizes from Dn15 to Dn25. LXSGF model consist of mechanical water meter, electric ball valve, intelligent unit (IU), with LoRaWAN wireless technique and bult-in lithium battery",
    spec: [
      {
        title: "Working voltage",
        value: "3.6V",
      },
      {
        title: "Data collecting way",
        value: "Dual Magnetic Sensor",
      },
      {
        title: "Communication mode",
        value: "LoRaWAN",
      },
      {
        title: "Working frequency",
        value:
          "916 --- 919MHz (25mW EIRP with duty cycle of <= 1% frequency hopping or LBT)",
      },
      {
        title: "",
        value: "919 --- 923MHz (500mV EIRP)",
      },
      {
        title: "Channels",
        value: "8 settable channels with bandwidth of 125kHz",
      },
      {
        title: "TX power",
        value: "14dBm",
      },
      {
        title: "RX sensitivities",
        value: "Down to - 137dBm",
      },
      {
        title: "Communication distance",
        value: "3km to 10km (eyesight distance in open space)",
      },
      {
        title: "Data rate",
        value: "980bps ~ 3.125kbps (adaptive data rate)",
      },
      {
        title: "Listen Before Talk (LBT)",
        value: "Yes",
      },
      {
        title: "Standby current",
        value: "<= 40uA",
      },
      {
        title: "Environment temperature",
        value: "0.1 ~ 50°C",
      },
      {
        title: "Number of Data cached when network interrupted",
        value: "10",
      },
    ],
    is_smart_meter: true,
  },
  {
    img: [GasMeter],
    desc: "Gas Meter (G2.5 – G16)",
    key: "Energy-Monitoring-Solutions",
    keyProduct: "Gas-Meter",
    desc_img:
      "https://s3-alpha-sig.figma.com/img/89d8/7065/ffa6c8439e62d259359306b102d2b9d6?Expires=1614556800&Signature=F9otzjeyctk2fjx54kTIppzM0UHdXJy1J55aimn4c7cfbmVGZDxpRICQcJN4~NEWpOzrRbWRW-Rn0FDt-4P2U6kn6uhuA2~0PFQMD9GTChmEXmSopSpm0thR1yrqasJzvhHkoA6JHyh36t6hYK--vYKojmAf31yw3MnJdkEMzV4NBefgH7ozrJmiOhUZ~SUYWcyEFavmezpqiTBSRSXMdDfTdvV0eGAnkZ-SruozK7blj2SNpF7D-FbetcyUckPJsgt8kFIOl4-MFOVEDYyBCkfW7j9Hd2JVmpaf8bPbjTaOBASv4WIgAJiF86nv7lWG8s8~JaX1OWn0d8I3MlClgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    desc_product:
      "Two-pipe Diaphragm gas meter G1.6, G2.5, G4 Cooperated with ZENNER International GmbH & Co. K, Atmos®LoRa Series are credit gas meters employing the Sindcon's advanced technology in IOT to build a reliable wireless communication system for gasmeter.",
    spec: [
      {
        title: "Type",
        value: "G1.6 / G2.6 / G4",
      },
      {
        title: "Norminal flowrate (Qn)",
        value: "1.6 / 2.5 / 4 (m³/h)",
      },
      {
        title: "Maximum flowrate (Qmax)",
        value: "2.5 / 4 / 6 (m³/h)",
      },
      {
        title: "Minimum flowrate (Qmin)",
        value: "0.016 / 0.0025 / 0.04 (m³/h)",
      },
      {
        title: "Maximum operating pressure",
        value: "0.5 Bar",
      },
      {
        title: "Maximum permissible errors",
        value: "±1.5%",
      },
      {
        title: "",
        value: "0.1Qmax≤Q≤Qmax  ±3% / ±3% / ±3%",
      },
      {
        title: "",
        value: "Qmin≤Q≤0.1Qmin  ≤2 / ≤2 / ≤2 (mbar)",
      },
      {
        title: "Max pressure loss",
        value: "99999.998 m³/h",
      },
      {
        title: "Display field max",
        value: "0.0002 m³/h",
      },
      {
        title: "Display field min",
        value: "1.2 dm³",
      },
      {
        title: "Cyclic Volume",
        value: "1.5 class",
      },
      {
        title: "Working voltage",
        value: "4.5/6 V",
      },
      {
        title: "Communication Protocol",
        value: "Standard LoRaWAN Class A",
      },
      {
        title: "Frequency",
        value: "Can support 470MHz, 916MHz, 923MHz",
      },
      {
        title: "TX Power",
        value: "+20dBm",
      },
      {
        title: "RX sensitivity",
        value: "Down to-137dBm",
      },
      {
        title: "Bandwith",
        value: "125KHz",
      },
      {
        title: "Local LCD Display",
        value: "Yes",
      },
    ],
    is_smart_meter: true,
  },
  {
    img: [LoraBridge],
    desc: "RS 485 Lora Bridge (RTU)",
    key: "Energy-Monitoring-Solutions",
    keyProduct: "RS-485-Lora-Bridge",
    desc_img:
      "https://s3-alpha-sig.figma.com/img/89d8/7065/ffa6c8439e62d259359306b102d2b9d6?Expires=1614556800&Signature=F9otzjeyctk2fjx54kTIppzM0UHdXJy1J55aimn4c7cfbmVGZDxpRICQcJN4~NEWpOzrRbWRW-Rn0FDt-4P2U6kn6uhuA2~0PFQMD9GTChmEXmSopSpm0thR1yrqasJzvhHkoA6JHyh36t6hYK--vYKojmAf31yw3MnJdkEMzV4NBefgH7ozrJmiOhUZ~SUYWcyEFavmezpqiTBSRSXMdDfTdvV0eGAnkZ-SruozK7blj2SNpF7D-FbetcyUckPJsgt8kFIOl4-MFOVEDYyBCkfW7j9Hd2JVmpaf8bPbjTaOBASv4WIgAJiF86nv7lWG8s8~JaX1OWn0d8I3MlClgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    desc_product:
      "RS485-LoRa bridge is a data channel between traditional devices with RS485 output (Modbus Protocol) and LoRa gateway.",
    spec: [
      {
        title: "Power Supply",
        value: "8-30V DC",
      },
      {
        title: "Application",
        value: "Indoor",
      },
      {
        title: "Standby Current",
        value: "20mA",
      },
      {
        title: "MCU",
        value: "Arm® 32-bit Cortex®-M0",
      },
      {
        title: "Frequency",
        value: "470-510MHz, 863-870MHz, 902-926MHz",
      },
      {
        title: "TX Power",
        value: "Up to +20dbm",
      },
      {
        title: "RX Sensitivity",
        value: "Down to -137dBm",
      },
      {
        title: "Channels",
        value: "8 settable channels",
      },
      {
        title: "Data rate",
        value: "Adaptive data rate",
      },
      {
        title: "Listen Before Talk(LBT)",
        value: "",
      },
      {
        title: "LoRa Class",
        value: "Both Class A & Class C",
      },
      {
        title: "",
        value: "Power supply isolated & RS485 interface isolated",
      },
      {
        title: "",
        value: "Compatible with IEC 61000-4-2 (ESD): Air 15kV, Contact 8kV",
      },
    ],
  },
  {
    img: [Cyble],
    desc: "Cyble Nonmag Sensor",
    key: "Energy-Monitoring-Solutions",
    keyProduct: "Cyble-Nonmag-Sensor",
    desc_img:
      "https://s3-alpha-sig.figma.com/img/89d8/7065/ffa6c8439e62d259359306b102d2b9d6?Expires=1614556800&Signature=F9otzjeyctk2fjx54kTIppzM0UHdXJy1J55aimn4c7cfbmVGZDxpRICQcJN4~NEWpOzrRbWRW-Rn0FDt-4P2U6kn6uhuA2~0PFQMD9GTChmEXmSopSpm0thR1yrqasJzvhHkoA6JHyh36t6hYK--vYKojmAf31yw3MnJdkEMzV4NBefgH7ozrJmiOhUZ~SUYWcyEFavmezpqiTBSRSXMdDfTdvV0eGAnkZ-SruozK7blj2SNpF7D-FbetcyUckPJsgt8kFIOl4-MFOVEDYyBCkfW7j9Hd2JVmpaf8bPbjTaOBASv4WIgAJiF86nv7lWG8s8~JaX1OWn0d8I3MlClgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    desc_product:
      "NonMag-Sensor is completely compatible with all Itron water meter and gas meter pre-equipped with the Cyble target. Easily retrofitted and installed on meters already on the field.",
    spec: [
      {
        title: "Working Voltage",
        value: "3.6V",
      },
      {
        title: "Data Collecting Way",
        value: "Non-magnetic Transmission",
      },
      {
        title: "Communication mode",
        value: "LoRaWAN",
      },
      {
        title: "Working frequency",
        value: "920MHz - 925MHz",
      },
      {
        title: "Channels",
        value: "8 settable channels with bandwith of 125kHz",
      },
      {
        title: "TX power",
        value: "14dBm",
      },
      {
        title: "RX sensitivities",
        value: "Down to -137dBm",
      },
      {
        title: "Communication distance",
        value: "3km to 10km (eyesight distance in open space)",
      },
      {
        title: "Data rate",
        value: "980bps~3.125Kbps (adaptive data rate)",
      },
      {
        title: "Listen Before Talk (LBT)",
        value: "Yes",
      },
      {
        title: "Standby current",
        value: "<= 40uA",
      },
      {
        title: "Environment temperature",
        value: " -10°C - 50°C;",
      },
      {
        title: "Number of Data cached when network interrupted",
        value: "10",
      },
      {
        title: "Data Report Interval",
        value: "15min | 30min | 1hour | 6 hour | 8 hour | 24 hour",
      },
      {
        title: "Battery life (year)",
        value: "5 | 6 | 7 | 8 | 8 | 8",
      },
    ],
  },
  {
    img: [PressureSensor],
    desc: "Pressure Sensor",
    key: "Smart-Industry-4.0-Solutions",
    keyProduct: "Pressure-Sensor",
    desc_img:
      "https://s3-alpha-sig.figma.com/img/89d8/7065/ffa6c8439e62d259359306b102d2b9d6?Expires=1614556800&Signature=F9otzjeyctk2fjx54kTIppzM0UHdXJy1J55aimn4c7cfbmVGZDxpRICQcJN4~NEWpOzrRbWRW-Rn0FDt-4P2U6kn6uhuA2~0PFQMD9GTChmEXmSopSpm0thR1yrqasJzvhHkoA6JHyh36t6hYK--vYKojmAf31yw3MnJdkEMzV4NBefgH7ozrJmiOhUZ~SUYWcyEFavmezpqiTBSRSXMdDfTdvV0eGAnkZ-SruozK7blj2SNpF7D-FbetcyUckPJsgt8kFIOl4-MFOVEDYyBCkfW7j9Hd2JVmpaf8bPbjTaOBASv4WIgAJiF86nv7lWG8s8~JaX1OWn0d8I3MlClgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    desc_product: "",
    spec: [
      {
        title: "Pressure Range",
        value: "0 - 3000 psi (206 bar)",
      },
      {
        title: "Thread",
        value: `1/2" NPT or 1/4" NPT`,
      },
      {
        title: "Accuracy",
        value: "0.5% full scale",
      },
      {
        title: "Stability",
        value: "≤0.2% full scale/year",
      },
      {
        title: "Sealing rating",
        value: "IP65",
      },
      {
        title: "Working temperature range",
        value: "-20°C → +100°C",
      },
      {
        title: "Output signal",
        value: "analog 0.5v - 4.5v @ 5v input",
      },
    ],
  },
  {
    img: [LoraWan],
    desc: "4-20 mA to LoraWAN",
    key: "Smart-Industry-4.0-Solutions",
    keyProduct: "4-20-mA-to-LoraWan",
    desc_img:
      "https://s3-alpha-sig.figma.com/img/89d8/7065/ffa6c8439e62d259359306b102d2b9d6?Expires=1614556800&Signature=F9otzjeyctk2fjx54kTIppzM0UHdXJy1J55aimn4c7cfbmVGZDxpRICQcJN4~NEWpOzrRbWRW-Rn0FDt-4P2U6kn6uhuA2~0PFQMD9GTChmEXmSopSpm0thR1yrqasJzvhHkoA6JHyh36t6hYK--vYKojmAf31yw3MnJdkEMzV4NBefgH7ozrJmiOhUZ~SUYWcyEFavmezpqiTBSRSXMdDfTdvV0eGAnkZ-SruozK7blj2SNpF7D-FbetcyUckPJsgt8kFIOl4-MFOVEDYyBCkfW7j9Hd2JVmpaf8bPbjTaOBASv4WIgAJiF86nv7lWG8s8~JaX1OWn0d8I3MlClgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    desc_product: "",
    spec: [],
  },
  {
    img: [IndustrialTracker],
    desc: "Industrial Tracker",
    key: "Smart-Industry-4.0-Solutions",
    keyProduct: "Industrial-Tracker",
    desc_img:
      "https://s3-alpha-sig.figma.com/img/89d8/7065/ffa6c8439e62d259359306b102d2b9d6?Expires=1614556800&Signature=F9otzjeyctk2fjx54kTIppzM0UHdXJy1J55aimn4c7cfbmVGZDxpRICQcJN4~NEWpOzrRbWRW-Rn0FDt-4P2U6kn6uhuA2~0PFQMD9GTChmEXmSopSpm0thR1yrqasJzvhHkoA6JHyh36t6hYK--vYKojmAf31yw3MnJdkEMzV4NBefgH7ozrJmiOhUZ~SUYWcyEFavmezpqiTBSRSXMdDfTdvV0eGAnkZ-SruozK7blj2SNpF7D-FbetcyUckPJsgt8kFIOl4-MFOVEDYyBCkfW7j9Hd2JVmpaf8bPbjTaOBASv4WIgAJiF86nv7lWG8s8~JaX1OWn0d8I3MlClgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    desc_product:
      "The Industrial Tracker is a general-purpose tracker, designed for GPS tracking on various applications: bicycles, cars or pets. It is equipped with GPS and 3-axis accelerometer, that provides a much more cost-effective way for service providers to deploy this for tracking applications than to use the GPRS network.",
    spec: [
      {
        title: "Model Name",
        value: "TNIT100",
      },
      {
        title: "Frequency",
        value:
          "Either 863–870MHz for EU models and 902–928MHz for North America",
      },
      {
        title: "RF TX power",
        value: "+19dBm conducted",
      },
      {
        title: "Antenna Gain",
        value: "0dBi Peak, -3dBi Avg",
      },
      {
        title: "RF Sensitivity",
        value: "-138dBm conducted",
      },
      {
        title: "Battery Type",
        value: "3.6V 1⁄2 AA Li-SOCl2 1200mAh battery (*2) (ER14250)",
      },
      {
        title: "Voltage",
        value: "3.1~3.6 V",
      },
      {
        title: "Average Current",
        value: "170mA maximum/5uA minimum",
      },
      {
        title: "Operation Temperature",
        value: "-20°C to +70°C",
      },
      {
        title: "Environmental Rating",
        value: "IP 66 equivalent",
      },
      {
        title: "Sensors",
        value: "GNSS module,",
      },
      {
        title: "",
        value: "3D MEMs accelerometer,",
      },
      {
        title: "",
        value: "Hall-effect",
      },
      {
        title: "Dimensions",
        value: "107mm x 52mm x 27mm",
      },
      {
        title: "Weight",
        value: "45g",
      },
      {
        title: "PCB Temperature",
        value: "NTC 100k ohm",
      },
      {
        title: "Battery Monitoring",
        value: "Resistor divider",
      },
      {
        title: "Type Approval",
        value: "FCC/IC",
      },
    ],
  },
  // {
  //   img: LoraBridge,
  //   desc: "RS 485 Lora Bridge (RTU)",
  //   key: "Smart-Industry-4.0-Solutions",

  // desc_img: "https://s3-alpha-sig.figma.com/img/89d8/7065/ffa6c8439e62d259359306b102d2b9d6?Expires=1614556800&Signature=F9otzjeyctk2fjx54kTIppzM0UHdXJy1J55aimn4c7cfbmVGZDxpRICQcJN4~NEWpOzrRbWRW-Rn0FDt-4P2U6kn6uhuA2~0PFQMD9GTChmEXmSopSpm0thR1yrqasJzvhHkoA6JHyh36t6hYK--vYKojmAf31yw3MnJdkEMzV4NBefgH7ozrJmiOhUZ~SUYWcyEFavmezpqiTBSRSXMdDfTdvV0eGAnkZ-SruozK7blj2SNpF7D-FbetcyUckPJsgt8kFIOl4-MFOVEDYyBCkfW7j9Hd2JVmpaf8bPbjTaOBASv4WIgAJiF86nv7lWG8s8~JaX1OWn0d8I3MlClgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UAdesc_product: ""// },
  {
    img: [PredictiveMaintenance],
    desc: "Predictive maintenance Sensor",
    key: "Smart-Industry-4.0-Solutions",
    keyProduct: "Predictive-maintenance-Sensor",
    desc_img:
      "https://s3-alpha-sig.figma.com/img/89d8/7065/ffa6c8439e62d259359306b102d2b9d6?Expires=1614556800&Signature=F9otzjeyctk2fjx54kTIppzM0UHdXJy1J55aimn4c7cfbmVGZDxpRICQcJN4~NEWpOzrRbWRW-Rn0FDt-4P2U6kn6uhuA2~0PFQMD9GTChmEXmSopSpm0thR1yrqasJzvhHkoA6JHyh36t6hYK--vYKojmAf31yw3MnJdkEMzV4NBefgH7ozrJmiOhUZ~SUYWcyEFavmezpqiTBSRSXMdDfTdvV0eGAnkZ-SruozK7blj2SNpF7D-FbetcyUckPJsgt8kFIOl4-MFOVEDYyBCkfW7j9Hd2JVmpaf8bPbjTaOBASv4WIgAJiF86nv7lWG8s8~JaX1OWn0d8I3MlClgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    desc_product:
      "A complete machine monitoring solution with exceptional value in sensor fusion and Edge AI",
    spec: [
      {
        title: "Vibration 3 axes (frequency limit)",
        value: "1.75 KHz with FFT",
      },
      {
        title: "Ultrasound",
        value: "70 kHz",
      },
      {
        title: "Contact temperature",
        value: "Yes",
      },
      {
        title: "Ambient temperature",
        value: "Yes (on IP66 version)",
      },
      {
        title: "Shock",
        value: "15 to 200g",
      },
      {
        title: "Kurtosis vibration",
        value: "Yes",
      },
      {
        title: "External sensors",
        value: "4-20th, ToR, PT100",
      },
      {
        title: "Setting alert thresholds",
        value: "Yes",
      },
      {
        title: "Main data transmission from sensor",
        value: "LoRa",
      },
      {
        title: "Power",
        value: "8-years user replaceable 4x AA batteries",
      },
      {
        title: "Waterproofing/Atex",
        value: "IP66/Zone 1",
      },
      {
        title: "Need smartphone app",
        value: "No, not needed",
      },
    ],
    logo_mini: Asystom,
  },
  {
    img: [NemaStreetLight],
    desc: "NEMA Stret Light Controller",
    key: "Smart-Street-Light-Solutions",
    keyProduct: "NEMA-Street-Light-Controller",
    desc_img:
      "https://s3-alpha-sig.figma.com/img/89d8/7065/ffa6c8439e62d259359306b102d2b9d6?Expires=1614556800&Signature=F9otzjeyctk2fjx54kTIppzM0UHdXJy1J55aimn4c7cfbmVGZDxpRICQcJN4~NEWpOzrRbWRW-Rn0FDt-4P2U6kn6uhuA2~0PFQMD9GTChmEXmSopSpm0thR1yrqasJzvhHkoA6JHyh36t6hYK--vYKojmAf31yw3MnJdkEMzV4NBefgH7ozrJmiOhUZ~SUYWcyEFavmezpqiTBSRSXMdDfTdvV0eGAnkZ-SruozK7blj2SNpF7D-FbetcyUckPJsgt8kFIOl4-MFOVEDYyBCkfW7j9Hd2JVmpaf8bPbjTaOBASv4WIgAJiF86nv7lWG8s8~JaX1OWn0d8I3MlClgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    desc_product:
      "IP66 rated Nema Controller that can remotely monitor and control via RF / GSM /LoRAWAN / NB-IoT",
    spec: [
      {
        title: "Input Voltage",
        value: "140 - 270V (440V Protection Provided)",
      },
      {
        title: "Lighting Loads",
        value: "Control & Monitoring of LED loads up to 500W",
      },
      {
        title: "Wireless Communication",
        value: "LoRaWAN communication (868MHz - 930MHz)",
      },
      {
        title: "Power Consumption",
        value: "Less than 2W",
      },
      {
        title: "Measurements",
        value:
          "AC Voltage, Current, Power, Frequency, Power Factor, Apparent Energy, Active Energy, On-Hours",
      },
      {
        title: "Operating Modes",
        value:
          "Manual, Automatic (Time of Day Schedule), Astronomical Clock, Emergency, Photocell, Motion",
      },
      {
        title: "Internal Surge Protection",
        value: "Internal SLC (10kV), NEMA (4kV)",
      },
      {
        title: "Electrical Protection",
        value: "Overload, Short-Circuit",
      },
      {
        title: "Electrical Safety",
        value: "Galvanical isolation between high voltage & low voltage",
      },
      {
        title: "Operating Conditions",
        value: "-40C to 70C",
      },
      {
        title: "External Sensor Options",
        value:
          "Supports Photocell, Motion, Temperature & Environmental Sensors",
      },
      {
        title: "Network Security",
        value: "128-bit AES Encryption",
      },
      {
        title: "Manufacturing Standard",
        value: "ISO 9001-2015, Made in India",
      },
      {
        title: "Types (Dimensions)",
        value: "Internal SLC (207mm x 82mm x 39mm), Nema (90mm x 45mm)",
      },
    ],
  },
  {
    img: [InternalSingleLight],
    desc: "Internal Single Light Controller",
    key: "Smart-Street-Light-Solutions",
    keyProduct: "Internal-Single-Light-Controller",
    desc_img:
      "https://s3-alpha-sig.figma.com/img/89d8/7065/ffa6c8439e62d259359306b102d2b9d6?Expires=1614556800&Signature=F9otzjeyctk2fjx54kTIppzM0UHdXJy1J55aimn4c7cfbmVGZDxpRICQcJN4~NEWpOzrRbWRW-Rn0FDt-4P2U6kn6uhuA2~0PFQMD9GTChmEXmSopSpm0thR1yrqasJzvhHkoA6JHyh36t6hYK--vYKojmAf31yw3MnJdkEMzV4NBefgH7ozrJmiOhUZ~SUYWcyEFavmezpqiTBSRSXMdDfTdvV0eGAnkZ-SruozK7blj2SNpF7D-FbetcyUckPJsgt8kFIOl4-MFOVEDYyBCkfW7j9Hd2JVmpaf8bPbjTaOBASv4WIgAJiF86nv7lWG8s8~JaX1OWn0d8I3MlClgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    desc_product:
      "Single Controller that connected to an LED Driver in the driver compartment. This can remotely monitor and control via RF / GSM / LoRAWAN / NB-IoT / PLCC",
    spec: [
      {
        title: "Input Voltage",
        value: "140 - 270V (440V Protection Provided)",
      },
      {
        title: "Lighting Loads",
        value: "Control & Monitoring of LED loads up to 500W",
      },
      {
        title: "Wireless Communication",
        value: "LoRaWAN communication (868MHz - 930MHz)",
      },
      {
        title: "Power Consumption",
        value: "Less than 2W",
      },
      {
        title: "Measurements",
        value:
          "AC Voltage, Current, Power, Frequency, Power Factor, Apparent Energy, Active Energy, On-Hours",
      },
      {
        title: "Operating Modes",
        value:
          "Manual, Automatic (Time of Day Schedule), Astronomical Clock, Emergency, Photocell, Motion",
      },
      {
        title: "Internal Surge Protection",
        value: "Internal SLC (10kV), NEMA (4kV)",
      },
      {
        title: "Electrical Protection",
        value: "Overload, Short-Circuit",
      },
      {
        title: "Electrical Safety",
        value: "Galvanical isolation between high voltage & low voltage",
      },
      {
        title: "Operating Conditions",
        value: "-40C to 70C",
      },
      {
        title: "External Sensor Options",
        value:
          "Supports Photocell, Motion, Temperature & Environmental Sensors",
      },
      {
        title: "Network Security",
        value: "128-bit AES Encryption",
      },
      {
        title: "Manufacturing Standard",
        value: "ISO 9001-2015, Made in India",
      },
      {
        title: "Types (Dimensions)",
        value: "Internal SLC (207mm x 82mm x 39mm), Nema (90mm x 45mm)",
      },
    ],
  },
  {
    img: [DualLightController],
    desc: "Dual Light Controller",
    key: "Smart-Street-Light-Solutions",
    keyProduct: "Dual-Light-Controller",
    desc_img:
      "https://s3-alpha-sig.figma.com/img/89d8/7065/ffa6c8439e62d259359306b102d2b9d6?Expires=1614556800&Signature=F9otzjeyctk2fjx54kTIppzM0UHdXJy1J55aimn4c7cfbmVGZDxpRICQcJN4~NEWpOzrRbWRW-Rn0FDt-4P2U6kn6uhuA2~0PFQMD9GTChmEXmSopSpm0thR1yrqasJzvhHkoA6JHyh36t6hYK--vYKojmAf31yw3MnJdkEMzV4NBefgH7ozrJmiOhUZ~SUYWcyEFavmezpqiTBSRSXMdDfTdvV0eGAnkZ-SruozK7blj2SNpF7D-FbetcyUckPJsgt8kFIOl4-MFOVEDYyBCkfW7j9Hd2JVmpaf8bPbjTaOBASv4WIgAJiF86nv7lWG8s8~JaX1OWn0d8I3MlClgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    desc_product:
      "This controller has the ability to control and monitor two different LED lighting loads up to 500W via RF / GSM / LoRAWAN / NB-IoT / PLCC",
    spec: [
      {
        title: "Input Voltage",
        value: "140 - 270V (440V Protection Provided)",
      },
      {
        title: "Lighting Loads",
        value: "Control & Monitoring of LED loads up to 500W",
      },
      {
        title: "Wireless Communication",
        value: "LoRaWAN communication (868MHz - 930MHz)",
      },
      {
        title: "Power Consumption",
        value: "Less than 2W",
      },
      {
        title: "Measurements",
        value:
          "AC Voltage, Current, Power, Frequency, Power Factor, Apparent Energy, Active Energy, On-Hours",
      },
      {
        title: "Operating Modes",
        value:
          "Manual, Automatic (Time of Day Schedule), Astronomical Clock, Emergency, Photocell, Motion",
      },
      {
        title: "Internal Surge Protection",
        value: "Internal SLC (10kV), NEMA (4kV)",
      },
      {
        title: "Electrical Protection",
        value: "Overload, Short-Circuit",
      },
      {
        title: "Electrical Safety",
        value: "Galvanical isolation between high voltage & low voltage",
      },
      {
        title: "Operating Conditions",
        value: "-40C to 70C",
      },
      {
        title: "External Sensor Options",
        value:
          "Supports Photocell, Motion, Temperature & Environmental Sensors",
      },
      {
        title: "Network Security",
        value: "128-bit AES Encryption",
      },
      {
        title: "Manufacturing Standard",
        value: "ISO 9001-2015, Made in India",
      },
      {
        title: "Types (Dimensions)",
        value: "Internal SLC (207mm x 82mm x 39mm), Nema (90mm x 45mm)",
      },
    ],
  },
  {
    img: [StreetLightGateway],
    desc: "Gateway Kerlink iStation",
    key: "Smart-Street-Light-Solutions",
    keyProduct: "Gateway-Kerlink-iStation",
    is_gateway: true,
    desc_img:
      "https://s3-alpha-sig.figma.com/img/89d8/7065/ffa6c8439e62d259359306b102d2b9d6?Expires=1614556800&Signature=F9otzjeyctk2fjx54kTIppzM0UHdXJy1J55aimn4c7cfbmVGZDxpRICQcJN4~NEWpOzrRbWRW-Rn0FDt-4P2U6kn6uhuA2~0PFQMD9GTChmEXmSopSpm0thR1yrqasJzvhHkoA6JHyh36t6hYK--vYKojmAf31yw3MnJdkEMzV4NBefgH7ozrJmiOhUZ~SUYWcyEFavmezpqiTBSRSXMdDfTdvV0eGAnkZ-SruozK7blj2SNpF7D-FbetcyUckPJsgt8kFIOl4-MFOVEDYyBCkfW7j9Hd2JVmpaf8bPbjTaOBASv4WIgAJiF86nv7lWG8s8~JaX1OWn0d8I3MlClgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    desc_product: `The "Wirnet™️ iStation" is the ideal gateway to support you in your smart city, smart industry or every smart project, because it combines both the simplicity of installation a unique superior coverage and operational excellence.`,
    spec: [
      {
        title: "",
        value: "Sniffer for LBT (Listen Before Talk)",
      },
      {
        title: "",
        value: "Built-in with hight rejection SAW filters",
      },
      {
        title: "Rx Sensitivity",
        value: "-141 dBm (SF12)",
      },
      {
        title: "TX Power",
        value: "configurable from 5dBm to 27dBm",
      },
      {
        title: "",
        value: "Range -40°C +60°C",
      },
      {
        title: "Humidity",
        value: "95%",
      },
      {
        title: "Size",
        value: "265 x 165 x 100 mm",
      },
      {
        title: "Weight",
        value: "1,4kg (mounting kit included)",
      },
      {
        title: "",
        value: "Spectrum analysis compliant",
      },
      {
        title: "",
        value:
          "Backup batteries to allow the clean shut down of applications in case of power cut",
      },
      {
        title: "Casing",
        value: "IP6 Alu (Black), Polycarbonate (Front), Inox (mounting kit)",
      },
      {
        title: "",
        value: "Surge protection of the RF LoRa link (option)",
      },
      {
        title: "CPU",
        value: "ARM Cortex A9",
      },
      {
        title: "",
        value: "DDRAM 256MB",
      },
      {
        title: "",
        value: "8GB eMMC (6GB available for user)",
      },
    ],
  },
  {
    img: [IfemtoCell],
    desc: "Gateway Kerlink Wirnet iFemto Cell",
    key: "Smart-Environment",
    is_gateway: true,

    keyProduct: "Gateway-Kerlink-Wirnet-iFemto-Cell",
    desc_product:
      "Wirnet ifemtocell is a nano gateway designed for indoor applications. Wirnet ifemtocell makes easier the deployment of IoT solutions by availabling network desification. It is dedicated to smart building applications thanks to its small case and strong power of communication.",
    spec: [
      {
        title: "Size",
        value: "160 x 90 x 35mm - Weight 500g",
      },
      {
        title: "",
        value: "FCC/ETSI certified",
      },
      {
        title: "",
        value: "Backhaul via Ethernet, Wifi, 4G (optional)",
      },
      {
        title: "",
        value: "Robust and waterproof case : IP31",
      },
      {
        title: "Full Operating range",
        value: "-20°C to +55°C",
      },
      {
        title: "",
        value: "PowerOverEthernet",
      },
    ],
  },
  {
    img: [CoSensor],
    desc: "Co Sensor",
    key: "Smart-Environment",
    keyProduct: "Co-Sensor",
    desc_img: CoSensor,
    desc_product:
      "RA02C is a wireless control alarm device for smart home with high reliable LoRaWAN wireless communication. RA02C is a device for the detection of harmful gases in the building. It is suitable for the detection of CO (carbon monoxide). When the concentration exceeds the present value, it will trigger the alarm and fully comply with the LoRaWAN Protocol Standard.",
    spec: [
      {
        title: "Power Input",
        value: "2*AAA Alkaline Battery",
      },
      {
        title: "Standby Current",
        value: "18uA/3VDC",
      },
      {
        title: "Average Operating Current",
        value: "70uA/3VDC",
      },
      {
        title: "Current While Alarming",
        value: "20mA/3VDC",
      },
      {
        title: "Alarm Sound Intensity",
        value: "85dBm At 3m",
      },
      {
        title: "CO Detection Concentration Range",
        value: "0 ~ 1000ppm",
      },
      {
        title: "TX Power",
        value: "19dBm±1dBm",
      },
      {
        title: "Rx Sensitivity",
        value: "-136dBm (LoRa，Spreading Factor=12, Bit Rate=293bps )",
      },
      {
        title: "",
        value: "-121dBm (FSK,Frequency Deviation=5kHz, Bit Rate=1.2kbps)",
      },
      {
        title: "Antenna Type",
        value: "Build-In Antenna",
      },
      {
        title: "Communication Range",
        value:
          "10 Km (Line-Of-Sight, The Actual Transmission Distance Depends On The Environment)",
      },
      {
        title: "Data Transfer Rate",
        value: "0.3kbps～50kbps",
      },
      {
        title: "Spread Technique",
        value: "LoRa/FSK",
      },
      {
        title: "Available Frequency",
        value: "AU915-928, AS923",
      },
      {
        title: "Dimension",
        value: "D106mm, H36mm",
      },
      {
        title: "Operating Temperature Range",
        value: "-20℃ ～ 55℃",
      },
      {
        title: "Operating Humidity Range",
        value: "< 90%RH (No Condensation)",
      },
      {
        title: "Storage Temperature Range",
        value: "-40℃ ～ 85℃",
      },
    ],
  },
  {
    img: [PhSensor],
    desc: "PH Sensor",
    key: "Smart-Environment",
    keyProduct: "PH-Sensor",
    desc_img:
      "https://s3-alpha-sig.figma.com/img/89d8/7065/ffa6c8439e62d259359306b102d2b9d6?Expires=1614556800&Signature=F9otzjeyctk2fjx54kTIppzM0UHdXJy1J55aimn4c7cfbmVGZDxpRICQcJN4~NEWpOzrRbWRW-Rn0FDt-4P2U6kn6uhuA2~0PFQMD9GTChmEXmSopSpm0thR1yrqasJzvhHkoA6JHyh36t6hYK--vYKojmAf31yw3MnJdkEMzV4NBefgH7ozrJmiOhUZ~SUYWcyEFavmezpqiTBSRSXMdDfTdvV0eGAnkZ-SruozK7blj2SNpF7D-FbetcyUckPJsgt8kFIOl4-MFOVEDYyBCkfW7j9Hd2JVmpaf8bPbjTaOBASv4WIgAJiF86nv7lWG8s8~JaX1OWn0d8I3MlClgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    desc_product:
      "RA0708 is a device for pH detection in water environment. It can detect and send environmental pH data. to data center. It is a wireless communication method. It adopts SX1276 wireless communication module.",
    spec: [
      {
        title: "Power Supply",
        value: "Adapter DC Power Supply (12V/1A)",
      },
      {
        title: "Operating Current 1",
        value: "40mA (no RF signal transmission)",
      },
      {
        title: "Operating Current 2",
        value: "80mA (with RF signal emission)",
      },
      {
        title: "TX Power",
        value: "19dBm±1dBm",
      },
      {
        title: "Rx Sensitivity",
        value: "-136dBm (LoRa，Spreading Factor=12, Bit Rate=293bps )",
      },
      {
        title: "",
        value: "-121dBm (FSK,Frequency deviation=5kHz, Bit Rate=1.2kbps)",
      },
      {
        title: "Antenna Type",
        value: "Build-in antenna",
      },
      {
        title: "Communication Range",
        value:
          "10 km (line-of-sight, the actual transmission distance depends on the environment)",
      },
      {
        title: "Data Transfer Rate",
        value: "0.3kbps～50kbps",
      },
      {
        title: "Spread Technique",
        value: "LoRa/FSK",
      },
      {
        title: "Available Frequency",
        value:
          "EU863-870，US902-928，AU915-928，KR920-923，AS923，CN470-510 Configured before shipment",
      },
      {
        title: "Dimension",
        value: "111mm*86mm*41mm",
      },
      {
        title: "Operating Temperature Range",
        value: "-20℃ ～ 55℃",
      },
      {
        title: "Operating Humidity Range",
        value: "< 90%RH (no condensation)",
      },
      {
        title: "Storage Temperature range",
        value: "-40℃ ～ 85℃",
      },
      {
        title: "IP Rating",
        value: "IP20 (Main body)",
      },
    ],
  },
  {
    img: [WaterLevelSensor],
    desc: "Water Level Sensor",
    key: "Smart-Environment",
    keyProduct: "Water-Level-Sensor",
    desc_img:
      "https://s3-alpha-sig.figma.com/img/89d8/7065/ffa6c8439e62d259359306b102d2b9d6?Expires=1614556800&Signature=F9otzjeyctk2fjx54kTIppzM0UHdXJy1J55aimn4c7cfbmVGZDxpRICQcJN4~NEWpOzrRbWRW-Rn0FDt-4P2U6kn6uhuA2~0PFQMD9GTChmEXmSopSpm0thR1yrqasJzvhHkoA6JHyh36t6hYK--vYKojmAf31yw3MnJdkEMzV4NBefgH7ozrJmiOhUZ~SUYWcyEFavmezpqiTBSRSXMdDfTdvV0eGAnkZ-SruozK7blj2SNpF7D-FbetcyUckPJsgt8kFIOl4-MFOVEDYyBCkfW7j9Hd2JVmpaf8bPbjTaOBASv4WIgAJiF86nv7lWG8s8~JaX1OWn0d8I3MlClgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    desc_product:
      "The ultrasonic level sensor is a low-cost, non-contact and easy-to-install measurement device. It is able to meet the every-day needs of commercial production, as well serving a more specialized role in the technologically advanced aerospace industry, this placing it firmly in the categiry if high-level measurement technology",
    spec: [
      {
        title: "Measure Range",
        value: "5, 8, 10, 12, 15, 20, 25, 30m",
      },
      {
        title: "Blind zone",
        value: "<0.4-1.8m (depending on range)",
      },
      {
        title: "Accuracy",
        value: "0.3%F.S",
      },
      {
        title: "Display",
        value: "OLED",
      },
      {
        title: "Display resolution",
        value: "1mm",
      },
      {
        title: "Frequency",
        value: "20~350KHz",
      },
      {
        title: "Power",
        value: "12-24VDC, 220VAC",
      },
      {
        title: "Power comsumption",
        value: "<1.5W",
      },
      {
        title: "Output (optional)",
        value: "4~20mA RL>600Ω (standard)",
      },
      {
        title: "",
        value: "1~5V/1~10V",
      },
      {
        title: "",
        value: "RS485",
      },
      {
        title: "",
        value: "2NPN",
      },
      {
        title: "",
        value: "2 relays (AC: 5A 250V DC: 10A 24V)",
      },
      {
        title: "Material",
        value: "ABS",
      },
      {
        title: "Dimension",
        value: "Φ92mmx198mmxM60/79mmx300mmxDN80",
      },
      {
        title: "Electrical Connection",
        value: "M20X1.5",
      },
      {
        title: "Installation",
        value: "M60X2 or 61MM/DN80 (Flange)",
      },
      {
        title: "Ingress Protection",
        value: "IP65 (IP68 optional)",
      },
    ],
  },
  {
    img: [WeatherSensor],
    desc: "Weather Sensor",
    key: "Smart-Environment",
    keyProduct: "Weather-Sensor",
    desc_img:
      "https://s3-alpha-sig.figma.com/img/89d8/7065/ffa6c8439e62d259359306b102d2b9d6?Expires=1614556800&Signature=F9otzjeyctk2fjx54kTIppzM0UHdXJy1J55aimn4c7cfbmVGZDxpRICQcJN4~NEWpOzrRbWRW-Rn0FDt-4P2U6kn6uhuA2~0PFQMD9GTChmEXmSopSpm0thR1yrqasJzvhHkoA6JHyh36t6hYK--vYKojmAf31yw3MnJdkEMzV4NBefgH7ozrJmiOhUZ~SUYWcyEFavmezpqiTBSRSXMdDfTdvV0eGAnkZ-SruozK7blj2SNpF7D-FbetcyUckPJsgt8kFIOl4-MFOVEDYyBCkfW7j9Hd2JVmpaf8bPbjTaOBASv4WIgAJiF86nv7lWG8s8~JaX1OWn0d8I3MlClgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    desc_product:
      "MCF-LWWS0X is a complete Davis Instruments Vantage Pro2 Weather Station that integrates a LoRaWAN™ communication system",
    spec: [
      {
        title: "",
        value: "Inside and Outside Temperature and Relative Humidity",
      },
      {
        title: "",
        value: "Barometric Pressure",
      },
      {
        title: "",
        value: "Rainfall",
      },
      {
        title: "",
        value: "Dew Point",
      },
      {
        title: "",
        value: "Wind Speed and Direction sensors (detachable)",
      },
      {
        title: "",
        value: "Solar radiation (only available in MCF-LWWS01 and MCF-LWWS02)",
      },
      {
        title: "",
        value: "PM1, PM2.5, PM10 (only available in MCF-LWWS01 and MCF-LWWS03)",
      },
      {
        title: "",
        value: "UV sensor available as optional",
      },
    ],
  },
  {
    img: [WasteSensor],
    desc: "Waste Sensor",
    key: "Smart-Environment",
    keyProduct: "Waste-Sensor",
    desc_img: WasteSensor,
    desc_product:
      "NETOP Waste Bin sensor is a sensor which can be used for monitoring waste container’s fill level of waste bin/container by using highly optimized ultrasonic sensor.",
    spec: [
      {
        title: "Housing",
        value: "ABS",
      },

      {
        title: "Dimensions",
        value: "90 x 50 mm",
      },
      {
        title: "Operating Temperature",
        value: "-40°C to +85°C",
      },
      {
        title: "Detection range",
        value: "Up to 2000 mm",
      },
      {
        title: "Accuracy",
        value: "± 10 mm",
      },
      {
        title: "Data Transmission Period",
        value: "4 hours (default)",
      },
      {
        title: "Battery Life",
        value: "+10 years",
      },
      {
        title: "Data Security",
        value: "AES-128",
      },
      {
        title: "Power Supply",
        value: "AA Battery 3.6 V Li-SOCl2-Saft LS 14500 (Standard 3 piece)",
      },
      {
        title: "Indicators",
        value: "RGB Status LED (on board)",
      },
    ],
  },
  {
    img: [R718MA],
    desc: "R718MA -Wireless Asset Sensor",
    key: "Smart-Environment",
    keyProduct: "Wireless-Asset-Sensor",
    desc_img: R718MA,
    desc_product:
      "R718MA has a simple positioning function. The device reports its RSSI, SNR information periodically to the gateway. It can be attached to an object, and it sends an alert when it is removed from the premises. The communication is fully compatible with LoRaWAN™ protocol (Class A).",
    spec: [
      {
        title: "Input Power",
        value: "2 x 3.6V ER14505 AA lithium batteries (3.6V 2400mah/section",
      },
      {
        title: "Sleeping Mode",
        value: "22 uA",
      },
      {
        title: "Wake up Mode",
        value: "6.3mA@3.3V",
      },
      {
        title: "Receiving Current (max)",
        value: "11mA @3.3V",
      },
      {
        title: "Transmitting Current (max)",
        value: "120mA/3.3V",
      },
      {
        title: "Battery Voltage Measurement Accuracy",
        value: "±0.1V",
      },
      {
        title: "Low Voltage Threshold",
        value: "3.2V",
      },
      {
        title: "TX Power",
        value: "19dBm±1dBm",
      },
      {
        title: "Rx Sensitivity",
        value: "-136dBm (LoRa，Spreading Factor=12, Bit Rate=293bps )",
      },
      {
        title: "",
        value: "-121dBm (FSK,Frequency deviation=5kHz, Bit Rate=1.2kbps)",
      },
      {
        title: "Antenna Type",
        value: "Build-in antenna",
      },
      {
        title: "Communication Range",
        value:
          "10 km (line-of-sight, the actual transmission distance depends on the environment)",
      },
      {
        title: "Data Transfer Rate",
        value: "0.3kbps～50kbps",
      },
      {
        title: "Spread Technique",
        value: "LoRa/FSK",
      },
      {
        title: "Available Frequency",
        value:
          "US915       AU915       AS923 EU868       KR920       CN470 Configured before shipment",
      },
      {
        title: "Dimension",
        value: "Main Part: L: 112mm*W: 65mm*H: 32mm",
      },
      {
        title: "Weight",
        value: "141g",
      },
      {
        title: "Environment Temperature Range",
        value: "-20℃ ～ 55℃",
      },
      {
        title: "Environment Humidity Range",
        value: "<90% RH  (No condensation)",
      },
      {
        title: "Storage Temperature",
        value: "-40℃ ～ 85℃",
      },
      {
        title: "IP Rating (Main Part)",
        value: "IP67",
      },
      {
        title: "IP Rating (External Sensor)",
        value: "IP67",
      },
    ],
  },

  // baru
  {
    img: [TsVaccine1, TsVaccine2, TsVaccine3],
    desc: "Temperature Sensor for Vaccine",
    key: "Smart-Environment",
    keyProduct: "Temperature-Sensor-for-Vaccine",
    desc_product:
      "JUP-PT1000 not only offers the high precision temperature sensing but also provide the real-time event alarm when temperature is out of the permit range. Meanwhile, the smaller size with 2X AA batteries power supply make it feasible for cold-chain transportation application. ",
    spec: [
      {
        title: "Working voltage",
        value: "3V （2XAA Alkaline Battery)",
      },
      {
        title: "Sensor Type",
        value: "Platinum Sensing Device (PT1000)",
      },
      {
        title: "Temperature range",
        value: "-50C°C to 200°C Note 1",
      },
      {
        title: "Typical Accuracy",
        value: "±0.5  ͦC Note 2",
      },
      {
        title: "Resolution",
        value: "0.1  ͦC",
      },
      {
        title: "Local Data Memory",
        value: "Up to 1000 data",
      },
      {
        title: "RTC Function",
        value: "Each temperature data with time stamp",
      },
      {
        title: "Temperature Alarm Setting",
        value: "Can be either set from Server or USB port connection",
      },
      {
        title: "Battery Life",
        value: "Up to 12 months",
      },
      {
        title: "Communication mode",
        value: "LoRaWAN, Class A",
      },
      {
        title: "Frequency Band",
        value: "AS923",
      },
      {
        title: "Channels",
        value: "8 settable channels with bandwidth of 125kHz",
      },
      {
        title: "TX Power",
        value: "14 dBm",
      },
      {
        title: "RX sensitivities",
        value: "Down to -137dBm",
      },
      {
        title: "Communication distance",
        value: "3km to 10km (eyesight distance in open space)",
      },
      {
        title: "Data Rate",
        value: "980bps ~ 3.125Kbps (adaptive data rate)",
      },
      {
        title: "Listen Before Talk (LBT)",
        value: "Yes",
      },
      {
        title: "Number of Data cached when network interrupted",
        value: "10",
      },
    ],
  },
];

export { SolutionsData, Products };
