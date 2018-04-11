var creditCard = prompt('Ingresa los 16 digitos de la tarjeta');
var array = [];//array donde se guardara el numero ingresado
 for (var j = 0; j <= creditCard.length; j++){
   if (creditCard[j] === " "){
     alert("Ingresa los números sin espacios");
     break;
   }
 }

    for (var i  = creditCard.length -1; i >= 0 ; i--){//va a iterar en el array empezara del ultimo index al primero
    array.push(parseInt(creditCard[i]));//se agregan los numeros al array vacio
  }

  console.log (array);

  console.log(isValidCard(creditCard));
 function isValidCard (){
   var sumPair = 0;
   for (var k = 1; k <= array.length - 1; k += 2){

    var multiply = array[k] *= 2;
    if (multiply > 9){
      sumPair = sumPair + (Number(multiply.toString().charAt(0)) + Number(multiply.toString().charAt(1)));
    } else {
      sumPair += multiply;
    }




    console.log(multiply);




    console.log(array);
  }

    console.log("suma pares "+sumPair);
  var sumUnpair = 0;
  for (var m = 0; m <= array.length -1; m += 2){

    sumUnpair += array[m];
  }
    console.log("suma impares " + sumUnpair);
   var totalAmount = sumPair + sumUnpair;

    console.log("suma total " + totalAmount);

   if (totalAmount % 10 === 0){
     return true;
   } else {
     return false;

   }
 }
