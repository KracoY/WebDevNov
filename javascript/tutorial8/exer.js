let users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        }
    }
]

for (let id = 0; id < users.length; id++) {
    let obj = users[id]
    // console.log(obj.name, obj.username);
    // console.log(obj.email);
    // console.log(`${obj.address.street} ${obj.address.suite} ${obj.address.city}, ${obj.address.zipcode}`);
    if (obj.username === "Samantha") {
        console.log(obj.name, obj.username);
        console.log(obj.email);
        console.log(`${obj.address.street} ${obj.address.suite} ${obj.address.city}, ${obj.address.zipcode}`);
    }else{
        console.log("Hello world");
    }
}

function getSingleUser(username){
    for (let i=0; i<users.length;i++){
        let obj = users[i];
        if(obj.username === username){
            console.log(`Fullname: ${obj.name}\nEmail: ${obj.email}\nAddress: ${obj.address.street}, ${obj.address.suite}, ${obj.address.city}, ${obj.address.zipcode}`);
        }else{
            console.log('not found');
        }

    }
}

