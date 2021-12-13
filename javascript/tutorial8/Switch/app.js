console.log('Good morning')

//switch statement

// switch(condition){
//     case 1:
//         //action
//         break;
//     case 2:
//         //run action
//         break;
// }


// switch(90){
//     case 1:
//         console.log('incorrect')
//         break;
//     case 2:
//         console.log('incorrect')
//         break;
//     case 90:
//         console.log('incorrect 90')
//         break;
//     case 91:
//         console.log('incorrect')
//         break;
//     default:
//         console.log('default') 
// }

// switch ('intecbrussel'){
//     case 'microsoft':
//         console.log('microsoft');
//         break;
//     case 'IBM':
//         console.log('IBM');
//         break;
//     case ('intecbrussel'):
//         console.log('intecbrussel');
//         break;
//     default:
//         console.log('default');
// }


// var secret = 5

// switch(secret){
//     case 1:
//         console.log(secret);
//         break;
//     case 2:
//         console.log(secret);
//         break;
//     case 5:
//         console.log(true);
//         break;
//     case ('default'):
//         console.log('default');
// }


let today = new Date().getDay()

console.log(today);

switch(today){
    case 0:
        console.log('Zondag');
        break;
    case 1:
        console.log('Maandag');
        break;
    case 2:
        console.log('Dinsdag');
        break;
    case 3:
        console.log('Woensdag');
        break;
    case 4:
        console.log('Donderdag');
        break;
    case 5:
        console.log('Vrijdag');
        break;
    case 6:
        console.log('Zaterdag');
        break;
    case 'default':
        console.log('default');
}