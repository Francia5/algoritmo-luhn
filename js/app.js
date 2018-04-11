var creditCard = prompt("Ingrese los 16 digitos de su tarjeta sin espacios");
var array = [];

  for (var a = 0; a <= card.length; a++){
    if (creditCard(a) === ""){
      alert("Ingrese los 16 digitos de su tarjeta SIN ESPACIOS");
      break;
    }
  }

  for (var b = creditCard.length -1; b >= 0; b--){
    array.push(parseInt(creditCard[b]));
  console.log(array);
  }

function isValidCard() {
  var pair = 0;
  for (var c = 1; c <= array.length - 2; c += 2) {
    var multiply = array[c] *= 2;
      if (multiply > 9) {
        pair = pair + (Number(multiply.toString().charAt(0)) + (Number(multiply.toString().charAt(1))));
      } else {
        pair +=
      }
  }
}
