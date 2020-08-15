//clock
const clockElement = document.querySelector('.clock');
setInterval( () => clockElement.innerText = (new Date ()).toLocaleTimeString(), 1000);

$('.main').click(function(){
    $('.main').toggleClass('animated flipInX');
});
$('.catalog').click(function(){
    $('.catalog').toggleClass('animated flipInX');
});
$('.contacts').click(function(){
    $('.contacts').toggleClass('animated flipInX');
});

document.querySelectorAll('.product-buttons .buttonBuy').forEach(buttonBuy => buttonBuy.addEventListener('click', buttonBuyPressed));
function buttonBuyPressed(ev){
    alert('Добавлено в корзину');
};
document.querySelectorAll('.catagories .catagory').forEach(catagory => catagory.addEventListener('click', catagoryPressed));
function catagoryPressed(ev){
    alert('Ви переходите до іншої категорії');
};
document.querySelectorAll('#contacts .contact').forEach(contact => contact.addEventListener('click', contactPressed));
 function contactPressed(ev){
     alert ('Зателефонуйте нам)');
     };


     function addOptions(select, arr){
    for(let i=0; i<arr.length; i++){
        select.add(new Option(arr[i]));
    }
}
let numberSelect = document.querySelector('#number-select');
let priceSelect = document.querySelector('#price-select');

let data ={
    1 : ['15 грн.'],
    2 : ['30 грн.'],
    3 : ['45 грн.'],
    4 : ['60 грн.'],
    5 : ['75 грн.'],
   10 : ['140 грн.'],
}
let number = Object.keys(data);
addOptions(numberSelect, number);

let defaultPrice = data[number[0]];
addOptions(priceSelect, defaultPrice);

numberSelect.addEventListener('change', function(){
    let price = data[this.value];
    priceSelect.length = 0;
    addOptions(priceSelect, price);
});


let numberSelects = document.querySelector('#number-selects');
let priceSelects = document.querySelector('#price-selects');

let datas ={
    1 : ['20 грн.'],
    2 : ['40 грн.'],
    3 : ['60 грн.'],
    4 : ['80 грн.'],
    5 : ['100 грн.'],
   10 : ['180 грн.'],
}
let numbers = Object.keys(datas);
addOptions(numberSelects, numbers);

let defaultsPrice = datas[number[0]];
addOptions(priceSelects, defaultsPrice);

numberSelects.addEventListener('change', function(){
    let prices = datas[this.value];
    priceSelects.length = 0;
    addOptions(priceSelects, prices);
});




