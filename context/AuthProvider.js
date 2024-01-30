import g, { r } from "../node_modules/react/index.js";
import { auth as n } from "../firebase/firebase.js";
const h = r.createContext();
function A({ children: u }) {
  const [o, s] = r.useState(null), [i, a] = r.useState(!0);
  function c(e, t) {
    return n.createUserWithEmailAndPassword(e, t);
  }
  function l(e, t) {
    return n.signInWithEmailAndPassword(e, t);
  }
  function d() {
    return n.signOut();
  }
  r.useEffect(() => n.onAuthStateChanged((t) => {
    s(t), a(!1);
  }), []);
  const f = {
    currentUser: o,
    signup: c,
    login: l,
    logout: d
  };
  return /* @__PURE__ */ g.createElement(h.Provider, { value: f }, !i && u);
}
export {
  A as AuthProvider
};
