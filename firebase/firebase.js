import "../node_modules/firebase/app/dist/esm/index.esm.js";
import { o } from "../node_modules/@firebase/auth/dist/esm2017/index-dd468b12.js";
import { initializeApp as m } from "../node_modules/@firebase/app/dist/esm/index.esm2017.js";
import "../node_modules/@firebase/logger/dist/esm/index.esm2017.js";
import { getFirestore as t } from "../node_modules/@firebase/firestore/dist/index.esm2017.js";
const a = {
  apiKey: "AIzaSyCIM2XWcTfmJC3Wj78_ggjvCvluBJIN5oc",
  authDomain: "slimmom-379b2.firebaseapp.com",
  projectId: "slimmom-379b2",
  storageBucket: "slimmom-379b2.appspot.com",
  messagingSenderId: "840004182207",
  appId: "1:840004182207:web:b33d32d273d93ea036e60a",
  measurementId: "G-E99C49V04E"
}, e = m(a), d = o(e);
t(e);
export {
  d as auth,
  e as default
};
