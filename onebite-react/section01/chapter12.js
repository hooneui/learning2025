function funcA() {
  //   console.log("func A");
}

let varA = funcA;
// console.log(varA);
varA();

let varB = function () {
  //   console.log("func B");
};
varB();

// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};
console.log(varC(10));
