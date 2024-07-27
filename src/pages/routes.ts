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
  { path: "/medicalcards2", component: () => import("./MedicalCards2"), name: "MedicalCards2" },
  { path: "/records", component: () => import("./Records"), name: "Records" }, 
  { path: "/receptionmenu", component: () => import("./ReceptionMenu"), name: "ReceptionMenu" },
  { path: "/receptionmenu2", component: () => import("./ReceptionMenu2"), name: "ReceptionMenu2" },
  { path: "/receptionmenu3", component: () => import("./ReceptionMenu3"), name: "ReceptionMenu3" },
  { path: "/receptionmenu4", component: () => import("./ReceptionMenu4"), name: "ReceptionMenu4" },
  { path: "/checklist", component: () => import("./CheckList"), name: "CheckList" },
  { path: "/checklist2", component: () => import("./CheckList2"), name: "CheckList2" },
  { path: "/treatment", component: () => import("./Treatment"), name: "Treatment" },
  { path: "/treatment2", component: () => import("./Treatment2"), name: "Treatment2" },
  { path: "/patients", component: () => import("./Patients"), name: "Patients" },
  
];

export { Routing };
