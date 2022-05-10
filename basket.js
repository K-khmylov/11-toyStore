'use strict';

let busket = document.getElementById('busket');
let plusToBusket = document.querySelectorAll('.plus_to_busket');
let busketBlock = document.getElementById('busket_block');

let busketInner = busket.innerHTML
let busketNum = Number.parseInt(busketInner)
let busketStr = String(busketNum);

function addBusket(activeImg){
    busketBlock.classList.add('active')
    activeImg.classList.add('active');
    setTimeout(() => {
        busketBlock.classList.remove('active');
        activeImg.classList.remove('active')
    }, 2000);
}

function fly(img){
    img.classList.add('fly');
    setTimeout(() => {img.classList.remove('fly')}, 1998)
}

plusToBusket.forEach((button) => {
    button.addEventListener('click', () => {
        busketNum += 1;
        busketStr = String(busketNum);
        busket.innerHTML = busketStr;
        if(busketNum === 10){
            alert("Корзина переполнина")
            plusToBusket.disabled = 'true'
        }
        const parent = button.parentNode;
        const img = parent.querySelector('.fly_to_busket');
        const activeImg = parent.querySelector('.card_img_active');
        fly(img);
        addBusket(activeImg);
    })
});
