// 1. 객체

let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

let person = {
  name: "박훈의",
  age: 40,
  hobby: "캠핑",
  "sub job": "부업",
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
// console.log(name);
let age = person["age"];
// console.log(age);

let property = "hobby";
let hobby = person[property];
// console.log(hobby);

// 3.2 새로운 프로퍼티를 추가
person.job = "FE DEV";
person["favFood"] = "SUOP";

// 3.3 프로퍼티 수정
person.job = "designer";
person["favFood"] = "candy";

// 3.4 프로퍼티 삭제
delete person.job;
delete person["favFood"];

// 3.5 프로퍼티의 존재 유무 확인방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;

console.log(result2);
