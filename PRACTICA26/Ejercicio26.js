/*1.-Investigar propiedades de los arreglos (visualizar, agregar, eliminar elementos). Realice un arreglo con los días de la
semana (utilice las propiedades investigadas).*/

var diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sbado', 'Domingo'];

// Visualizar un día
alert('Visualizamos el dia: '+ diasSemana[3]); 


diasSemana.push('Nuevo Dia');
alert('Se agrego:'+ diasSemana); // Esto mostrará el arreglo con el nuevo día al final

// Eliminar dias 

diasSemana.splice(4, 4); 
alert('Eliminamos datos faltantes:'+ diasSemana); 


/*- 2.-Utilice while para sumar los números del 1 al 5. (deberá obtener como
resultado 15).*/
var i=15;
while (i<=15) {
    alert (i);
    i = i + 2;
}


/*- Con do while, obtenga el factorial del número 5. (obtener como resultado
120).*/

var n = prompt("Introduzca el numero del cual se quiere obtener el factorial:");
do {
    var total = 1; 
    for (i=1; i<=n; i++) {
        total = total * i; 
    }
  alert("Factorial de " + n + ": " + total);
  n--;
  } while (n > 0);