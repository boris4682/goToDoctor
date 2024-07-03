import Routing from "./index.vue";

export const routes = [
  { path: "/", component: () => import("./MainPage"), name: "Main" },
];

export { Routing };
