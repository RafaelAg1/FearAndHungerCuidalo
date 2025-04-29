let personajeSeleccionado;
let haSeleccionado=false;
const seleccionPersonajeCahara = document.getElementById("personaje1");
const seleccionPersonajeDarce = document.getElementById("personaje2");
const seleccionPersonajeEnki = document.getElementById("personaje3");
const seleccionPersonajeRagnavaldr = document.getElementById("personaje4");
const imgPersonajeSeleccionado = document.getElementById("personajeSeleccionado");
const ost1 = new Audio("../sounds/musica/OST1.mp3");
const botonMusica = document.getElementById("botonMusica");


//Personaje
const nombrePersonaje = document.getElementById("nombrePersonaje");
const edadPersonaje = document.getElementById("edadPersonaje");
const hambrePersonaje = document.getElementById("hambrePersonaje");
const miedoPersonaje = document.getElementById("miedoPersonaje");
const saludPersonaje = document.getElementById("saludPersonaje");
const sueñoPersonaje = document.getElementById("sueñoPersonaje");
const monedasJugador = document.getElementById("monedasJugador");
const panMohosoInv = document.getElementById("panMohosoInv");
const usarPanMohoso = document.getElementById("usarPanMohoso");
const usarPan = document.getElementById("usarPan");

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
    oro:10,
    cantPanMohoso: 2,
    cantPan: 1
}
const objetosConsumibles = [
    {
        nombre: "Pan mohoso",
        hambre: 10,
        salud: -5
    },
    {
        nombre: "Pan",
        hambre: 20,
        salud: 0
    }
]
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
    document.getElementById("seleccionPersonaje").style.display="none";
    document.getElementById("personajeDiv").style.display="flex";
    document.getElementById("tiendaDiv").style.display="flex";
    document.getElementById("inventarioDiv").style.display="flex";
    ost1.play();
    actualizarEstadisticas();
    actualizarInventario();
    guardarJuego();
});

seleccionPersonajeDarce.addEventListener("click",()=>{
    haSeleccionado=true;
    personajeSeleccionado = Darce;
    imgPersonajeSeleccionado.src = "img/Personajes/D'arce_portrait.webp";
    document.getElementById("seleccionPersonaje").style.display="none";
    document.getElementById("personajeDiv").style.display="flex";
    document.getElementById("tiendaDiv").style.display="flex";
    document.getElementById("inventarioDiv").style.display="flex";
    ost1.play();
    actualizarEstadisticas();
    actualizarInventario();    
    guardarJuego();
});

seleccionPersonajeEnki.addEventListener("click",()=>{
    haSeleccionado=true;
    personajeSeleccionado = Enki;
    imgPersonajeSeleccionado.src = "img/Personajes/Enki_portrait.webp";
    document.getElementById("seleccionPersonaje").style.display="none";
    document.getElementById("personajeDiv").style.display="flex";
    document.getElementById("tiendaDiv").style.display="flex";
    document.getElementById("inventarioDiv").style.display="flex";
    ost1.play();
    actualizarEstadisticas();
    actualizarInventario();    
    guardarJuego();

});

seleccionPersonajeRagnavaldr.addEventListener("click",()=>{
    haSeleccionado=true;
    personajeSeleccionado = Ragnvaldr;
    imgPersonajeSeleccionado.src = "img/Personajes/Ragnvaldr_portrait.webp";
    document.getElementById("seleccionPersonaje").style.display="none";
    document.getElementById("personajeDiv").style.display="flex";
    document.getElementById("tiendaDiv").style.display="flex";
    document.getElementById("inventarioDiv").style.display="flex";
    ost1.play();
    actualizarEstadisticas();
    actualizarInventario();    
    guardarJuego();
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

usarPan.addEventListener("click",()=>{
    if(jugador.cantPan>0){
        jugador.cantPan--;
        personajeSeleccionado.salud+=objetosConsumibles[1].salud;
        if(personajeSeleccionado.hambre+objetosConsumibles[1].hambre>100){
            personajeSeleccionado.hambre=100;
        }else{
            personajeSeleccionado.hambre+=objetosConsumibles[1].hambre;
        }
    }
    actualizarEstadisticas();
    actualizarInventario();
});
function guardarJuego(){
    const personajeSel = JSON.stringify(personajeSeleccionado);
    console.log(personajeSel);
    localStorage.setItem("personajeSeleccionado",personajeSeleccionado);
}

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
    panMohosoInv.textContent = `${objetosConsumibles[0].nombre}. Restaura ${objetosConsumibles[0].hambre} de hambre a cambio de ${objetosConsumibles[0].salud} de vida. Cantidad: ${jugador.cantPanMohoso}`;
    document.getElementById("panInv").textContent = `${objetosConsumibles[1].nombre}. Restaura ${objetosConsumibles[1].hambre} de hambre. Cantidad: ${jugador.cantPan}`;
}
setInterval(()=>{
    if(personajeSeleccionado){
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
            if(personajeSeleccionado.salud==0){
                alert("Se ha muerto. Fin de la partida");
            }
        }
        actualizarEstadisticas();
    }
},5000);