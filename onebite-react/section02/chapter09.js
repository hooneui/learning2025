// 5가지의 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "박훈의", hobby: "캠핑" },
  { name: "홍길동", hobby: "캠핑" },
  { name: "아이유", hobby: "노래" },
];

/* 
const campingPeople = arr1.filter((item) => {
  if (item.hobby === "캠핑") return true;
});
 */
const campingPeople = arr1.filter((item) => item.hobby === "캠핑");

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx, arr) => {
  return item * 2;
});

let names = arr1.map((item) => item.name);

// 3. sort
// 정렬
let arr3 = [10, 4, 3];
arr3.sort((a, b) => {
  if (a > b) {
    // b가 a앞에
    return 1;
  } else if (a < b) {
    // a가 b앞에
    return -1;
  } else {
    // 값이 같을 경우 그대로
    return 0;
  }
});
// console.log(arr3);

// 4. toSorted (최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "hooneui"];
const joined = arr6.join(" ");

console.log(joined);
