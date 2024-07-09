// Strings
let str1 = "Hola Mundo";
let str2 = "JavaScript es genial";
let str3 = "¡Bienvenidos!";

console.log(str1.length); // Longitud del string
console.log(str2.toUpperCase()); // Convertir a mayúsculas
console.log(str3.includes("Bienvenidos")); // Verificar si contiene un substring

console.log(str1.charAt(5)); // Obtener carácter en una posición específica
console.log(str2.split(" ")); // Dividir el string en un array
console.log(str3.replace("¡Bienvenidos!", "¡Hola a todos!")); // Reemplazar parte del string

// Numbers
let num1 = 42;
let num2 = 3.14159;
let num3 = -15;

console.log(num1.toString()); // Convertir a string
console.log(num2.toFixed(2)); // Fijar decimales
console.log(Math.abs(num3)); // Valor absoluto

console.log(Math.round(num2)); // Redondear
console.log(Math.pow(num1, 2)); // Potencia
console.log(Math.max(num1, num2, num3)); // Máximo valor