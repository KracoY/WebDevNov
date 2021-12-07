// var names = ['jack', 'ender', 'mike'];

// var uiList =document.getElementById('namelist')

// names.forEach(function(x){
//     console.log(x) // acces
//     uiList.innerHTML += `<li>${x}</li>`
// })


//some method
// var myArrayList= [1,2,3,4,5,6,7,8,9]

// rresult = myArrayList.some(function(n){
//     return n >=9 //true //false
// })

// var randomNumbers = [5,6,10,55,33,66,88,99]
// var userGuess

// var guess = randomNumbers.some(function(n){
//     return n===userGuess
// })

// guess ? console.log('you won'):console.log('try again')


//every method
// let numbers = [77, 77, 77, 77, 77]
// let _numbers = [66, 55, 77]

// result = numbers.every(function (value) {
//     return value === 66
// })

// //map array
// result = numbers.map(function (val) {
//     return val
// })

// //filter method
// result = numbers.filter(function (val) {
//     return val >= 66
// })



var student = [
    {
        id: 1,
        name: 'jack',
        course: 'javascript',
        score: 45
    },
    {
        id: 1,
        name: 'jack',
        course: 'python',
        score: 60
    },
    {
        id: 1,
        name: 'jack',
        course: 'HTML',
        score: 70
    },
    {
        id: 1,
        name: 'jack',
        course: 'C#',
        score: 65
    },
    {
        id: 1,
        name: 'jack',
        course: 'ruby',
        score: 80
    }
]


// result = students.filter(function (x) {
//     return x.course === 'javascript'
// })

// result = student.filter(function (x) {
//     return x.name === jack
// })

function findWhoPassedExam(param){
    //filter
    let result = param.filter(function(vallue){
        return vallue.score >=50 //if student score is greater than or equal to 50
    })
    return result //new aaray list created here
}
console.log(findWhoPassedExam(student))


//includes method
var myNumbers = [3,4,5,6,7,8,9,44,55,5,4,4567,23,356]
//result = myNumbers.includes(7)

function isNumberExist(number){
    let result= myNumbers.includes(number)
    if(result){
        console.log('this exists')
    }else{
        console.log('this does not exist')
    }
}

function isNumberExist(number){
    let result = myNumbers.includes(number)
    if(result){
        console.log('This number is in array')
    }else{
        console.log('This number is not in array')
    }
}
isNumberExist(5)


//reverse method
result= myNumbers.reverse()



//result.length !=0 console.log(result):console.log('not found')
//console.log(result.length)


