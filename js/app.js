var creditCard = prompt("Ingresa los 16 digitos de tu tarjeta de credito sin espacios"); //Mediante un prompt le pedimos al usuario que ingrese el numero de su tarjeta sin espacios
var array = [];//array donde se guardara el numero ingresado por el usuario
 for (var j = 0; j <= creditCard.length; j++){
   if (creditCard[j] === " "){
     alert("Ingresa los números SIN ESPACIOS"); //si el usuario ingresa espacios o un campo vacio se le enviara un alert diciendole que coloque correctamente la frase.
     break;
   }
 }

    for (var i  = creditCard.length -1; i >= 0 ; i--){//va a iterar en el array empezara del ultimo index al primero
    array.push(parseInt(creditCard[i]));//se agregan los numeros al array vacio y apareceran volteados
  }

  console.log (array);

  console.log(isValidCard(creditCard));


  function isValidCard (){ //Creamos una funcion en la cual verificaremos si la tarjeta es valida o no por medio del algoritmo de Luhn
    var sumPair = 0; //Guardaremos los numeros que estan en las posiciones pares
    for (var k = 1; k <= array.length - 1; k += 2){ //Iteramos en el arreglo pasando de dos en dos para multiplicarlos por 2.

      var multiply = array[k] *= 2;
      if (multiply > 9){ // Si los numeros que tenemos en la variable multiply son mayores a 9 tendremos que acceder a ellos convirtiendolos en un string y porteriormente retornarlos como numero para asi sumar por medio del index)
        sumPair = sumPair + (Number(multiply.toString().charAt(0)) + Number(multiply.toString().charAt(1)));
    } else {
      sumPair += multiply;
    }


    console.log(multiply);

    console.log(array);
  }

    console.log("suma pares "+sumPair);
  var sumUnpair = 0;
  for (var m = 0; m <= array.length -1; m += 2){ //Tendremos en una variable los numeros que obtenemos de las posiciones impares para posteriormente sumarlos con los de la posicion par

    sumUnpair += array[m];
  }
    console.log("suma impares " + sumUnpair);
   var totalAmount = sumPair + sumUnpair; //Aqui sumaremos la cantidad obtenida de los pares y los impares

    console.log("suma total " + totalAmount);

   if (totalAmount % 10 === 0){ //Del resultado obtenido de la suma de los numeros en posicion par e impar si obtenemos del modulo de 10 un resultado de 0 la tarjeta nos retornara un true de lo contrario la tarjeta es invalida y nos dara false.
     return true;
   } else {
     return false;

   }
 }
