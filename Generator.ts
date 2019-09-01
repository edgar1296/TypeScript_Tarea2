function* generator() {
    try {
        yield 'foo';
        throw Error("Test");
    }
    catch(err) {
    console.log(err.message); // bar!
    }
}
var iterator = generator();
// Start execution till we get first yield value
var foo = iterator.next();
console.log(foo.value);
// como está comentado la excepción no se ejuta ya que no hay un 'next()'
//var foo = iterator.next();