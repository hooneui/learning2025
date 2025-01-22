// 스코프 Scope
// 전역 / 지역
// 전역 : 전체 영역에서 접근 가능
// 지역 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(b);
}

funcA();

if (true) {
  let c = 3;
}

for (let i = 0; i < 10; i++) {
  let d = 4;
}
