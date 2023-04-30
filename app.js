/* let miNombre = `Mateo`;
let miApellido = `Painemal`;
let miEdad = 21;
let miMascota = `Firulais`;
let edadMascota = 3;
console.log(miNombre, miApellido, miEdad, miMascota, edadMascota);

let nombreCompleto = miNombre + " " + miApellido;
console.log(nombreCompleto); */

/* let textoPresentacion =
"mi nombre es" +
	" " +
	miNombre +
	" " +
	miApellido +
	" " +
	"y tengo" +
	" " +
	miEdad +
	" " +
	"tambien tengo una mascota llamada" +
	" " +
	miMascota +
	" " +
	"que tiene" +
	" " +
	edadMascota;
console.log(textoPresentacion); */
/* 
let sumaEdades = miEdad + edadMascota;

let restaEdades = miEdad - edadMascota;

let productoEdades = miEdad * edadMascota;

let divisionEdades = miEdad / edadMascota;

console.log(sumaEdades);
console.log(restaEdades);
console.log(productoEdades);
console.log(divisionEdades);

let textoPresentacion =
	"Mi edad es " +
	miEdad +
	", la edad de mi mascota es " +
	edadMascota +
	", la suma de las edades es " +
	sumaEdades +
	", la resta de las edades es " +
	restaEdades +
	", el producto de las edades es " +
	productoEdades +
	" y la división de las edades es " +
	divisionEdades +
	".";

console.log(textoPresentacion);
 */

// N°11

/* const alumno = {
	nombre: "Mateo",
	edad: 22,
	carrera: "Desarrollo Fullstack Java",
	duracionMeses: 4.5,
	temas: ["Javascript", "Java", "PostgreSql"],
};
console.table(alumno);

console.log(alumno.nombre);
console.log(alumno.edad);
console.log(alumno.carrera);
console.log(alumno.duracionMeses);
console.log(alumno.temas);

// N°12

const mascota = {
	nombre: "harry",
	edad: 8,
	raza: "Labrador",
	color: "negro",
	hobbies: ["Comer", "Jugar", "Dormir"],
};
console.table(mascota);

console.log(mascota.nombre);
console.log(mascota.edad);
console.log(mascota.raza);
console.log(mascota.color);
console.log(mascota.hobbies);

// N°13
const frutas = ["banana", "durazno", "naranja", "frutilla", "manzana"];

console.log(frutas);

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);

// N°14
const numeros = [2, 4, 6, 8, 10];

console.log(numeros);

console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

// N°15
let familia = [
	{ nombre: "Olivia", edad: 42, relacion: "madre" },
	{ nombre: "Juan", edad: 45, relacion: "padre" },
	{ nombre: "Matias", edad: 22, relacion: "hijo" },
	{ nombre: "Brenda", edad: 70, relacion: "abuela" },
	{ nombre: "Mateo", edad: 71, relacion: "abuelo" },
];
console.log(familia);

console.log(familia[0]);
console.log(familia[1]);
console.log(familia[2]);
console.log(familia[3]);
console.log(familia[4]); */

//N°16
/* let textoAleatorio = `Me gusta la ${frutas[1]}, el numero ${numeros[3]} y mi ${familia[4].relacion} se llama ${familia[4].nombre}`;
console.log(textoAleatorio); */

//N°17
/* let miEdad = prompt("Ingresa tu edad");
let edadCompañero = prompt("Ingresa la edad de tu compañero");

let edadesIguales = miEdad === edadCompañero;
let soyMayor = miEdad > edadCompañero;
let soyMenor = miEdad < edadCompañero;

console.log(`Mi edad es igual a la de mi compañero: ${edadesIguales}`);
console.log(`Mi edad es mayor a la de mi compañero: ${soyMayor}`);
console.log(`Mi edad es menor a la de mi compañero: ${soyMenor}`); */

//N°18
/* let edad = prompt("Ingresa tu edad:");

let soyMayorDeEdad = edad >= 18;
console.log(`Soy mayor de edad: ${soyMayorDeEdad}`); */

//N°19
let edad = prompt("Ingresa tu edad:");
let altura = prompt("Ingresa tu altura en cm:");
let puedeSubir = edad > 6 && altura >= 120;
console.log(`Puedes subir a la atraccion: ${puedeSubir}`);

//N°20
let pase = prompt("¿Que tipo de pase tenes?(VIP,NORMAL,LIMITADO)");
let saldo = prompt("Ingresa tu saldo disponible");
let puedePasar = pase === "VIP" || saldo > 1000;
console.log(`Puedes ingresar: ${puedePasar}`);
