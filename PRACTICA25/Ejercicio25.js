var peso = prompt("Ingresa tu peso."); 

var opcion= prompt("Ingresa tu opcion."); 


var peso_tierra= 6.000;
var peso_marte=6.42;
var peso_jupiter=1.98;
resultado=0;

if (opcion==1) {
     resultado= peso * peso_marte / peso_tierra
     alert ("su peso es"+resultado);
    }
    else if(opcion==2){
            resultado=peso*peso_jupiter/peso_tierra
            alert ("su peso es "+resultado);
            }else{
                alert ("no existe esta opcion");
            }

switch (opcion){
    case "1":
        resultado= peso * peso_marte / peso_tierra
     alert ("su peso es"+resultado);
     break;
     case "2":
        resultado=peso*peso_jupiter/peso_tierra
            alert ("su peso es "+resultado);
     break
    default:
        alert ("no existe esta opcion");
    break;
    
}