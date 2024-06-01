let btnbb = document.querySelector('.bb')
let btnaa = document.querySelector('.aa')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let cartas = document.querySelector('.container .cartas')

btnbb.onclick = () => moveItemsOnClick('bb')
btnaa.onclick = () => moveItemsOnClick('aa')

function moveItemsOnClick(type){
    let listItems = document.querySelectorAll('.list .list-item')
    let cartasItems = document.querySelectorAll('.cartas .cartas-item')

    if(type === 'bb'){
        list.appendChild(listItems[0])
        cartas.appendChild(cartasItems[0])
        container.classList.add('bb')
    } else {
        list.prepend(listItems[listItems. length - 1])
        cartas.prepend(cartasItems[listItems. length - 1])
        container.classList.add('aa')
    }

    setTimeout(() => {
        container.classList.remove('bb')
        container.classList.remove('aa')
    }, 3000);




}
