// createElement

let h1 = document.createElement('h1');
h1.textContent = 'INTECBRUSSEL';

let cardColumns = document.querySelector('.card-columns')


console.log(cardColumns.childNodes)
cardColumns.insertBefore(h1, cardColumns, childNodes[3])
// cardColumns.insertBefore(h1, cardColumns,childNodes[6])

//append
cardColumns.append("<h1>hello</h1>")
cardColumns.append(h1)

//prepend()
cardColumns.prepend(h1)



// insertAdjanceHTML
cardColumns.insertAdjacentHTML('beforebegin', '<h1> hello hello</1>')
cardColumns.insertAdjacentHTML('afterbegin', '<h1> hello hello</1>')
cardColumns.insertAdjacentHTML('beforeend', '<h1> hello hello</1>')
cardColumns.insertAdjacentHTML('afterend', '<h1> hello hello</1>')

//clonenode

let cardTemplate = cardColumns.firstElementChild
console.log(cardTemplate);