/*
Number()
parseInt()
tofixed()
isFinite()
*/

var result;
var laptop_price = 299.45564567

result = Number("10"); //Convert it to number
result = parseInt("11") //Convert it to number
result = parseFloat('10.4') //convert is to float number
result = isFinite('hello') //returns true if data is number / else it is false
result = laptop_price.toFixed(2)
result = laptop_price.toFixed(6)
console.log(result)