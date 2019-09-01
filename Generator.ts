function* idMaker() {
    let index = 0;
    while (index < 3)
        yield index++;
}
let gen = idMaker();
console.log(gen.next()); // { value: 0, done: false }
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: undefined, done: true }
// Accede a la variable por que se le ha dicho apesar de que el 'yield' no ha sido efectuado.
    