//clock
const clockElement = document.querySelector('.clock');
setInterval( () => clockElement.innerText = (new Date ()).toLocaleTimeString(), 1000);

document.querySelectorAll('.product-buttons .button').forEach(button => button.addEventListener('click', buttonPressed));
function buttonPressed(ev){
    alert('Добавлено в корзину');
}
document.querySelectorAll('.catagories .catagory').forEach(catagory => catagory.addEventListener('click', catagoryPressed));
function catagoryPressed(ev){
    alert('Ви переходите до іншої категорії');
}
document.querySelectorAll('#contacts .contact').forEach(contact => contact.addEventListener('click', contactPressed));
 function contactPressed(ev){
     alert ('Зателефонуйте нам)');
     }

