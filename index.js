//1
let Coche = {
  marca: "Seat",
  modelo: "Ibiza",
  matricula: "1234ABC",
};
//2
let Casa = {
  codPostal: "28001",
  calle: "Calle Mayor",
  portal: 5,
  piso: "3ºB",
};
//3
let FullStackDeveloper = {
  lenguajes: ["JavaScript", "HTML", "CSS"],
  proyectos: ["Bikram arrays", "Bikram objetos"],
};
//4
let Perro = {
  nombre: "Toby",
  raza: "Labrador",
  color: "Marrón",
  edad: 4,
  ladrar: function () {
    console.log("¡Guau guau!");
  },
  popo: function () {
    return Math.random() * 3;
  },
};
//5
let marcaPortatil = Portatil.marca;
//6
let marcaPortatil2 = Portatil["marca"];
//7
let grupos = Concierto.grupos;
//8
let RGB = [Led.rojo, Led.verde, Led.azul];
//9
Portatil.modelo = "P345";
//10
Concierto.cartelera.push("Guns N' Roses");
//11
Concierto.fecha = new Date();
//12
Impresora.imprimiendo = {
  nombreArchivo: "documento.pdf",
  copias: 2,
  numPaginas: 10,
};
//13
let Noticia = {
  titular: "Nuevo récord de temperatura",
  cuerpo: "Este verano se han alcanzado temperaturas nunca vistas.",
};
//14
let Persona = {
  nombre: "Ana",
  apellidos: "García López",
  edad: 30,
};
//15
let Avion = {
  numPasajeros: 180,
  despegar: function () {
    console.log("despegando");
  },
  volar: function () {
    console.log("llegando al destino");
  },
  aterrizar: function () {
    console.log("aterrizando");
  },
};
//16
let Paquete = {
  contenido: [
    { nombre: "Libro", peso: 1 },
    { nombre: "Taza", peso: 0.5 },
  ],
};
//17
let Pais = {
  numHabitantes: 48000000,
  continente: "Europa",
  gentilicio: "Español",
};
//18
let codError = O_Error.codigo;
//19
let integrantes = Grupo.integrantes;
//20
let nivelesTinta = Impresora.tinta;
//21
let pixeles = Pantalla.pixeles;
//22
let especificaciones = Movil["especificaciones"];
//23
Grupo.numIntegrantes = 5;
//24
Pantalla.dimensiones = "1920x1080";
//25
Led.encendido = !Led.encendido;
//26
Movil.temperatura = "20º";
