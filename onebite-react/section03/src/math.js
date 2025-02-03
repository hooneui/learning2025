// math 모듈

export function add(a, b) {
  return a + b;
}
export function sub(a, b) {
  return a - b;
}

//중괄호 없이 불러옴
export default function multiply(a, b) {
  return a * b;
}

// common js
/* 
  module.exports = {
  add: add,
  sub: sub,
};
 */

// es모듈 시스템
// export { add, sub };
