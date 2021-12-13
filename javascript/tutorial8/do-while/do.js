// i=0

// do{
//     console.log(i);
//     console.log('hello');
//     i++;
// }while(i<0) //false

// while(i<0){ //false
//     console.log(i,'hello while');
//     i++;
// }



// var randomNumber

// do{
//     randomNumber = Math.floor(Math.random()*100);
//     console.log(randomNumber);
// }while(randomNumber==50)



// var number;
// var sum=0
// do{
//     number=Number(prompt('Enter a number'))
//     sum +=number;
//     console.log('Sum Result' ,sum);

// }while(false)



var password = "123456"
var ratelimit =3;

while(ratelimit>0){
    var askPassword = prompt('Enter your Password!')
    ratelimit--;
    if(askPassword == password){
        console.log('Welcome user!')
        break;
    }else{
        console.log(`You've ${ratelimit} attempts left.`);
    }
}