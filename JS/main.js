// fetch(url, options)
// options.method: 요청 종류(GET, POST, PUT, DELETE 등)
// options.headers: 요청 메타 정보
// options.body: 요청 데이터
fetch("https://api.heropy.dev/v0/users", {
	method: "POST",
	headers: {
		"Context-Type": "application/json",
	},
	body: JSON.stringify({
		name: "황현민",
		age: 19,
	}),
})
	.then((res) => res.json())
	.then((data) => console.log(data));
