/* Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de 
dicha variable en la consola del navegador.*/
function suma (number1,number2) {
    return number1 + number2;
}
var answer = suma(5,7)
console.log(answer);

/*A la función suma anterior, agregarle una validación para controlar
 si alguno de los parámetros no es un número, mostrar una alerta aclarando que 
 uno de los parámetros tiene error y retornar el valor NaN como resultado.*/
function suma(x,y){

    if(typeof(x)!="number" || typeof(y)!="number")
        return console.log('NaN')

    else{
        return x+y;
    }
    
}
var result = suma(5,"p");
console.log(result);

/*Crear una función validate integer que reciba un número como parámetro y 
evuelva verdadero si es un número entero.*/
function validate (num){
    if (Number.isInteger(num)){
        return true;
    }
    else {
        return false;
    }
}
console.log(validate(1))


/*A la función suma del ejercicio 6b) agregarle una llamada que valide 
que los números sean enteros. En caso que haya decimales mostrar un alerta con
 el error y retorna el número convertido a entero (redondeado).*/

function suma(xx,yy){

    if(typeof(xx)!="number" || typeof(yy)!="number"){
        return console.log('NaN')
    }
    else{
        if(validate(xx)==false || validate (yy)== false){
            return "Rounded to " +Math.round(xx+yy)
            
        } else{
            return xx+yy
        }   
    }
}
var newresult = suma(3.14,5);
console.log(newresult);


