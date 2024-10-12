function func() {
	// symbol without any parameter
	const sym1 = Symbol();

	// symbol with parameter
	const sym2 = Symbol(9);

	// symbol with string
	const sym3 = Symbol("GFG");

	console.log(sym1.toString());
	console.log(sym2.toString());

	// Type of symbol 1
	console.log(typeof sym1);

	// Check symbol is equal to "GFG" or not
	console.log(sym3.toString()===Symbol("GFG"));
}
func();