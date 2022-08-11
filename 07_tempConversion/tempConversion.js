const ftoc = function(f) {
  let c = (f - 32) * 5 / 9;
  c = Math.round(c * 10) / 10;

  // console.log(c);
  return c
};

const ctof = function(c) {
  let f = c * 9 / 5 + 32;
  f = Math.round(f * 10) / 10

  // console.log(f);
  return f
};

// ftoc(32);
// ctof(73.2);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
