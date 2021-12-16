/*let people=[
    {
        name:"ender",
        age:22
    },
    {
        name:"joe",
        age:22
    },
    {
        name:"haktan",
        age:22
    },
    {
        name:"dirk",
        age:22
    },
    {
        name:"Atilla",
        age:22
    }
]*/

// for(singleobject in people){
//     people[singleobject].age=99
//     people[singleobject].name = people[singleobject].name.toLocaleUpperCase()
//     console.log(people[singleobject]);   
// }



// //for of

for (let person of people){
    console.log(person,'for of');
}

for(let letter of school){
    console.log(letter);
}

let student1 = {
    id:1,
    name:'joe dalton'
}

for(let val in student1){
    console.log(val);
    console.log(student[val]);
}


