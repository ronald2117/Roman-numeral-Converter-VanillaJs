const input = document.querySelector('#input');
const submitButton = document.querySelector("#submit-btn");
const output = document.querySelector('#output');


submitButton.addEventListener('click', ()=>{
  convertToRoman(input.value)
})
function convertToRoman(num){
  if(num.includes(".") || num < 1) {
    alert("Error")
  }
  const numberArray = num.toString().split('');
  const romanNumeralArray = [];
  
  switch(numberArray[numberArray.length - 1]){
    case "1":
      romanNumeralArray.unshift('I');
      break;
    case "2":
      romanNumeralArray.unshift('II');
      break;
    case "3":
      romanNumeralArray.unshift('III');
      break;
    case "4":
      romanNumeralArray.unshift('IV');
      break;
    case "5":
      romanNumeralArray.unshift('V');
      break;
    case "6":
      romanNumeralArray.unshift('VI');
      break;
    case "7":
      romanNumeralArray.unshift('VII');
      break;
    case "8":
      romanNumeralArray.unshift('VIII');
      break;
    case "9":
      romanNumeralArray.unshift('IX');
      break;
    default:
      romanNumeralArray.unshift('');
  }
  if(numberArray.length >= 2) {
    switch(numberArray[numberArray.length - 2]){
    case "1":
      romanNumeralArray.unshift('X');
      break;
    case "2":
      romanNumeralArray.unshift('XX');
      break;
    case "3":
      romanNumeralArray.unshift('XXX');
      break;
    case "4":
      romanNumeralArray.unshift('XL');
      break;
    case "5":
      romanNumeralArray.unshift('L');
      break;
    case "6":
      romanNumeralArray.unshift('LX');
      break;
    case "7":
      romanNumeralArray.unshift('LXX');
      break;
    case "8":
      romanNumeralArray.unshift('LXXX');
      break;
    case "9":
      romanNumeralArray.unshift('XC');
      break;
    default:
      romanNumeralArray.unshift('');
    }
  }
  if(numberArray.length >= 3){
    switch (numberArray[numberArray.length - 3]) {
      case "1":
        romanNumeralArray.unshift('C');
        break;
      case "2":
        romanNumeralArray.unshift('CC');
        break;
      case "3":
        romanNumeralArray.unshift('CCC');
        break;
      case "4":
        romanNumeralArray.unshift('CD');
        break;
      case "5":
        romanNumeralArray.unshift('D');
        break;
      case "6":
        romanNumeralArray.unshift('DC');
        break;
      case "7":
        romanNumeralArray.unshift('DCC');
        break;
      case "8":
        romanNumeralArray.unshift('DCCC');
        break;
      case "9":
        romanNumeralArray.unshift('CM');
        break;
      default:
        romanNumeralArray.unshift('');;
    }
  }
  if (numberArray.length == 4){
    switch (numberArray[numberArray.length - 4]) {
      case "1":
        romanNumeralArray.unshift('M');
        break;
      case "2":
        romanNumeralArray.unshift('MM');
        break;
      case "3":
        romanNumeralArray.unshift('MMM');
        break;
      default:
        romanNumeralArray.unshift('');;
    }
  }
  if(num > 3999){
    alert ("Conversion of higher than 3999 doesn't exist")
  }
  const finalProduct = romanNumeralArray.join("");
  output.innerHTML = finalProduct;
}
  
