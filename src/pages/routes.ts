import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  { path: "/", component: () => import("./FirstPage"), name: "Main" },
  {
    path: "/mainpage",
    component: () => import("./MainPage"),
    name: "MainPage",
  },
  {
    path: "/mainpage2",
    component: () => import("./MainPage2"),
    name: "MainPage2",
  },
  { path: "/reg", component: () => import("./Register"), name: "Reg" },
  { path: "/auth", component: () => import("./Authorization"), name: "Auth" },
  {
    path: "/lcdoctor",
    component: () => import("./LCdoctor"),
    name: "LCdoctor",
  },
  { path: "/setting", component: () => import("./Setting"), name: "Setting" },
  {
    path: "/changepassword",
    component: () => import("./ChangePassword"),
    name: "ChangePassword",
  },
  {
    path: "/successfullychanged",
    component: () => import("./SuccessfullyChanged"),
    name: "SuccessfullyChanged",
  },
  {
    path: "/lcpatient",
    component: () => import("./LCpatient"),
    name: "LCpatient",
  },
  {
    path: "/patientschildren",
    component: () => import("./PatientsChildren"),
    name: "PatientsChildren",
  },
  { path: "/lcchild", component: () => import("./LCchild"), name: "LCchild" },
  {
    path: "/medicalcards",
    component: () => import("./MedicalCards"),
    name: "MedicalCards",
  },
  {
    path: "/medicalcards2",
    component: () => import("./MedicalCards2"),
    name: "MedicalCards2",
  },
  { path: "/records", component: () => import("./Records"), name: "Records" },
  {
    path: "/receptionmenu",
    component: () => import("./ReceptionMenu"),
    name: "ReceptionMenu",
  },
  {
    path: "/receptionmenu2",
    component: () => import("./ReceptionMenu2"),
    name: "ReceptionMenu2",
  },
  {
    path: "/receptionmenu3",
    component: () => import("./ReceptionMenu3"),
    name: "ReceptionMenu3",
  },
  {
    path: "/receptionmenu4",
    component: () => import("./ReceptionMenu4"),
    name: "ReceptionMenu4",
  },
  {
    path: "/checklist",
    component: () => import("./CheckList"),
    name: "CheckList",
  },
  {
    path: "/checklist2",
    component: () => import("./CheckList2"),
    name: "CheckList2",
  },
  {
    path: "/treatment",
    component: () => import("./Treatment"),
    name: "Treatment",
  },
  {
    path: "/treatment2",
    component: () => import("./Treatment2"),
    name: "Treatment2",
  },
  {
    path: "/patients",
    component: () => import("./Patients"),
    name: "Patients",
  },
  {
    path: "/reception",
    component: () => import("./Reception"),
    name: "Reception",
  },
  {
    path: "/completedreception",
    component: () => import("./CompletedReception"),
    name: "CompletedReception",
  },
  {
    path: "/cancelreception",
    component: () => import("./CancelReception"),
    name: "CancelReception",
  },
  {
    path: "/plannedreception",
    component: () => import("./PlannedReception"),
    name: "PlannedReception",
  },
  {
    path: "/gradereception",
    component: () => import("./GradeReception"),
    name: "GradeReception",
  },
  {
    path: "/appointmentwithspecialist",
    component: () => import("./AppointmentWithSpecialist"),
    name: "AppointmentWithSpecialist",
  },
  { path: "/stepone", component: () => import("./StepOne"), name: "StepOne" },
  {
    path: "/steponeappointment",
    component: () => import("./StepOneAppointment"),
    name: "StepOneAppointment",
  },
  { path: "/steptwo", component: () => import("./StepTwo"), name: "StepTwo" },
  {
    path: "/stepthree",
    component: () => import("./StepThree"),
    name: "StepThree",
  },
  {
    path: "/stepfour/1",
    component: () => import("./StepFour"),
    name: "StepFour",
  },
  {
    path: "/stepfive",
    component: () => import("./StepFive"),
    name: "StepFive",
  },
  {
    path: "/successfulentry",
    component: () => import("./SuccessfulEntry"),
    name: "SuccessfulEntry",
  },
  {
    path: "/preparation/:id",
    component: () => import("./Preparation"),
    name: "Preparation",
  },
  {
    path: "/whowillgo/:id",
    component: () => import("./WhoWillGo"),
    name: "WhoWillGo",
  },
  {
    path: "/children",
    component: () => import("./Children"),
    name: "Children",
  },
  { path: "/parents", component: () => import("./Parents"), name: "Parents" },
  {
    path: "/checklist/:id",
    component: () => import("./CheckList.vue"),
    name: "Checklist",
  },
  {
    path: "/parents2",
    component: () => import("./Parents2"),
    name: "Parents2",
  },
  {
    path: "/animcinema",
    component: () => import("./AnimCinema"),
    name: "AnimCinema",
  },
  {
    path: "/trainingplay",
    component: () => import("./TrainingPlay"),
    name: "TrainingPlay",
  },
  { path: "/video", component: () => import("./Video"), name: "Video" },
  {
    path: "/recommendations",
    component: () => import("./Recommendations"),
    name: "Recommendations",
  },
  {
    path: "/recommendations2",
    component: () => import("./Recommendations2"),
    name: "Recommendations2",
  },
  {
    path: "/recommendations3",
    component: () => import("./Recommendations3"),
    name: "Recommendations3",
  },
  {
    path: "/recommendations4",
    component: () => import("./Recommendations4"),
    name: "Recommendations4",
  },
  {
    path: "/recommendations5",
    component: () => import("./Recommendations5"),
    name: "Recommendations5",
  },
  {
    path: "/recommendations6",
    component: () => import("./Recommendations6"),
    name: "Recommendations6",
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("userData") !== null;
  if (to.path === "/auth" || to.path === "/reg") {
    next();
  } else if (!isAuthenticated) {
    next({ name: "Auth" });
  } else {
    next();
  }
});
