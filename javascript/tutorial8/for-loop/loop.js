// for (let i=0;i<9999999999;i++){
//     console.log('hello',i);
// }

//function printEvenNumber(number){

//}


// for (let i=1; i<50; i++){
//     console.log('Hello world');
// }


// function printEvenNumber(number){
//     for(let i=1; i<number; i++){
//         if(i % 2===0){
//             console.log(i);
//         }
//     }
// }


//infinit -
// for(let i=0; i<50; i--){
//     console.log(i);
// }


// for(let i=10; i>=0; i--){
//     console.log('hello' ,i);
// }



// let x,y
// for(x=1,y=50; x<=10 && y>=50; x++){
//     console.log(`x:${x}\ny:${y}`);
// }



// for(x=9; x<=10;x++){
//     for(y=1; y<=10;y++) {
//         let result = `${x} + ${y} = ${x+y}`
//         console.log(result);
//     }
// }



// let arraylist = ['ali', 'veli', 'deli'];
// console.log(arraylist.length);
// for (let x = 0; x < arraylist.length; x++) {
//     console.log(x);
//     console.log(arraylist[x]);
// }



let posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
        "userId": 1,
        "id": 6,
        "title": "dolorem eum magni eos aperiam quia",
        "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
    {
        "userId": 1,
        "id": 7,
        "title": "magnam facilis autem",
        "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    },
    {
        "userId": 1,
        "id": 8,
        "title": "dolorem dolore est ipsam",
        "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
        "userId": 1,
        "id": 9,
        "title": "nesciunt iure omnis dolorem tempora et accusantium",
        "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    }
]

for (let x = 0; x < posts.length; x++) {
    let obj = posts[x]
    console.log(obj.title);
}



// let answer = 1;
// for(let x=4; x>=1;x--){
//     answer = answer*x
//     console.log(answer,'in for');
// }
// console.log(answer,'global scope');



// function getFactrial(n){                  //did not understand
//     let answer = 1;
//     for(let x=n; x>=1; x--){
//         answer=answer*x
//     }
// }

// let count = 0;
// for (let i=0; i<100; i++){
//     console.log(i);
//     count = (count+i)
// }
// console.log(count);