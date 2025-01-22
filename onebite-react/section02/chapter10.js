// 1. Date 객체를 생성하는 방법
let date1 = new Date();
let date2 = new Date(1979, 3, 20, 25, 12, 12);
// console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값.
let ts1 = date1.getTime();
// console.log(ts1);
let date4 = new Date(ts1);
// console.log(date1, date4);

// 3. 시간 요소를 추출하는 방법

// 4. 시간 수정하기

// 5. 시간을 여러 포맷으로 출력하기
// 날짜만, 현지화된 표시.
