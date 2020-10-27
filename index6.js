// Item a)
function suma (number1,number2) {
    return number1 + number2;
}
var answer = suma(5,7)
console.log(answer);

// Item b)
function suma(x,y){

    if(typeof(x)!="number" || typeof(y)!="number")
        return console.log('NaN')

    else{
        return x+y;
    }
    
}
var result = suma(5,"p");
console.log(result);

// Item c)
function validate (num){
    if (Number.isInteger(num)){
        return true;
    }
    else {
        return false;
    }
}
console.log(validate(1))


// Item d)

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

// Item e)
function validate(numb){
    if(Number.isInteger(numb)){
        return numb
    }
    else{
        return false
    }
}

var num1, num2;

function suma(num1,num2){
    return validate(num1)+validate(num2);
}

var resultado5 = suma(5,'p');

console.log(resultado5);