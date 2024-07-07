import Routing from "./index.vue";

export const routes = [
  { path: "/", component: () => import("./FirstPage"), name: "Main" },
  { path: "/reg", component: () => import("./Register"), name: "Reg" },
];

export { Routing };
