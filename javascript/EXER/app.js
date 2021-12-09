
let usernames = [
    {
        username: "Ender",
        role: "admin",
        password: "Ender01"
    },
    {
        username: "Atilla",
        role: "admin",
        password: "Atilla02"
    },
    {
        username: "Sameer",
        role: "admin",
        password: "Sameer03"
    },
    {
        username: "Khaled",
        role: "user",
        password: "Khaled04"
    },
    {
        username: "Romeo",
        role: "user",
        password: "Romeo05"
    },
    {
        username: "Fatema",
        role: "admin",
        password: "Fatema06"
    },
    {
        username: "Mahmout",
        role: "user",
        password: "Mahmout07"
    },
    {
        username: "Bart",
        role: "user",
        password: "Bart08"
    },
    {
        username: "Osman",
        role: "user",
        password: "Osman09"
    },
    {
        username: "An",
        role: "user",
        password: "An10"
    },
]

var userinput = document.getElementById("username")
var pass = document.getElementById("password")
var btn = document.getElementById("button")


function userCheck(){
    console.log(userinput.value,pass.value)
    usernames.forEach(function (user) {
        if(user.username == userinput.value && pass.value == user.password && user.role == "admin"){
            alert(`Welcome admin ${userinput}`)
            console.log(`Welcome admin ${userinput}`)
        }else if(user.username == userinput.value && pass.value == user.password && user.role == "user"){
            alert(`Welcome user ${userinput}`)
            console.log(`Welcome user ${userinput}`)
        }else{
            alert("e-mail and or password is wrong")
            console.log("e-mail and or password is wrong");
        }
    })
}
