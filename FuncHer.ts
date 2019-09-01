class Adder {
    //	This	function	is	now	safe	to	pass	around 
    add	= (b: string): string => {	
        return this.a + b;
    }
}
class ExtendedAdder extends	Adder {
    //	Create	a	copy	of	parent	before	creating	our	own				
    private	superAdd = this.add;
    //	Now	create	our	override
    add	= (b: string): string => {
        return	this.superAdd(b);
    }
}