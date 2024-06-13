export function getUserBirthYear(user) {
	const year = new Date().getFullYear;
	return year - user.age;
}
