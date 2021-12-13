
let usernames = [
    {
        username: "E",
        role: "admin",
        password: "E1"
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
var wel = document.getElementById("welcome")

function userCheck(){
    console.log(userinput.value,pass.value)
    usernames.forEach(function (user) {
        if(user.username == userinput.value && pass.value == user.password && user.role == "admin"){
            wel.innerHTML= `Welcome admin ${userinput}`;
            console.log(`Welcome admin ${userinput}`)

        }else if(user.username == userinput.value && pass.value == user.password && user.role == "user"){
            wel.innerHTML = `Welcome user ${userinput}`;
            console.log(`Welcome user ${userinput}`)
        }else{
            //alert("e-mail and or password is incorrect")
            console.log("e-mail and or password is incorrect")
            wel.innerHTML = "e-mail and or password is incorrect";
        }
    })
}

