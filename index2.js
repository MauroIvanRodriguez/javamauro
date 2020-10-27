/* Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto
 en mayúscula (utilizar toUpperCase).*/
var profesion = "pediatrics";
console.log( "profesion".toUpperCase());

/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
con los primeros 5 caracteres guardando el resultado en una nueva variable 
(utilizar substring).*/
var fiveLetters = profesion.substring(0,5);

/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
 con los últimos 3 caracteres guardando el resultado en una nueva variable 
(utilizar substring).*/
var lastThreeLetters = profesion.substring(7,10);

/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
 con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en 
una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/
var profesion = "pediatrics";
var complete1 = profesion.substring(0,1).toUpperCase() + profesion.substring(1).toLowerCase();
console.log(complete1);

/* Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
Encontrar la posición del primer espacio en blanco y guardarla en una variable 
(utilizar indexOf).*/
var words= "Ingeniería Civil";
var blankSpace = words.indexOf(" ");

/* Crear una variable de tipo string con al menos 2 palabras largas 
(10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios 
anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en 
mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, 
toLowerCase y el operador +).*/
var longWords = "ingeniería electromecánica"
var final1 = longWords.substring(0,1).toUpperCase() + longWords.substring(1,11).toLowerCase() + longWords.substring(11,12).toUpperCase() + longWords.substring(12,26).toLowerCase();
console.log(final1);

//Results
console.log(fiveLetters);
console.log(lastThreeLetters);
console.log(blankSpace);





