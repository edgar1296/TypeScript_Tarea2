function* generator() {
    var bar = yield 'Console log';
    console.log(bar); // 'Un testo inyectado' -> asignado por nextThing = iterator.next('bar')
    yield 1;
}.
const iterator = generator();
// Start execution till we get first yield value
const foo = iterator.next();
console.log(foo.value); // Console log
// Resume execution injecting bar
const nextThing = iterator.next('Un texto inyectado'); // Aqui se le asigna el value al foo.value
console.log(nextThing);