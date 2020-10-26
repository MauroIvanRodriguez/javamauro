// Item a)
var profesion = "pediatrics";
/*console.log( "profesion".toUpperCase());*/

// Item b)
var cincoLetras = profesion.substr(0,5);

// Item c)
var ultimasTresLetras = profesion.substr(-3,3);

// Item d)
var primerLetra = profesion.substr(0,1);
var otrasLetras = profesion.substr(1,10);
var complete = primerLetra.toUpperCase() + otrasLetras.toLowerCase();

// Item e)
var frase= "Ingeniería Civil";
var espacio = frase.indexOf(" ");

// Item f)
var palabrasLargas = "ingeniería electromecánica"
var comienzo1= palabrasLargas.substr(0,1);
var comienzo2= palabrasLargas.substr(11,1);
var final1 = palabrasLargas.substr(1,10);
var final2 = palabrasLargas.substr(12,14);
var final = comienzo1.toUpperCase(0) + final1 + comienzo2.toUpperCase() + final2;


console.log(comienzo1);
console.log(comienzo2);
console.log(final);


/*Results
console.log(cincoLetras);
console.log(ultimasTresLetras);
console.log(primerLetra);
console.log(otrasLetras);
console.log(complete);
console.log(espacio);
*/



