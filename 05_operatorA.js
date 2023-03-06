var word1="Javascript";
var word2="Google Chrome";
var word3="Developer Smart";

function squareOfWordLength(value1) { 

var var1= value1;
var script= var1.length**2;
    console.log(`Given String is ${value1}`);
    console.log(`Length of ${value1} String is ${value1.length}`);
    console.log(`Square of the given String is ${script}`);
console.log('***************************************************');
}
squareOfWordLength(word1 ); //Function call or Function invoke
squareOfWordLength(word2 );
squareOfWordLength(word3 );


function addNum(num1,num2) {
   var addition= num1 + num2;
   return addition;
    
}
var sum=addNum(20,30); 
console.log(`Addition of two value is : ${sum}`);