/*Crear un array que contenga 5 palabras y recorrer dicho array utilizando 
un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.*/
var fruits = ["banana", "manzana", "pera", "kiwi", "tomate"];
for (first=0; first <=fruits.length-1; first++){
    alert(fruits[first])
}

/* Al array anterior convertir la primera letra de cada palabra en mayúscula
 y mostrar una alerta por cada palabra modificada.*/
for (first = 0; first <= fruits.length-1; first++){
    alert(fruits[first].substring(0,1).toUpperCase()+fruits[first].substring(1).toLowerCase())
}

/* Crear una variable llamada “sentence” que tenga un string vacío, 
luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra
dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.*/
var sentence= [];
for (first = 0; first <= fruits.length-1; first++){
    sentence.push(fruits[first])
}
alert(sentence);

/* Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con
 el número de la repetición, es decir que al final de la ejecución del bucle for deberia haber
  10 elementos dentro del array, desde el número 0 hasta al numero 9. Mostrar por la consola
   del navegador el al array final (utilizar console.log).*/
var second= []
for (i=0;i<=9;i++){
    second.push(i)
}
console.log(second);