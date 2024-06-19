const neo = { name: "Neo" };
const evan = { name: "Evan", parent: neo };
const lewis = { name: "Lewis", parent: evan };
const amy = { name: "Amy", parent: lewis };

const getRootUser = (user) => {
	if (user.parent) {
		return getRootUser(user.parent);
	}
	return user;
};

console.log(getRootUser(amy));
