import e, { r } from "../../node_modules/react/index.jsx";
import { aa as N, ak as g } from "../../node_modules/@firebase/auth/dist/esm2017/index-dd468b12.jsx";
import "../../node_modules/@firebase/app/dist/esm/index.esm2017.jsx";
import "../../node_modules/@firebase/logger/dist/esm/index.esm2017.jsx";
import { auth as h } from "../../firebase/firebase.jsx";
import t from "./RegisterForm.module.css.jsx";
import { useNavigate as C } from "../../node_modules/react-router/dist/index.jsx";
const k = () => {
  const s = C(), [l, c] = r.useState(""), [n, m] = r.useState(""), [o, u] = r.useState(""), [i, p] = r.useState(null), d = async () => {
    try {
      const a = await N(h, n, o);
      await g(a.user, {
        displayName: l
      }), s("/diary");
    } catch (a) {
      p(a.message);
    }
  }, E = () => {
    s("/login");
  };
  return /* @__PURE__ */ e.createElement("div", { className: t.registerContainer }, /* @__PURE__ */ e.createElement("h2", { className: t.title }, "Registro"), /* @__PURE__ */ e.createElement("div", { className: t.inputContainer }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: l,
      onChange: (a) => c(a.target.value),
      className: t.input,
      placeholder: "Nombre*",
      required: !0
    }
  ), /* @__PURE__ */ e.createElement("label", { className: t.label })), /* @__PURE__ */ e.createElement("div", { className: t.inputContainer }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "email",
      value: n,
      onChange: (a) => m(a.target.value),
      className: t.input,
      placeholder: "Correo Electrónico*",
      required: !0
    }
  ), /* @__PURE__ */ e.createElement("label", { className: t.label })), /* @__PURE__ */ e.createElement("div", { className: t.inputContainer }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "password",
      value: o,
      onChange: (a) => u(a.target.value),
      className: t.input,
      placeholder: "Contraseña*",
      required: !0
    }
  ), /* @__PURE__ */ e.createElement("label", { className: t.label })), /* @__PURE__ */ e.createElement("button", { onClick: d, className: t.registerButton }, "Registro"), /* @__PURE__ */ e.createElement("button", { onClick: E, className: t.loginButton }, "Iniciar Sesión"), i && /* @__PURE__ */ e.createElement("p", { className: t.error }, i));
};
export {
  k as default
};
