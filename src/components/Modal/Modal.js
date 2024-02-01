import e, { r as p } from "../../../node_modules/react/index.js";
import { Link as u } from "../../../node_modules/react-router-dom/dist/index.js";
import { filterObjectsByGroupBloodNotAllowed as E } from "../../shared/shared.js";
import N from "../../resources/productos.json.js";
import t from "./Modal.module.css.js";
const f = ({ values: l, onClose: c }) => {
  const [n, m] = p.useState(!1), a = {
    height: l.altura,
    weight: l.pesoActual,
    age: l.edad,
    desiredWeight: l.pesoDeseado,
    bloodType: l.grupoSanguineo
  }, i = 10 * a.weight + 6.25 * a.height - 5 * a.age - 161 - 10 * (a.weight - a.desiredWeight), r = [
    ...E(N, a.bloodType, !0).map((s) => s.title).filter(function(s, o, d) {
      return d.indexOf(s) === o;
    }).splice(0, 4)
  ];
  return /* @__PURE__ */ e.createElement("div", { className: t.modal }, /* @__PURE__ */ e.createElement("div", { className: t.modalContent }, /* @__PURE__ */ e.createElement("div", { className: t["close-container"] }, /* @__PURE__ */ e.createElement("button", { className: t.close, onClick: c }, "X")), /* @__PURE__ */ e.createElement("h1", { className: t.title }, "Tu ingesta diaria recomendada de calorías es"), /* @__PURE__ */ e.createElement("div", { className: t["calories-container"] }, /* @__PURE__ */ e.createElement("h1", { className: t.calories }, i), /* @__PURE__ */ e.createElement("span", { className: t.units }, "kcal")), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("h3", { className: t["list-title"] }, "Alimentos que no deberías comer"), /* @__PURE__ */ e.createElement("ul", { className: t.list }, r.map((s, o) => /* @__PURE__ */ e.createElement("li", { key: o, className: t.items }, o + 1 + ". " + r[o])))), /* @__PURE__ */ e.createElement("div", { className: t["button-container"] }, /* @__PURE__ */ e.createElement(
    "button",
    {
      className: t["start-button"],
      type: "submit"
    },
    /* @__PURE__ */ e.createElement(u, { to: "/register" }, "Comienza a perder peso")
  ), n && /* @__PURE__ */ e.createElement(f, { onClose: () => m(!1) }))));
};
export {
  f as default
};
