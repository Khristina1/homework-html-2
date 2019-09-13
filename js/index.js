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
