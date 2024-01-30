import e, { r as l } from "../../node_modules/react/index.jsx";
import { useReactTable as T } from "../../node_modules/@tanstack/react-table/build/lib/index.jsx";
/* empty css                                                         */import F from "../../images/Laves-calculator-desk.png.jsx";
import t from "./DiaryTable.module.css.jsx";
import { getCoreRowModel as H, getPaginationRowModel as k, getSortedRowModel as x } from "../../node_modules/@tanstack/table-core/build/lib/index.jsx";
const z = () => {
  l.useState(null);
  const [g, G] = l.useState((/* @__PURE__ */ new Date()).toLocaleDateString());
  l.useState("diario");
  const [c, h] = l.useState(0), [N, m] = l.useState(""), [S, d] = l.useState([]), [o, w] = l.useState([]), [i, u] = l.useState(null), [I, E] = l.useState(!1), [n, y] = l.useState([]), [v, b] = l.useState(null), [C, R] = l.useState(0);
  l.useEffect(() => {
    (async () => {
      try {
        const r = await (await fetch("/productos.json")).json();
        Array.isArray(r) ? (d(r), y(r)) : console.error("El archivo JSON debe ser un array de objetos.");
      } catch (s) {
        console.error("Error al cargar o procesar el archivo JSON", s);
      }
    })();
  }, []);
  const D = (a) => {
    u({
      title: a.title,
      grams: 0,
      calculatedData: 0,
      calories: a.calories
    }), b(a), E(!0), d(n), m("");
  }, P = () => {
    if (i) {
      const a = parseFloat(c) || 0, s = a * i.calories, r = {
        title: i.title,
        grams: a,
        calculatedData: s
      };
      w([...o, r]), h(0), m(""), E(!1), u(null), R((p) => p + s);
    }
  }, A = (a) => {
    const s = a.target.value.toLowerCase().trim();
    u(null), E(!1), m(s);
    const p = (s ? n.filter((M) => M.title.toLowerCase().includes(s)) : n).slice(0, 10);
    d(s !== "" ? p : n);
  }, f = e.useMemo(
    () => [
      {
        Header: "Alimento",
        accessor: "title"
      },
      {
        Header: "Gramos",
        accessor: "grams"
      },
      {
        Header: "Calculated Data",
        accessor: "calculatedData"
      }
    ],
    []
  );
  return T({
    columns: f,
    data: o,
    getCoreRowModel: H(),
    getPaginationRowModel: k(),
    getSortedRowModel: x()
  }), /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: t.container }, /* @__PURE__ */ e.createElement("div", null, o.length > 0 && /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("table", { className: t.table }, /* @__PURE__ */ e.createElement("tbody", null, o.map((a, s) => /* @__PURE__ */ e.createElement("tr", { key: s }, f.map((r) => /* @__PURE__ */ e.createElement("td", { key: r.Header }, a[r.accessor]))))))), /* @__PURE__ */ e.createElement("span", { className: t["fecha-Hoy"] }, g), /* @__PURE__ */ e.createElement("div", { className: t["search-and-grams"] }, /* @__PURE__ */ e.createElement("div", { className: t["search-container"] }, /* @__PURE__ */ e.createElement(
    "input",
    {
      className: t["input-search"],
      type: "text",
      placeholder: v ? v.title : "Ingresa el producto",
      value: N,
      onChange: A,
      style: { whiteSpace: "pre-line" }
    }
  ), N && S.length > 0 && /* @__PURE__ */ e.createElement("div", { className: t["input-search-container"] }, /* @__PURE__ */ e.createElement("ul", null, S.map((a, s) => /* @__PURE__ */ e.createElement("li", { key: s, onClick: () => D(a) }, a.title))))), /* @__PURE__ */ e.createElement("div", { className: t["add-grams-container"] }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      placeholder: c === 0 ? "Gramos" : "",
      value: c === 0 ? "" : c,
      onChange: (a) => h(a.target.value),
      className: t["barra-gramos"]
    }
  ), /* @__PURE__ */ e.createElement("button", { onClick: P, className: t["add-button"] }, "+"))))), /* @__PURE__ */ e.createElement("div", { className: t.bloque2 }, /* @__PURE__ */ e.createElement("p", { className: t.userName }, "Nic"), /* @__PURE__ */ e.createElement("button", { className: t["boton-salir"] }, "Salir"), /* @__PURE__ */ e.createElement("div", { className: t.resumen }, /* @__PURE__ */ e.createElement("h2", null, "Resumen para el ", /* @__PURE__ */ e.createElement("span", { id: "fechaHoy" }, g)), /* @__PURE__ */ e.createElement("div", { className: t["resumen-item"] }, /* @__PURE__ */ e.createElement("p", null, "Consumido"), /* @__PURE__ */ e.createElement("p", { className: t.valor }, C.toFixed(2) / 1e3, " Kcal")), /* @__PURE__ */ e.createElement("div", { className: t["resumen-item"] }, /* @__PURE__ */ e.createElement("p", null, "Daily Rate"), /* @__PURE__ */ e.createElement("p", { className: t.valor }, "000 Kcal")), /* @__PURE__ */ e.createElement("div", { className: t["resumen-item"] }, /* @__PURE__ */ e.createElement("p", null, "n% de lo normal"), /* @__PURE__ */ e.createElement("p", { className: t.valor }, "000 Kcal"))), /* @__PURE__ */ e.createElement("h2", { className: t.alimentos }, "Alimentos no recomendados"), /* @__PURE__ */ e.createElement("p", { className: t.dieta }, "Tu dieta se mostrará aquí"), /* @__PURE__ */ e.createElement("img", { src: F, alt: "Logo", className: t.leaves })));
};
export {
  z as default
};
