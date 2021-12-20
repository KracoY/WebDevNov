// //get element by id

let value;

// value = document.getElementById('todo-form')

// //value.innerHTML='test'


// //getelementbyTagName
// value = document.getElementsByTagName('input') // return HTML collection

// value = document.getElementsByTagName('*')
// // value.forEach(el=>){
// //    vonsole.log(el)
// //}

// value = Array.from(value)


// // function ForEachFunctn (el){
// //     console.log(el)
// //     el.remove()
// // }
// // value.forEach(ForEachFunctn)

// // console.log(value);

// value = document.getElementsByClassName('card-body')
// value = document.getElementsByClassName('*')



// // querry selector

// value = document.querySelector('.card-header') //return single element. it takes the first 

// // querry selectorAll

// value = document.querySelectorAll('.card-header')

// value= array.forEach(element => {
//     console.log(el);    
// });

value = document.querySelectorAll('.card-header')

const [first, second, third] = document.querySelectorAll('.card-header')

// console.log(first, second, third)



//createElement()
value = document.createElement('p')
value.className = "lead text-danger bg-dark font-weight-bold "
value.innerHTML = "This is test paragraph"
third.appendChild(value)


// custom function for create element
let elGen = t => document.createElement(t)

value = elGen('div')
value = elGen('a')
value.href = "google.com";
value.innerHTML = "click google";

value = findAll('.delete-item') // return nodelist

value.forEach(btn => {
    console.log(btn)
    btn.addEventListener('click',function(e){
        e.preventDefault();
        //click actions
        console.log('hello click!!!');
        alert(1)
    })
})



//value = findAll('div')
//console.log(value);