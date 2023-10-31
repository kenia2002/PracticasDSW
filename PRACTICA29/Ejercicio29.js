let maravillas = ["dany.svg", "super.svg", "one.svg", "drake.svg", "hannah.svg","buena.svg","jessie.svg","manual.svg","lady.svg","scooby.svg"];
let correcta = [1,0,2,1,2,0,1,1,0,2];


let opciones = [];

opciones.push(["RECREO", "DANNY PHANTON", "EL FANTASMA", "ONE PIECE"]);
opciones.push(["CHICAS SUPERPODEROSAS", "CAPERUCITA ROJA", "MASHA Y EL OSO", "EL FANTASMA"]);
opciones.push(["LAS TORTUGAS NINJA", "UN SHOW MÁS", "ONE PIECE", "CAPERUCITA ROJA"]);
opciones.push(["SAM & CAT", "DRAKE Y JOSH", "ICARLY", "CAT NOIR"]);
opciones.push(["HIGH SCHOOL MUSICAL", "ICARLY", "HANNAH MONTANA", "EL FANTASMA"]);
opciones.push(["BUENA SUERTE CHARLIE", "HENRY DANGER", "4 LOCOS Y UN BEBÉ", "EL FANTASMA"]);
opciones.push(["GAME SHAKERS", "JESSIE", "BUENA SUERTE CHARLIE", "CAPERUCITA ROJA"]);
opciones.push(["BOB ESPONJA", "MANUAL DE NED", "ICARLY", "EL FANTASMA"]);
opciones.push(["LADY BUG", "LADY CAT", "CAT NOIR", "CAPERUCITA ROJA"]);
opciones.push(["UN SHOW MÁS", "FAMILIA DEL FUTURO", "SCOOBY DOO", "EL FANTASMA"]);

let posActual = 0;
let cantidadAcertadas = 0;

function comenzarJuegoSeries(){
    posActual = 0;
    cantidadAcertadas = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarMaravilla();

}

function cargarMaravilla(){
    if(maravillas.length <= posActual){
        terminarJuego();
    }
    else{
        limpiarOpciones();

        document.getElementById("imgMaravilla").src = "img/" + maravillas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
        document.getElementById("n3").innerHTML = opciones[posActual][3];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("n3").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
    document.getElementById("l3").className = "letra";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acertó
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    setTimeout(cargarMaravilla,1000);
}
function terminarJuego(){
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = maravillas.length - cantidadAcertadas;
}

function volverAlInicio(){
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}