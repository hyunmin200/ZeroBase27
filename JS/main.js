// 이행과 거부, 예외 처리

//매개 변수
// resolve - 약속을 이행하는 함수(정상 처리)
// reject - 약속을 거부하는 함수(에러 상황)

// 용어 정리
// Pending - 약속이 이행되거나 거부되기 전 상태
// Fulfilled - 약속이 이행된 상태
// Rejected - 약속이 거부된 상태
function loadImage(src) {
	// Pending...
	return new Promise((resolve, reject) => {
		if (!src) {
			reject(new Error("이미지 경로가 필요해요")); // Rejected
		}
		const imgEl = document.createElement("img");
		imgEl.src = src;
		imgEl.addEventListener("load", () => {
			resolve(imgEl); // Fulfilled
		});
		imgEl.addEventListener("error", () => {
			reject(new Error("이미지를 불러올 수 없어요")); // Rejected
		});
	});
}

// .then() /.catch() /.finally()
// - 약속이 이행되었을 때 호출(then)하거나,
// - 약속이 거부되있을 때 호출(catch)하거나,
// - 이행 및 거부와 상관없이 항상 호출(finally)하는 메소드를 제공할 수 있습니다.
loadImage("https://picsum.photo/300")
	.then((imgEl) => {
		document.body.append(imgEl);
	})
	.catch((error) => {
		console.log(error.message);
	})
	.finally(() => {
		console.log("Done");
	});

// try / catch / finally
// - 에러(예외)가 발생할 수 있는 코드의 실행을 시도(try)하고,
// - 에러가 발생하면 시도를 종료해 에러를 잡아내며(catch),
// - 에러 여부와 상관없이 항상 실행(finally)하는 코드를 정의할 수 있습니다.
(async () => {
	try {
		const imgEl = await loadImage("https://picsum.photo/300");
		document.body.append(imgEl);
	} catch (error) {
		console.log(error.message);
	} finally {
		console.log("Done!");
	}
})();
