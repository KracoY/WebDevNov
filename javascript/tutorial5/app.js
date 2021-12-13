// var message = document.getElementById('message')
// var getUserName=document.getElementById('username')

// console.log (message)
// console.log(getUserName)// input field
// message.innerHTML"Text has been changed"

// function SayMyName(){
//     console.log(getUserName.value)
//     message.innerHTML = `Your username is ${getUserName.value}`
// }

// //SayMyName()



// var number1=document.getElementById("num1")
// var number2 = document.getElementById('num2')
// var getbtn = document.getElementById('btn')
// var result = document.getElementById('result')


// function DoCalc(){
//     console.log('hello test');
//     var sumResult = Number(number1.value) + Number(number2.value)
//     console.log(sumResult)
//     result.innerHTML = `Result Is ${sumResult}`
// }


//local variables and global variables

//local variable


// function GetNumber(){
//     var companyName= 'intecbrussel'
//     console.log(companyName,'local variable')
// }
// GetNumber()

//Global variable

//var companyName = 'intecBrussel' //global variable

// function GetNumber(){
//     var company = 'intec' // local variable
//     console.log(companyName, 'global variable')
//     console.log(company, 'local varible')
// }
// GetNumber()



const Auto = {

    a:function(){
        console.log('hello')
    },
    b:function(){
        console.log('hello1')
    },
    c:function(){
        console.log('hello2')
    },
    getElementById : function(){
        console.log('getelementmethod')
    }
}


Auto.getElementById()
Auto.a()

const obj={
    a:1,
    b:'string a data',
    c: true,
    d: [1,2,3],
    e: {id: 1, title:'this is title'},
    f: function(){console.log('hello function')}

}

console.log(obj.e)
obj.f()




const AutoControler={
    turnleft: function (){result.innerHTML='Turn Left <i class="fas fa-arrow-circle-left"></i>'},
    turnRight: function (){result.innerHTML='Turn Right <i class="fas fa-arrow-alt-circle-right"></i>'},
    forward: function (){result.innerHTML='Go Forward <i class="fas fa-arrow-alt-circle-up"></i>'},
    backward: function (){result.innerHTML='Go Backwards <i class="fas fa-arrow-circle-down"></i>'},
}

AutoControler.turnleft()
AutoControler.turnRight()
AutoControler.forward()
AutoControler.backward()




