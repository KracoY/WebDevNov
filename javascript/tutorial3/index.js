// equal to operator "=="
result = 1 == 1 // true
result = 1 == 1 // false
result = 1 == "1" // number or string dos not mather 1 stays 1
result = "intec" == "intec" // true
result = "Intec" == "intec" // false
result = true == true // true
result = false == false // true
result = false == true // false
result = true == false // false
result = [] == []
result = ['1'] == ['1'];
result = {} == {}
result = null == null
result = undefined == undefined
result = undefined == null


//equal value and equal data type "==="
result = 1 === 1 //true
result = 1 === "1"// false, it is the same but it is not the same data type
result = undefined === undefined //true
result = undefined === null //false
result = [] === [] //false
result = "intec" === "intec" //ture
result = "INTEC" === "Intec" //false
result = true === true //true
result = false === false //true
result = false === true //false
result = true === false //false


//not equal to => "!="
result = 1 != 1; //false
result = 1 != 2; //ture
result = 1 != "1"//false
result = 1 !== "1"//true
result = "intec" != "Intec" //ture
result = [] != [] //true
result = [1] != [1] //true
result = {} != {} //true
result = function () { } != function () { } //true

var myfunc = () => console.log('hello') //arrow function
var myfunc1 = function () { console.log('hello') } //function

result = myfunc != myfunc1 // not equal ==> true

var a = 10
var b = '10'

result = a == b //true
result = a === b //false
result = a != b //false
result = a !== b //true
result = undefined == 0 //false
result = undefined == null //ture
result = undefined === null //false


// greater than operator ">"
result = 5 > 6 //false
result = 0 > 0 //false
result = -10 > 10 //false

// var sudentAge = 29

// if(studentAge > 29){
//     console.log("hello")
// }


// less than operator "<"
result = 6 < 3 //false
result = 2.5 < 3//true
//true = 1 / false = 0
result = false < true //true


// greater than or equal to operator

result = 5 >= 6 //false
result = 6 >= 6 //true
result = 6 >= "6" //true
result = true >= false //true
result = undefined >= null //false


// less than or equal to operator "<="

result = 10 <= 9 //false
result = 9 <= 10 //true
result = 9 <= 9 //true
result = 9 <= "9" //true
result = null <= null//true

var myarr = [1, 2, 3, 4, 5, 6]
var myarr1 = [1, 2, 3, 4, 5, 6, 7, 8]
// myarr.length = 6
// myarr1.length = 8

result = myarr1.length <= myarr.length

result = myarr1.length


// logical operator

// and operator "&&"

result = 11 > 10 && 9 < 8 //false
result = 10 < 9 && 1 == 1 //false
result = 1 == 1 && 10 > 9 && true == true //true
result = "" == "" && null == null //true
result = "" == "" && null === undefined //false


// or operator "||"
result = 1 === 1 || 10 > 100 //true
result = 1 != 10 || 1 > 10 //true
result = 1 > 10 || 10 > 100 //false


//NOT operator "!"

result = !(1 == 1) //false
result = !(1 > 10) //true

result = (true == true) === (false == false) // true
result = !(true == true) === (false == false) // false


// ternary operator
result = 1 == 1 ? 'yes' : 'no'
result = 10 < 1 ? 'INTEC' : 'BRUSSEL'
result = "computer" === "computer" ? 'yes it is true' : 'no it is not'
result = "computer" === "laptop" ? 'yes it is true' : 'no it is not'


/*
his age is under 18
*/
var age = 18
var permit = "yes"
var nPermit = "no"

var age1 = 16

result = age >= "18" ? 'Yes he can drink alcohol' : 'no he can not drink alcohol'
//result1 = age1 >= "18" ? 'Yes he can drink alcohol' : 'no he can not drink alcohol'

result = "18" <= age && permit == "yes" ? 'Yes this person can drive a car' : 'No this person can not drive a car'
// result1 =  "18" <= age && nPermit == "yes" ? 'Yes this person can drive a car' : 'No this person can not drive a car'

result = 1 === 2 ? (2 === 3 ? 'yes' : 'no') : 'false'


var student = [{
    name: 'Jack',
    age: 18
},
{
    name: 'ender',
    age: 22,
},
{
    name: 'Bob',
    age: 5
},
{
    name: 'Jan',
    age: 35
},
{
    name: 'Dirk',
    age: 65
}]

console.log(student[3])
result = student[3].name != undefined ? (student[3].age >= 18 ? 'He is allowed to drink alcohol' : 'he is not allowed') : 'He is not allowed';


// if else condition

if (1 === 1) {
    console.log('hello world')
}

if (student[0].name === 'Jack' && student[0].age >= 18) {
    console.log('True!!!')
}

if (student[0].age >= 18 && student[0].age <= 30) {
    // 18-30
    console.log('Young man!')
}

console.log(student.length)
console.log(result)
// console.log(result1)