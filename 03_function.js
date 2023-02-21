
var num1 = 100;
var num2 = 200;

var str1="Rohit";
var str2="Kanhe";

function swapVariables(value1, value2) { //var value1 = num1, var value2 = num2
    console.log("Before Swap: ", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap: ", value1, value2);

}
swapVariables(num1, num2); //Function call or Function invoke
swapVariables(str1, str2);





// Function with no Arguments and no return value
function showFullNmae(){
console.log("My Full Name is : Rohit Kanhe")

}
showFullNmae()// function call or invoke

// Function with  Arguments and no return value
function showAge(age){
    console.log("My age is : ", age);

}
showAge(25);



// Function with no Arguments and  return value
function fullName(){
    var name="Rohit Kanhe";
    return name;
}
var fName = fullName();
console.log(fName);



// Function with  Arguments and  return value
function sumOfNumbers(num1, num2, num3){
var sum = num1 + num2 + num3;
return sum;

}
var sumResult=sumOfNumbers(10, 40, 20);
console.log(sumResult);