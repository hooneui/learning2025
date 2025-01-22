// 함수 선언
function greeting() {
  console.log("안녕하세요");
}
// greeting();

function getArea(width, height) {
  //   let width = 10;
  //   let height = 20;
  function another() {
    console.log("another");
  }
  another();

  let area = width * height;
  return area;

  //   console.log(area);
}

let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(20, 30);
console.log(area2);

// getArea(10, 20);
// getArea(30, 40);
