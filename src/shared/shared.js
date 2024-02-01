function r(o, l, t) {
  return o.filter((e) => e.groupBloodNotAllowed[l] === t);
}
export {
  r as filterObjectsByGroupBloodNotAllowed
};
