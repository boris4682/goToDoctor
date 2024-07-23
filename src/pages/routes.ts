import Routing from "./index.vue";

export const routes = [
  { path: "/", component: () => import("./FirstPage"), name: "Main" },
  { path: "/reg", component: () => import("./Register"), name: "Reg" },
  { path: "/auth", component: () => import("./Authorization"), name: "Auth" },
  { path: "/lcdoctor", component: () => import("./LCdoctor"), name: "LCdoctor" },
  { path: "/setting", component: () => import("./Setting"), name: "Setting" },
  { path: "/changepassword", component: () => import("./ChangePassword"), name: "ChangePassword" },
  { path: "/successfullychanged", component: () => import("./SuccessfullyChanged"), name: "SuccessfullyChanged" },
  { path: "/lcpatient", component: () => import("./LCpatient"), name: "LCpatient" },
  { path: "/patientschildren", component: () => import("./PatientsChildren"), name: "PatientsChildren" },
  { path: "/lcchild", component: () => import("./LCchild"), name: "LCchild" },
  { path: "/medicalcards", component: () => import("./MedicalCards"), name: "MedicalCards" },
  { path: "/records", component: () => import("./Records"), name: "Records" }, 
  { path: "/receptionmenu", component: () => import("./ReceptionMenu"), name: "ReceptionMenu" },
  
];

export { Routing };
