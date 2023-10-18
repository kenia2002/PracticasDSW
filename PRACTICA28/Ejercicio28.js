/*Escribir una función que reciba como parámetro un número y regrese si el número
capturado es impar o par. (utilizar prompt para capturar el número).*/

var numero = prompt("Introduce un número entero");

var resultado = parImpar(numero);
alert("El número "+numero+" es "+resultado);

function parImpar(numero) {
  if(numero % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }
}

/*- Escribir una función llamada "Aviso de Huracán", la cual debe contener un
parámetro que sea de tipo booleano (hayUnHuracan). Si hay huracán, se deberá
imprimir "Hay un Huracán", de lo contrario deberá imprimir el mensaje " Está
Soleado".*/

function AvisoDeHuracan(HayunHuracan) {
    
    if (HayunHuracan) {
        alert("Hay un Huracan");
    } else {

    alert("Está Soleado");
}
    }

    var hayUnHuracanMañana=true;
    AvisoDeHuracan(hayUnHuracanMañana);
    var hayUnHuracanHoy=false;
    AvisoDeHuracan(hayUnHuracanHoy);


/*- Escribir una función con nombre "OperacionesMatematicas", que recibe 3
parametros, uno de tipo string con nombre "operacion" y dos de tipo numérico
llamados "a" y "b".Por lo cual, el tipo string nos indicará el tipo de operación que se
llevará a cabo entre a y b, es decir, si "operación" es igual a "sumar", "a" y "b" se
van a sumar, esto se debe realizar con suma, resta, multiplicación, división y
residuo, en caso de que el valor no corresponda a ninguno de los anteriores , la
función deberá regresar "0".*/

function OperacionesMatematicas() {

  var operacion="sumar";
  var a=3;
  var b=8;
    function OperacionesMatematicas() {
      switch (operacion) {
        case "sumar":
          return a + b;
        case "restar":
          return a - b;
        case "multiplicar":
          return a * b;
        case "dividir":
          if (b !== 0) {
            return a / b;
          } else {
            return "No se puede dividir por cero";
          }
        default:
          return "0";
      }
    }
    alert(OperacionesMatematicas());
}