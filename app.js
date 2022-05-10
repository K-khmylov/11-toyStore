'use strict';

let openPopUp1 = document.getElementById('open_pop_up1');
let closePopUp1 = document.getElementById('close1');
let popUp1 = document.getElementById('pop_up1');
let openPopUp2 = document.getElementById('open_pop_up2');
let closePopUp2 = document.getElementById('close2');
let popUp2 = document.getElementById('pop_up2');


openPopUp1.addEventListener('click', () =>{
    popUp1.classList.add('open');
})

closePopUp1.addEventListener('click', () =>{
    popUp1.classList.remove('open');
})

openPopUp2.addEventListener('click', () =>{
    popUp2.classList.add('open');
})

closePopUp2.addEventListener('click', () =>{
    popUp2.classList.remove('open');
})
  
  
  
  