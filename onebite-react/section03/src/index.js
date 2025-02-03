// common js
/* 
const moduleData = require("./math");
console.log(moduleData.add(1, 2));
console.log(moduleData.sub(1, 2));
// console.log(moduleData);

const { add, sub } = require("./math");
console.log(add(1, 2));
console.log(sub(1, 2));
 */

// es모듈 시스템
// import multiply from "./math.js";
// import { add, sub } from "./math.js";

// 간소화
import multiply, { add, sub } from "./math.js";
// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(multiply(2, 3));

// 라이브러리 추가
import randomColor from "randomcolor";
const color = randomColor();
console.log(color);
