function funcName() {

}
function funcName1(param1, param2, param3) {
    console.log(param1, param2, param3)
}

funcName1('string', 44, [1, 2, 3])

/*function sumofnumberq(){
    var a = 5
    return
}

console.log(sumofnumbers()) */

function sumofnumberq() {
    return 5 + 5
}


//var number1 = 20
//var number2 = 20

// function sumOfnumbers() {
//     return number1 + number2
// }


// function sumOfnumbers(p1,p2){
//     return p1+p2
// }

// function sayMyName(username){
//     return `Hello your name is ${username}`
// }

// var myStudents = [ 'jack','mike','george']

// function getStudentsName(getData){
//     getData[0] = 'Khaled'
//     console.log(getData[0])
// }

// getStudentsName(myStudents)
// console.log(myStudents,'original array')




// function Layer1(number1){
//     console.log("This is from Layer1 function",number1)

//     function Layer2(){
//         console.log(number1+1,'Layer2 function')
//     }
//     Layer2()
// }


// Layer1(5)




// var myName = 'root'

// function keeper1(param){
//     return param;
// }

// function keeper2(param){
//     // param was root
//     //'your name is root'
//     return `Your name is ${param}`
// }

// function printService(param){
//     console.log(param)
// }

// printService(keeper2(keeper1(myName)))



// var myStudents = []

// function addStudents(name){
//     return myStudents.push(name)
// }


// addStudents('Khaled')
// addStudents('Ender')
// addStudents('Romeo')
// console.log(myStudents)



var myStudents = []

function addStudent(student) {
    return myStudents.push(student)
}

const student_1 = {
    name: 'Mahmoud',
    age: 28
}
const studen_2 = {
    name: "Ender",
    age: 22
}

addStudent(student_1)
addStudent(studen_2)

console.log(myStudents)


//function params:brutosalary, tax




// let getNettoSalary =  (2600*30)/100 //exact tax amount
// console.log(2600-getNettoSalary)

function getNettoSalary(bruto, tax) {

    let taxamount = (bruto * tax) / 100 //tax amount 500
    //console.log(taxamount)

    return bruto - taxamount //
}

console.log(getNettoSalary(2600, 30))
console.log(getNettoSalary(265400, 30))
console.log(getNettoSalary(1800, 25))



function verbruik(km, liter) {

    let gemidel = (km / 10)
    return liter / gemidel
}

//console.log(verbruik(750,50))










// var mySalary = 2000;
// var taxprecent = 20;
// var tax = 100 - taxprecent;
// var taxFinal = tax / 100;
// var result = mySalary * taxFinal;
// console.log(result)