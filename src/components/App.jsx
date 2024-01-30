import e from "../../node_modules/react/index.jsx";
import { AuthProvider as r } from "../context/AuthProvider.jsx";
import l from "../pages/Home/Home.jsx";
import m from "../pages/RegisterPage.jsx";
import a from "../pages/LoginPage.jsx";
import n from "../pages/DiaryPage.jsx";
import o from "../pages/CalculatorPage.jsx";
import { auth as c } from "../firebase/firebase.jsx";
import { Routes as i, Route as t } from "../../node_modules/react-router/dist/index.jsx";
const R = () => /* @__PURE__ */ e.createElement(r, { auth: c }, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(i, null, /* @__PURE__ */ e.createElement(t, { path: "/", element: /* @__PURE__ */ e.createElement(l, null) }), /* @__PURE__ */ e.createElement(t, { path: "/register", element: /* @__PURE__ */ e.createElement(m, null) }), /* @__PURE__ */ e.createElement(t, { path: "/login", element: /* @__PURE__ */ e.createElement(a, null) }), /* @__PURE__ */ e.createElement(t, { path: "/diary", element: /* @__PURE__ */ e.createElement(n, null) }), /* @__PURE__ */ e.createElement(t, { path: "/calculator", element: /* @__PURE__ */ e.createElement(o, null) }))));
export {
  R as default
};
