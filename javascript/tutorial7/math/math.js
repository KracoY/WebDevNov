//math objects
var result

result = Math.PI

//round
result = Math.round(5.6)

//power method()
result = Math.pow(3, 2)
result = Math.pow(9, 2)

//square method
result = Math.sqrt(64)

//sin and Cos

result = Math.sin(90 * Math.PI / 100);
result = Math.cos(0 * Math.PI)

//max()
result = Math.max(3, 6, 66, 99, 100, 111, 214, 999)

//min()
result = Math.min(3, 6, 66, 99, 100, 111, 214, 999)

//Random()
//0-1
//0-9
//0-10
//10-100
result = Math.random()
result = (Math.random() * 10)

function getRndIntegar(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}


let names = ['jack','mike','joe','michael']

// result = getRndInteger(1,100)
// let getRange = getRndInteger(0,3)
// console.log(getRange)
// result = names[getRange]
// let guessNumber=3
// guessNumber === getRange? console.log('correct'):console.log('incorrect')
result = Math.random()
let numberRandom =getRandom(0,3)
result = names[numberRandom]
console.log(result)

Math.floor(Math.random() * 6) + 1