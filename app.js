let miNombre = `Mateo`;
let miApellido = `Painemal`;
let miEdad = 21;
let miMascota = `Firulais`;
let edadMascota = 3;
console.log(miNombre, miApellido, miEdad, miMascota, edadMascota);

let nombreCompleto = miNombre + " " + miApellido;
console.log(nombreCompleto);

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
