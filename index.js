import e from "./node_modules/react/index.js";
import { createRoot as t } from "./node_modules/react-dom/client.js";
import { BrowserRouter as r } from "./node_modules/react-router-dom/dist/index.js";
import o from "./components/App.js";
const m = t(document.getElementById("root"));
m.render(
  /* @__PURE__ */ e.createElement(e.StrictMode, null, /* @__PURE__ */ e.createElement(r, null, /* @__PURE__ */ e.createElement(o, null)))
);
