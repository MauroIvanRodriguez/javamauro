// Item a)
var profesion = "pediatrics";
console.log( "profesion".toUpperCase());

// Item b)
var fiveLetters = profesion.substring(0,5);

// Item c)
var lastThreeLetters = profesion.substring(7,10);

// Item d)
var profesion = "pediatrics";
var complete1 = profesion.substring(0,1).toUpperCase() + profesion.substring(1).toLowerCase();
console.log(complete1);

// Item e)
var words= "Ingeniería Civil";
var blankSpace = words.indexOf(" ");

// Item f)
var longWords = "ingeniería electromecánica"
var final1 = longWords.substring(0,1).toUpperCase() + longWords.substring(1,11).toLowerCase() + longWords.substring(11,12).toUpperCase() + longWords.substring(12,26).toLowerCase();
console.log(final1);

//Results
console.log(fiveLetters);
console.log(lastThreeLetters);
console.log(blankSpace);





