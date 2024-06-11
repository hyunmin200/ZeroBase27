// 'new Date()'를 통해서 반환된 인스턴스를 '타임 스탬프(timestamp)'라고 한다.
let date = new Date();
console.log(date); // 현재 날짜가 나옴 (타임 스탬프)

// 우리가 원하는 날짜로 생성 할 수도 있다.
date = new Date(2006, 4, 8, 0, 0, 0);
console.log(date);

// 타임 스탬프에서 각 정보를 얻을 수 있다.
console.log(date.getFullYear);
console.log(date.getMonth + 1); // 1~12가 아닌 0~11을 반환함
console.log(date.getDate);
console.log(getDayKo(date.getDay)); // 애도 0부터 시작해서 일요일 = 0 토요일 6이다. (함수 만드는 것도 좋은 선택)
console.log(date.getHours);
console.log(date.getMinutes);
console.log(date.getSeconds);

function getDayKo(day) {
	switch (day) {
		case 0:
			return "일요일";
		case 1:
			return "월요일";
		case 2:
			return "화요일";
		case 3:
			return "수요일";
		case 4:
			return "목요일";
		case 5:
			return "금요일";
		case 6:
			return "토요일";
	}
}
