const anotherFuction = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			resolve('hey!');
		} else {
			reject('Uhhh!');
		}
	})
}

anotherFuction()
	.then(response => console.log(response))
	.catch(err => console.log(err))
    .finally(() => console.log('finally'));