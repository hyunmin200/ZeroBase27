async function getMovies(movieName) {
	const res = await fetch(
		`https://omdbapi.com/?apikey=7035c60c&s=${movieName}`,
	);
	return await res.json();
}

const titles = ["frozen", "avengers", "avatar"];

// 배열 메소드 반복
// titles.forEach(async (title, index) => {
// 	const movies = await getMovies(title);
// 	console.log(`${index + 1} ${title}`, movies);
// });

// for 반복문
(async () => {
	let index = 1;
	for (const title of titles) {
		const movies = await getMovies(title);
		console.log(`${index + 1} ${title}`, movies);
		index += 1;
	}
})();
