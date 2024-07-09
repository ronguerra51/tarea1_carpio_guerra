// Ejemplo de Strings
let str1 = "Hola Mundo";
let str2 = "JavaScript es genial";
let str3 = "¡Bienvenidos!";

console.log(str1.length); // Longitud del string
console.log(str2.toUpperCase()); // Convertir a mayúsculas
console.log(str3.includes("Bienvenidos")); // Verificar si contiene un substring

console.log(str1.charAt(5)); // Obtener carácter en una posición específica
console.log(str2.split(" ")); // Dividir el string en un array
console.log(str3.replace("¡Bienvenidos!", "¡Hola a todos!")); // Reemplazar parte del string

// Ejemplo de Numbers
let num1 = 42;
let num2 = 3.14159;
let num3 = -15;

console.log(num1.toString()); // Convertir a string
console.log(num2.toFixed(2)); // Fijar decimales
console.log(Math.abs(num3)); // Valor absoluto

console.log(Math.round(num2)); // Redondear
console.log(Math.pow(num1, 2)); // Potencia
console.log(Math.max(num1, num2, num3)); // Máximo valor


// Ejemplo Booleans
let bool1 = true;
let bool2 = false;
let bool3 = Boolean(1); // true

console.log(bool1.toString()); // Convertir a string
console.log(bool2.valueOf()); // Obtener valor primitivo
console.log(Boolean("false")); // Convertir string a booleano

console.log(!bool1); // Negación
console.log(bool1 && bool2); // AND lógico
console.log(bool1 || bool2); // OR lógico

// Ejemplo Objects
let obj1 = { nombre: "Juan", edad: 30 };
let obj2 = { nombre: "Ana", edad: 25, ciudad: "Madrid" };
let obj3 = { marca: "Toyota", modelo: "Corolla", año: 2020 };

console.log(Object.keys(obj1)); // Obtener claves
console.log(Object.values(obj2)); // Obtener valores
console.log(JSON.stringify(obj3)); // Convertir a JSON string

console.log(Object.assign({}, obj1, { país: "España" })); // Asignar nuevas propiedades
console.log(Object.entries(obj2)); // Obtener pares clave-valor
console.log("edad" in obj3); // Verificar si una propiedad existe

// Ejemplo Arrays
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["a", "b", "c", "d"];
let arr3 = [true, false, true, false];

console.log(arr1.length); // Longitud del array
console.log(arr2.push("e")); // Agregar elemento
console.log(arr3.join(", ")); // Convertir a string

console.log(arr1.pop()); // Eliminar último elemento
console.log(arr2.slice(1, 3)); // Obtener una sub-sección del array
console.log(arr3.includes(true)); // Verificar si contiene un valor