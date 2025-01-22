// function returnFalse() {
//   return false;
// }
// function returnTrue() {
//   return true;
// }

// console.log(returnFalse() && returnTrue());

// 단락평가 활용 사례
function printName(person) {
  //   if (!person) {
  //     console.log("person에 값이 없음");
  //     return;
  //   }
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "박훈의" });
