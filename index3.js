// Item a)
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months[4]);
console.log(months[10]);

// Item b)
console.log((months).sort());

// Item c)
months.unshift("Hi Enero");
months.push("Bye Diciembre");


// Item d)
months.shift();
months.pop();


// Item e)
months.reverse();


// Item f)
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var separacion = months.join("-");


// Item g)
var sevenMonths= months.slice(4,11);
console.log(sevenMonths);