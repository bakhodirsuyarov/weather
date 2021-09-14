const elWeather = document.querySelector('.js-weather');
const elInfo = document.querySelector('.js-info');
const elInput = document.querySelector('.js-input');
const elCkeckbox1 = document.querySelector('#one-check');
const elCheckbox2 = document.querySelector('#two-check');
const elSpan1 = document.querySelector('.js-span1');
const elSpan2 = document.querySelector('.js-span2');


elWeather.addEventListener('keyup', function(){
  if (elInput.value >= 5 && elInput.value <= 30){
    elSpan1.style.color = "green";
  }else if (elCkeckbox1.checked && elCheckbox2.checked){
    elSpan1.style.color = "green";
  }else if (elCkeckbox1.checked){
    elSpan2.style.color = 'red';
  }else if (elInput.value < 5 && elCheckbox2.checked){
    elSpan2.style.color = "red";
  }
});


