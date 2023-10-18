/*Con un for muestre el mensaje “Hola” siete veces, en el 4to hola debe mostrar el mensaje “soy el 4to” y después del 7mo
hola el mensaje “Acabamos de saludar”.*/

for (var i=1; i <7; i++ ) {
    if (i===4){
        alert ("Soy el 4to, HOLA")
    }else{
alert ("Hola")
}
} 
alert ("Acabamos de saludar");


/*- Investigar for in, forEach, for of. Realice un ejemplo con cada uno de los for con un arreglo que contenga los primeros 11
meses del año.*/

var año = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"];


alert("Usando for in ");
for (const index in año) {
  alert(año[index]);
  
}
  
alert("Usando forEach:");
año.forEach(function(mes) {
  alert(mes);
});

alert("Usando for of:");
for (const mes of año) {
  alert(mes);
}



/*- Utilizando el arreglo anterior utilizar el for de su preferencia y hacer que omita el mes de Julio, con el mismo ejemplo
agregar diciembre pero fuera del arreglo y mostrar todos los meses por medio de un ciclo for incluido diciembre.*/

var año = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"];
for (var indice in año) {
    if (año[indice] !== 'Julio') {
        alert(año[indice]);
    }
}
año.push('Diciembre');

alert('Todos los meses:');
for (var indice in año) {
    alert(año[indice]);
}
