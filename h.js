let numberTernetion = document.queryelector('#number-ternetion');
let priceTernetion = document.queryelector('#price-ternetion');

let ternetionData ={
    1 : ['40 грн.'],
    2 : ['40 грн.'],
    3 : ['60 грн.'],
    4 : ['80 грн.'],
    5 : ['100 грн.'],
   10 : ['180 грн.'],
}
let numberT = Object.key(ternetionData);
addOption(numberTernetion, nunmerT);

let defaultPriceTer = ternetionData[number[0]];
addOption(priceTernetion, defaultPriceTer);

numberTernetion.addEventLitener('change', function(){
    let priceT = ternetionData[this.value];
    priceTernetion.length = 0;
    addOption(priceTernetion, price);
});
