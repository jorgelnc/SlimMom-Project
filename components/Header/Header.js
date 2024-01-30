import e from "../../node_modules/react/index.js";
import { Link as t } from "../../node_modules/react-router-dom/dist/index.js";
import a from "./Header.module.css.js";
const i = ({ currentPage: n }) => /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("div", { className: a.header }, /* @__PURE__ */ e.createElement("div", { className: a["logo-container"] }, /* @__PURE__ */ e.createElement(t, { to: "/" }, /* @__PURE__ */ e.createElement("div", { className: a.logo }))), /* @__PURE__ */ e.createElement("div", { className: a.navigation }, /* @__PURE__ */ e.createElement("div", { className: a["icon-hamburger"] }), /* @__PURE__ */ e.createElement("div", { className: a["buttons-container"] }, (() => n === "Main" || n === "Register" || n === "Login" ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(t, { to: "/login", className: a["page-navigation"] }, "INICIAR SESION"), /* @__PURE__ */ e.createElement(t, { to: "/register", className: a["page-navigation"] }, "CREAR UNA CUENTA")) : /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(t, { to: "/diary", className: a["page-navigation"] }, "DIARIO"), /* @__PURE__ */ e.createElement(
  t,
  {
    to: "/calculator",
    className: a["page-navigation"]
  },
  "CALCULADORA"
)))()))));
export {
  i as default
};
