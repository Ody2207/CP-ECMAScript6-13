const anotherFuction = () => {
	return new Promise((resolve, reject) => {
		if (false) {
			resolve('hey!');
		} else {
			reject('Uhhh!');
		}
	})
}

anotherFuction()
	.then(response => console.log(response))
	.catch(err => console.log(err));