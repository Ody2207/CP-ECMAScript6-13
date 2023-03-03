// enahced objects literals

function user(user, age, coutry, uid) {
	return {
		user,
		age,
		coutry,
		id: uid
	}
}

console.log(user('Rodrigo', 18, 'MX', 12));