import e, { r } from "../../node_modules/react/index.jsx";
import d from "../components/Header/Header.jsx";
import { ab as g } from "../../node_modules/@firebase/auth/dist/esm2017/index-dd468b12.jsx";
import "../../node_modules/@firebase/app/dist/esm/index.esm2017.jsx";
import "../../node_modules/@firebase/logger/dist/esm/index.esm2017.jsx";
import { auth as E } from "../firebase/firebase.jsx";
import t from "./LoginPage.module.css.jsx";
import { useNavigate as N } from "../../node_modules/react-router/dist/index.jsx";
const S = () => {
  const n = N(), [s, i] = r.useState(""), [l, c] = r.useState(""), [o, m] = r.useState(null), u = async () => {
    try {
      await g(E, s, l), n("/diary");
    } catch (a) {
      m(a.message);
    }
  }, p = () => {
    n("/register");
  };
  return /* @__PURE__ */ e.createElement("div", { className: t.loginContainer }, /* @__PURE__ */ e.createElement(d, { currentPage: "Login" }), /* @__PURE__ */ e.createElement("div", { className: t.formContainer }, /* @__PURE__ */ e.createElement("h2", { className: t.title }, "Iniciar Sesión"), /* @__PURE__ */ e.createElement("div", { className: t.inputContainer }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "email",
      value: s,
      onChange: (a) => i(a.target.value),
      className: t.input,
      placeholder: "Correo Electrónico*",
      required: !0
    }
  ), /* @__PURE__ */ e.createElement("label", { className: t.label })), /* @__PURE__ */ e.createElement("div", { className: t.inputContainer }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "password",
      value: l,
      onChange: (a) => c(a.target.value),
      className: t.input,
      placeholder: "Contraseña*",
      required: !0
    }
  ), /* @__PURE__ */ e.createElement("label", { className: t.label })), /* @__PURE__ */ e.createElement("button", { onClick: u, className: t.loginButton }, "Iniciar sesion"), /* @__PURE__ */ e.createElement("button", { onClick: p, className: t.registerButton }, "Crear una cuenta"), o && /* @__PURE__ */ e.createElement("p", { className: t.error }, o)));
};
export {
  S as default
};
