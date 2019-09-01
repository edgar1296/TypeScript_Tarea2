function Person(age) { 
    this.age = age
    // aquí el this es el objeto y no quien hace la llamada
    this.growOld = () => { // fat arrow remplaza la palabra reservada function
        this.age++;
    }
}
var	person = new Person(1);
setTimeout(person.growOld,1000);
setTimeout(function() {console.log(person.age); },2000);	//	devuelve 2
