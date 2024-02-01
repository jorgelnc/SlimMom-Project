import a, { r as s } from "../../../node_modules/react/index.js";
import { useFormik as h } from "../../../node_modules/formik/dist/formik.esm.js";
import { object as g, number as u, string as E } from "../../../node_modules/yup/index.esm.js";
import v from "../Modal/Modal.js";
import l from "./CaloriesCalculatorForm.module.css.js";
const k = () => {
  const [o, d] = s.useState(null), [i, n] = s.useState(!1), t = (r) => {
    d(r);
  }, c = ["1", "2", "3", "4"], m = g().shape({
    altura: u().required("Altura es requerida"),
    edad: u().required("Edad es requerida"),
    pesoActual: u().required("Peso actual es requerido"),
    pesoDeseado: u().required("Peso deseado es requerido"),
    grupoSanguineo: E().required("Grupo sanguíneo es requerido")
  }), e = h({
    initialValues: {
      altura: "",
      edad: "",
      pesoActual: "",
      pesoDeseado: "",
      grupoSanguineo: ""
    },
    validationSchema: m,
    onSubmit: (r) => {
      n(!0), console.log("Formulario enviado con éxito:", r);
    }
  });
  return s.useEffect(() => {
    const r = (p) => {
      p.key === "Escape" && n(!1);
    };
    return document.addEventListener("keydown", r), () => {
      document.removeEventListener("keydown", r);
    };
  }, []), /* @__PURE__ */ a.createElement("div", { className: l.calculator }, /* @__PURE__ */ a.createElement("h1", { className: l["calculator-title"] }, "Calcula tu ingesta diaria de calorías ahora mismo"), /* @__PURE__ */ a.createElement("form", { onSubmit: e.handleSubmit }, /* @__PURE__ */ a.createElement("div", { className: l.formulario }, /* @__PURE__ */ a.createElement("div", { className: l.columna }, /* @__PURE__ */ a.createElement(
    "label",
    {
      htmlFor: "altura",
      className: `${l["formulario-label"]} ${o === "altura" ? l["formulario-label-clicked"] : ""}`,
      onClick: () => t("altura")
    },
    "Altura*"
  ), /* @__PURE__ */ a.createElement(
    "input",
    {
      id: "altura",
      name: "altura",
      type: "number",
      className: l["formulario-input"],
      onChange: e.handleChange,
      onBlur: e.handleBlur,
      value: e.values.altura
    }
  ), e.touched.altura && e.errors.altura ? /* @__PURE__ */ a.createElement("div", { className: l.required_input }, e.errors.altura) : null, /* @__PURE__ */ a.createElement(
    "label",
    {
      htmlFor: "edad",
      className: `${l["formulario-label"]} ${o === "edad" ? l["formulario-label-clicked"] : ""}`,
      onClick: () => t("edad")
    },
    "Edad*"
  ), /* @__PURE__ */ a.createElement(
    "input",
    {
      id: "edad",
      name: "edad",
      type: "number",
      className: l["formulario-input"],
      onChange: e.handleChange,
      onBlur: e.handleBlur,
      value: e.values.edad
    }
  ), e.touched.edad && e.errors.edad ? /* @__PURE__ */ a.createElement("div", { className: l.required_input }, e.errors.edad) : null, /* @__PURE__ */ a.createElement(
    "label",
    {
      htmlFor: "pesoActual",
      className: `${l["formulario-label"]} ${o === "pesoActual" ? l["formulario-label-clicked"] : ""}`,
      onClick: () => t("pesoActual")
    },
    "Peso actual*"
  ), /* @__PURE__ */ a.createElement(
    "input",
    {
      id: "pesoActual",
      name: "pesoActual",
      type: "number",
      className: l["formulario-input"],
      onChange: e.handleChange,
      onBlur: e.handleBlur,
      value: e.values.pesoActual
    }
  ), e.touched.pesoActual && e.errors.pesoActual ? /* @__PURE__ */ a.createElement("div", { className: l.required_input }, e.errors.pesoActual) : null), /* @__PURE__ */ a.createElement("div", { className: l.columna }, /* @__PURE__ */ a.createElement(
    "label",
    {
      htmlFor: "pesoDeseado",
      className: `${l["formulario-label"]} ${o === "pesoDeseado" ? l["formulario-label-clicked"] : ""}`,
      onClick: () => t("pesoDeseado")
    },
    "Peso deseado*"
  ), /* @__PURE__ */ a.createElement(
    "input",
    {
      id: "pesoDeseado",
      name: "pesoDeseado",
      type: "number",
      className: l["formulario-input"],
      onChange: e.handleChange,
      onBlur: e.handleBlur,
      value: e.values.pesoDeseado
    }
  ), e.touched.pesoDeseado && e.errors.pesoDeseado ? /* @__PURE__ */ a.createElement("div", { className: l.required_input }, e.errors.pesoDeseado) : null, /* @__PURE__ */ a.createElement("label", { className: l["formulario-label"] }, "Grupo sanguíneo*"), /* @__PURE__ */ a.createElement("div", { className: l["grupoSanguineo-options"] }, c.map((r) => /* @__PURE__ */ a.createElement("div", { key: r }, /* @__PURE__ */ a.createElement(
    "input",
    {
      type: "radio",
      id: r,
      name: "grupoSanguineo",
      value: r,
      defaultChecked: e.values.grupoSanguineo === r,
      onChange: () => e.handleChange({ target: { name: "grupoSanguineo", value: r } })
    }
  ), /* @__PURE__ */ a.createElement("label", { htmlFor: r }, r))), e.touched.grupoSanguineo && e.errors.grupoSanguineo ? /* @__PURE__ */ a.createElement("div", { className: l.required_input }, e.errors.grupoSanguineo) : null))), /* @__PURE__ */ a.createElement("div", { className: l["button-container"] }, /* @__PURE__ */ a.createElement(
    "button",
    {
      className: l["start-button"],
      type: "submit"
    },
    "Comienza a perder peso"
  ), i && /* @__PURE__ */ a.createElement(v, { values: e.values, onClose: () => n(!1) }))));
};
export {
  k as default
};
