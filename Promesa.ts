Promise.reject(new Error('something	bad	happened'))
    .then((res) => {
        console.log(res);	//	not	called
        return	456;
    })
    .then((res)	=> {
        console.log(res);	//	not	called
        return	Promise.resolve(123);
    })
    .then((res) => {
        console.log(res);	//	not	called
        return	Promise.resolve(123);
    })
    .catch((err) => { 
        console.log(err.message);	//	something	bad	happened
    });