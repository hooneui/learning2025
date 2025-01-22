// if 조건문 if문
let num = 11;

if (num >= 10) {
  //   console.log("num은 10 이상");
  //   console.log("조건이 참");
} else {
  //   console.log("조건이 거짓");
}

// 2. Switch문
// if문과 기능은 같으나 다수의 조건을 처리할때 유리

let animal = "bear";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("개");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  default: {
    console.log("그런 동물은 모름.");
  }
}
