var a = -4.5;
var b = 7;
var value = (a * a) + (2 * a * b) - (b * b)
console.log(value)

if (value > 0) {
	console.log('wynik jest dodatni')
}
else if (value == 0) {
	console.log('wynik rowny jest 0')
}
else {
	console.log('wynik jest ujemny')
}