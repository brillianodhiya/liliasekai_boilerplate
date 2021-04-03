import React from "react";

const Home = React.lazy(() => import("./pages/home/home"));

const routes = [
  { path: "/", name: "Home", component: Home, exact: true },
  { path: "/home", name: "Home", component: Home, exact: true },

  // {
  //   path: "/product/detail/:key",
  //   name: "Product Detail",
  //   component: ProductDetails,
  //   exact: true,
  // },
];

export default routes;
