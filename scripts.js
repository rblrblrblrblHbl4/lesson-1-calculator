var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonDelenie = document.getElementById('buttonDelenie');
var buttonProizv = document.getElementById('buttonProizv');


function onButtonPlusClick() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var summ = number1 + number2;

    window.alert(summ);
}
function onButtonMinusClick(){
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var summ = number1 - number2;

    window.alert(summ);
}
function onButtonDelenieClick(){
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var summ = number1 / number2;

    window.alert(summ);
}
function onButtonProizvClick(){
   var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var summ = number1 * number2;

    window.alert(summ);
}

buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonDelenie.addEventListener('click', onButtonDelenieClick);
buttonProizv.addEventListener('click', onButtonProizvClick);