import Routing from "./index.vue";

export const routes = [
  { path: "/", component: () => import("./FirstPage"), name: "Main" },
  { path: "/reg", component: () => import("./Register"), name: "Reg" },
  { path: "/auth", component: () => import("./Authorization"), name: "Auth" },
  { path: "/lcdoctor", component: () => import("./LCdoctor"), name: "LCdoctor" },
  { path: "/setting", component: () => import("./Setting"), name: "Setting" },
];

export { Routing };
