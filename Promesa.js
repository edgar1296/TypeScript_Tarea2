function iReturnPromiseAfter1Second() {
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve("Hello world!"); }, 1000);
    });
}
Promise.resolve(123)
    .then(function (res) {
    // res is inferred to be of type `number`
    return iReturnPromiseAfter1Second();
})
    .then(function (res) {
    // res is inferred to be of type `string`
    console.log(res); // Hello world!
});
