let result = document.querySelector("#result")
let increase =document.querySelector("#btnI")
let decrease = document.querySelector("#btnD")
let reset = document.querySelector("#btnX") 
let count = 0


increase.addEventListener('click', function(){
    count++
    result.innerHTML=count

})

decrease.addEventListener('click', function(){
    count--
    result.innerHTML =count
    localStorage.setItem(`${count}`)
})

reset.addEventListener('click',function(){
    count= 0
    result.innerHTML=`${count}`
})



console.log({count});