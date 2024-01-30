import e from "../node_modules/react/index.js";
import { AuthProvider as r } from "../context/AuthProvider.js";
import l from "../pages/Home/Home.js";
import m from "../pages/RegisterPage.js";
import a from "../pages/LoginPage.js";
import n from "../pages/DiaryPage.js";
import o from "../pages/CalculatorPage.js";
import { auth as c } from "../firebase/firebase.js";
import { Routes as i, Route as t } from "../node_modules/react-router/dist/index.js";
const R = () => /* @__PURE__ */ e.createElement(r, { auth: c }, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(i, null, /* @__PURE__ */ e.createElement(t, { path: "/", element: /* @__PURE__ */ e.createElement(l, null) }), /* @__PURE__ */ e.createElement(t, { path: "/register", element: /* @__PURE__ */ e.createElement(m, null) }), /* @__PURE__ */ e.createElement(t, { path: "/login", element: /* @__PURE__ */ e.createElement(a, null) }), /* @__PURE__ */ e.createElement(t, { path: "/diary", element: /* @__PURE__ */ e.createElement(n, null) }), /* @__PURE__ */ e.createElement(t, { path: "/calculator", element: /* @__PURE__ */ e.createElement(o, null) }))));
export {
  R as default
};
