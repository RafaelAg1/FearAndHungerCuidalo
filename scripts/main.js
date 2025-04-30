let personajeSeleccionado;
let haSeleccionado=false;
let expedicionIniciada=false;
const seleccionPersonajeCahara = document.getElementById("personaje1");
const seleccionPersonajeDarce = document.getElementById("personaje2");
const seleccionPersonajeEnki = document.getElementById("personaje3");
const seleccionPersonajeRagnavaldr = document.getElementById("personaje4");
const imgPersonajeSeleccionado = document.getElementById("personajeSeleccionado");
const ost1 = new Audio("../sounds/musica/OST1.mp3");
const botonMusica = document.getElementById("botonMusica");
const ost2Exp = new Audio("../sounds/musica/OST2Expedicion.mp3")


//Personaje
const nombrePersonaje = document.getElementById("nombrePersonaje");
const edadPersonaje = document.getElementById("edadPersonaje");
const hambrePersonaje = document.getElementById("hambrePersonaje");
const miedoPersonaje = document.getElementById("miedoPersonaje");
const saludPersonaje = document.getElementById("saludPersonaje");
const sueñoPersonaje = document.getElementById("sueñoPersonaje");
const monedasJugador = document.getElementById("monedasJugador");
const panMohosoInv = document.getElementById("panMohosoInv");
const expedicionDiv = document.getElementById("expedicionDiv");
const empezarExpedicion = document.getElementById("empezarExpedicion");
const volverAtras = document.getElementById("volverAtras");
//botones usar cosas
const usarPanMohoso = document.getElementById("usarPanMohoso");
const usarCarneSeca = document.getElementById("usarCarneSeca");
const usarVialAzul = document.getElementById("usarVialAzul");
const usarBotellaWhisky = document.getElementById("usarBotellaWhisky");
const usarPocionCuración = document.getElementById("usarPocionCuración");
const usarLibroIluminacion = document.getElementById("usarLibroIluminacion");
//botones pa comprar
const comprarPanMohoso = document.getElementById("comprarPanMohoso");
const comprarCarneSeca = document.getElementById("comprarCarneSeca");
const comprarVialAzul = document.getElementById("comprarVialAzul");
const comprarBotellaWhisky = document.getElementById("comprarBotellaWhisky");
const comprarPocionCuracion = document.getElementById("comprarPocionCuracion");



class Personajes {
    constructor(nombre,edad,hambre,miedo,salud,sueño){
        this.nombre = nombre;
        this.edad = edad;
        this.hambre= hambre;
        this.miedo = miedo;
        this.salud = salud;
        this.sueño = sueño
    }   
}
const jugador = {
    oro:100,
    cantPanMohoso: 2,
    cantCarneSeca: 1,
    cantVialAzul: 0,
    cantBotellaWhisky:0,
    cantPocionCuracion:0,
    cantLibroIluminacion:1
}
const objetosConsumibles = [
    {
        nombre: "Pan mohoso",
        hambre: 15,
        salud: -5,
        miedo: 0,
        precio:10,
        descripcion: "Pan con moho que ya esta creciendo. Puede servir para saciar el hambre un poco."
    },
    {
        nombre: "Carne seca",
        hambre: 30,
        salud: 0,
        miedo: 0,
        precio:20,
        descripcion: "Trozos de carne seca para prevenir que se estropee."
    },
    {
        nombre: "Vial azul",
        hambre: 0,
        salud: 20,
        miedo: 0,
        precio: 30,
        descripcion: "Un vial lleno de un liquido azul."
    },
    {
        nombre: "Botella de whisky",
        hambre: 0,
        salud: 0,
        miedo: 30,
        precio: 20,
        descripcion: "Una vieja botella de whisky. Te ayuda a mantener la miedo en la oscuridad."
    },
    {
        nombre: "Pocion de curación",
        hambre: 0,
        salud: -50,
        miedo: -20,
        precio: 40,
        descripcion: "Extraña poción  de curacion"
    }
]
const nivelesExpedicion = [
    {
        nombre: "Nivel 1.Escaleras",
        desbloqueado: true,
        miedo: -10,
        oro: 15,
        sueño: -10,
    },
    {
        nombre: "Nivel 2.Sotano",
        desbloqueado: false,
        miedo: -20,
        oro: 30,
        sueño: -20,
    },
    {
        nombre: "Nivel 3.Carceles",
        desbloqueado: false,
        miedo: -35,
        oro: 50,
        sueño: -35,
    },
    {
        nombre: "Nivel 4.Minas",
        desbloqueado: false,
        miedo: -50,
        oro: 75,
        sueño: -50,
    },
    {
        nombre: "Nivel 5. ???",
        desbloqueado: false,
        miedo: -100,
        oro: 200,
        sueño: -100,
    },
]

const libroIluminado = {
    nombre: "Libro de la iluminación",
    precio:100,
    descripcion: "Los monjes del este han escrito este libro."
}


const Cahara = new Personajes("Cahara",25,100,100,100,100);
const Darce = new Personajes("D'arce",23,100,100,100,100);
const Enki = new Personajes("Enki",35,100,100,80,100);
const Ragnvaldr = new Personajes("Ragnavaldr",30,100,100,100,100);

botonMusica.addEventListener("click",()=>{
    if(ost1.paused){
        document.getElementById("imagenBotonMusica").src = "../img/consonido.png";
        ost1.play();
    }else{
        ost1.pause();
        document.getElementById("imagenBotonMusica").src = "../img/mute.png";
    }
})

seleccionPersonajeCahara.addEventListener("click",()=>{
    haSeleccionado=true;
    personajeSeleccionado = Cahara;
    imgPersonajeSeleccionado.src = "img/Personajes/Cahara_portrait.png";
    actualizarInterfaz();
    ost1.play();
    actualizarEstadisticas();
    actualizarInventario();
    guardarJuego();
});

seleccionPersonajeDarce.addEventListener("click",()=>{
    haSeleccionado=true;
    personajeSeleccionado = Darce;
    imgPersonajeSeleccionado.src = "img/Personajes/D'arce_portrait.webp";
    actualizarInterfaz();
    ost1.play();
    actualizarEstadisticas();
    actualizarInventario();    
    guardarJuego();
});

seleccionPersonajeEnki.addEventListener("click",()=>{
    haSeleccionado=true;
    personajeSeleccionado = Enki;
    imgPersonajeSeleccionado.src = "img/Personajes/Enki_portrait.webp";
    actualizarInterfaz();
    ost1.play();
    actualizarEstadisticas();
    actualizarInventario();    
    guardarJuego();

});

seleccionPersonajeRagnavaldr.addEventListener("click",()=>{
    haSeleccionado=true;
    personajeSeleccionado = Ragnvaldr;
    imgPersonajeSeleccionado.src = "img/Personajes/Ragnvaldr_portrait.webp";
    actualizarInterfaz();
    ost1.play();
    actualizarEstadisticas();
    actualizarInventario();    
    guardarJuego();
});
function actualizarTienda(){
    document.getElementById("tiendaPanMohoso").textContent = `${objetosConsumibles[0].nombre}. Precio: ${objetosConsumibles[0].precio}`
    document.getElementById("tiendaCarneSeca").textContent = `${objetosConsumibles[1].nombre}. Precio: ${objetosConsumibles[1].precio}`
    document.getElementById("tiendaVialAzul").textContent = `${objetosConsumibles[2].nombre}. Precio: ${objetosConsumibles[2].precio}`
    document.getElementById("tiendaBotellaWhisky").textContent = `${objetosConsumibles[3].nombre}. Precio: ${objetosConsumibles[3].precio}`
    document.getElementById("tiendaPocionCuracion").textContent = `${objetosConsumibles[4].nombre}. Precio: ${objetosConsumibles[4].precio}`
}

actualizarTienda();

function actualizarInterfaz (){
    document.getElementById("seleccionPersonaje").style.display="none";
    document.getElementById("cargarPartida").style.display="none"
    document.getElementById("personajeDiv").style.display="flex";
    document.getElementById("tiendaDiv").style.display="flex";
    document.getElementById("inventarioDiv").style.display="flex";
    expedicionDiv.style.display="flex";
}

comprarPanMohoso.addEventListener("click",()=>{
    if(jugador.oro>=objetosConsumibles[0].precio){
        jugador.oro-=objetosConsumibles[0].precio,
        jugador.cantPanMohoso++;
    }
    actualizarEstadisticas();
    actualizarInventario();
});
comprarCarneSeca.addEventListener("click",()=>{
    if(jugador.oro>=objetosConsumibles[1].precio){
        jugador.oro-=objetosConsumibles[1].precio,
        jugador.cantCarneSeca++;
    }
    actualizarEstadisticas();
    actualizarInventario();
});
comprarVialAzul.addEventListener("click",()=>{
    if(jugador.oro>=objetosConsumibles[2].precio){
        jugador.oro-=objetosConsumibles[2].precio,
        jugador.cantVialAzul++;
    }
    actualizarEstadisticas();
    actualizarInventario();
});
comprarBotellaWhisky.addEventListener("click",()=>{
    if(jugador.oro>=objetosConsumibles[3].precio){
        jugador.oro-=objetosConsumibles[3].precio,
        jugador.cantBotellaWhisky++;
    }
    actualizarEstadisticas();
    actualizarInventario();
});
comprarPocionCuracion.addEventListener("click",()=>{
    if(jugador.oro>=objetosConsumibles[4].precio){
        jugador.oro-=objetosConsumibles[4].precio,
        jugador.cantPocionCuracion++;
    }
    actualizarEstadisticas();
    actualizarInventario();
});



usarPanMohoso.addEventListener("click",()=>{
    if(jugador.cantPanMohoso>0){
        jugador.cantPanMohoso--;
        personajeSeleccionado.salud+=objetosConsumibles[0].salud;
        if(personajeSeleccionado.hambre+objetosConsumibles[0].hambre>100){
            personajeSeleccionado.hambre=100;
        }else{
            personajeSeleccionado.hambre+=objetosConsumibles[0].hambre;
        }
        actualizarEstadisticas();
        actualizarInventario();
    }
});

usarCarneSeca.addEventListener("click",()=>{
    if(jugador.cantCarneSeca>0){
        jugador.cantCarneSeca--;
        if(personajeSeleccionado.hambre+objetosConsumibles[1].hambre>100){
            personajeSeleccionado.hambre=100;
        }else{
            personajeSeleccionado.hambre+=objetosConsumibles[1].hambre;
        }
    }
    actualizarEstadisticas();
    actualizarInventario();
});

usarVialAzul.addEventListener("click",()=>{
    if(jugador.cantVialAzul>0){
        jugador.cantVialAzul--;
        ;
        if(personajeSeleccionado.salud+objetosConsumibles[2].salud>100){
            personajeSeleccionado.salud=100;
        }else{
            personajeSeleccionado.salud+=objetosConsumibles[2].salud;
        }
    }
    actualizarEstadisticas();
    actualizarInventario();
});

usarBotellaWhisky.addEventListener("click",()=>{
    if(jugador.cantBotellaWhisky>0){
        jugador.cantBotellaWhisky--;
        if(personajeSeleccionado.miedo+objetosConsumibles[3].miedo>100){
            personajeSeleccionado.miedo=100;
        }else{
            personajeSeleccionado.miedo+=objetosConsumibles[3].miedo;

        }
    }
    actualizarEstadisticas();
    actualizarInventario();
});

usarPocionCuración.addEventListener("click",()=>{
    if(jugador.cantPocionCuracion>0){
        jugador.cantPocionCuracion--;
        if(personajeSeleccionado.salud+objetosConsumibles[4].salud<0){
            personajeSeleccionado.salud=0;
        }else{
            personajeSeleccionado.salud+=objetosConsumibles[4].salud;
        }
        if(personajeSeleccionado.miedo+objetosConsumibles[4].miedo<0){
            personajeSeleccionado.miedo=0;
        }else{
            personajeSeleccionado.miedo+=objetosConsumibles[4].miedo;
        }
    }
    actualizarEstadisticas();
    actualizarInventario();
});

usarLibroIluminacion.addEventListener("click",()=>{
    if(jugador.cantLibroIluminacion>0){
        jugador.cantLibroIluminacion--;
        guardarJuego();
    }

    actualizarInventario();
});

empezarExpedicion.addEventListener("click",()=>{
    ost1.pause();
    ost2Exp.play();
    document.getElementById("tiendaDiv").style.display="none";
    document.getElementById("volverAtras").style.display="flex",
    document.getElementById("inventarioDiv").style.display="none";
    document.getElementById("personajeDiv").style.justifyContent="flex-start";
    document.getElementById("estadisticasDiv").style.display="none";
    expedicionIniciada=true;
    document.getElementById("empezarExpedicion").style.display="none";
    document.getElementById("expedionesDiv").style.display="flex";
});
volverAtras.addEventListener("click",()=>{
    ost2Exp.pause();
    ost1.play();
    document.getElementById("tiendaDiv").style.display="flex";
    document.getElementById("volverAtras").style.display="none",
    document.getElementById("inventarioDiv").style.display="flex";
    document.getElementById("personajeDiv").style.justifyContent="center";
    document.getElementById("estadisticasDiv").style.display="flex";
    expedicionIniciada=false;
    document.getElementById("empezarExpedicion").style.display="flex";
    document.getElementById("expedionesDiv").style.display="none";
});

function guardarJuego(){
    const personajeSel = JSON.stringify(personajeSeleccionado);
    const jugadorDatos = JSON.stringify(jugador);
    localStorage.setItem("personajeSeleccionado",personajeSel);
    localStorage.setItem("datosJugador",jugadorDatos);
    console.log(localStorage.getItem("personajeSeleccionado"));
    console.log(localStorage.getItem("datosJugador"));
}
function cargarPartida(){
    const datosPersonaje = localStorage.getItem("personajeSeleccionado");
    const datosJugador = localStorage.getItem("datosJugador");
    if(datosJugador && datosPersonaje){
        Object.assign(jugador,JSON.parse(datosJugador));
        Object.assign(personajeSeleccionado,JSON.parse(datosPersonaje));
        console.log(JSON.parse(datosJugador));
        console.log(JSON.parse(datosPersonaje));
    }
}
document.getElementById("cargarPartida").addEventListener("click",()=>{
    cargarPartida();
});
function actualizarEstadisticas(){
    nombrePersonaje.textContent = `Nombre: ${personajeSeleccionado.nombre}`;
    edadPersonaje.textContent = `Edad: ${personajeSeleccionado.edad}`;
    hambrePersonaje.textContent = `Hambre: ${personajeSeleccionado.hambre}`;
    miedoPersonaje.textContent = `Miedo: ${personajeSeleccionado.miedo}`;
    saludPersonaje.textContent = `Salud: ${personajeSeleccionado.salud}`;
    sueñoPersonaje.textContent = `Sueño: ${personajeSeleccionado.sueño}`;
    monedasJugador.textContent = `Monedas: ${jugador.oro}`
}
function actualizarInventario(){
    panMohosoInv.textContent = `${objetosConsumibles[0].nombre}. ${objetosConsumibles[0].descripcion} Cantidad: ${jugador.cantPanMohoso}`;
    document.getElementById("carneSeca").textContent = `${objetosConsumibles[1].nombre}. ${objetosConsumibles[1].descripcion} Cantidad: ${jugador.cantCarneSeca}`;
    document.getElementById("vialAzul").textContent = `${objetosConsumibles[2].nombre}. ${objetosConsumibles[2].descripcion} Cantidad: ${jugador.cantVialAzul}`;
    document.getElementById("botellaWhisky").textContent = `${objetosConsumibles[3].nombre}. ${objetosConsumibles[3].descripcion} Cantidad: ${jugador.cantBotellaWhisky}`;
    document.getElementById("pocionCuracion").textContent = `${objetosConsumibles[4].nombre}. ${objetosConsumibles[4].descripcion} Cantidad: ${jugador.cantPocionCuracion}`;
    document.getElementById("libroIluminacion").textContent = `${libroIluminado.nombre}. ${libroIluminado.descripcion} Cantidad: ${jugador.cantLibroIluminacion}`;

}

let intervaloJuego;
intervaloJuego = setInterval(()=>{
    if(!expedicionIniciada){
        if(personajeSeleccionado){
            if(personajeSeleccionado.salud==0){
                alert("Se ha muerto. Fin de la partida");
                clearInterval(intervaloJuego) //Sirve para detener el intervalo y pa poder hacerlo hace falta guardarlo en una variable el intervalo, sino no va
            }else{
                if(personajeSeleccionado.hambre>0){
                    if(personajeSeleccionado.nombre=="Ragnavaldr"){
                        personajeSeleccionado.hambre-=2;
                    }else{
                        personajeSeleccionado.hambre--;
                    }
                }
                if(personajeSeleccionado.hambre==0){
                    if(personajeSeleccionado.salud>0){
                        personajeSeleccionado.salud--;
                    }
    
                }    
            }
            
            actualizarEstadisticas();
        }
    }
},5000);