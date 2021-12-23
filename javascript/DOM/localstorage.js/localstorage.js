/*

setitem()
getItem()
removeItem()
clear()
key()


*/

//localstorage

let name = 'jack'
let users = [1,2,3,4,5,6]
let people = [
    {
        id:1,
        username: 'root'
    },
    {
        id:1,
        username: 'root'
    },
    {
        id:1,
        username: 'root'
    }
]
localStorage.setItem('name',name)
//localstorage.setitem('numbers',users)
localStorage.setItem('numbers',JSON.stringify(users))

localStorage.setItem('people',JSON.stringify(people))
let result;

// from string to object
result = JSON.parse(localStorage .getItem('numbers'))

// string data type
result = localStorage.getItem('people')

// object data type
result=JSON.parse(localStorage.getItem('people'))

// result.foreach(user=>{
//     console.log(user);
// })

// console.log(result, typeof result)

window.addEventListener('DomContentloaded',(event)=>{
    console.log(localStorage.getItem('people'))
    let listoftodos = JSON.parse(localStorage.getItem('people'))
    listoftodos.forEach(todo=>{
        console.log(todo)
        document.querySelector('.result').innerHTML+=`<p className="display-1">${todo.username}</p>`
    })
})