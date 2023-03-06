console.log(`==== Arithmetic Operator ====`);
var num1=4;
var num2=2;
var result=num1 + num2;
console.log(`Addition is ${result}`);

result=num1 - num2;
console.log(`Substraction is ${result}`);

result=num1*num2;
console.log(`Multiplication is ${result}`);

result=num1 ** num2;
console.log(`Exponential is ${result}`);

result=num1 / 3;
console.log(`Division is ${result}`);//Division

result=num1 % 3;
console.log(`Reminder is ${result}`); //Modulus --> shows the Reminder

var num = 10; //Compound Addition
num+=20; //num = num + 20
console.log(`Compound Addition += ${num}`);

console.log(`Comprasion Operators`);
var num3=10;
console.log(num3==10);

//*IMPORTANT*
console.log(`Comprasion Operators using ==`);
var num3="10";
var num4=10;
console.log(num3==10); //"10"=10 But Inside js--> It's doing Auto Conversion, converting string to number e.g 10 = 10["10" converting this string to number and then it is comparing] called as Implicit conversion. It is not comparing the datatypes FYI


//*IMPORTANT*
console.log(`Strictly Equal ===`);
var num3="10";
var num4=10;
console.log(num3===10); // It's not doing Auto Conversion.

console.log(num3 != num4); // not Equal

console.log(num3 !== num4); // strictly Equal

console.log(10 > 20); // greater than

console.log(10 < 20); // less than

var marks=35;
console.log(marks >= 35); // greater than equal

var marks=35;
console.log(marks <= 35); // less' than equal



//*************************** TERNARY OPERATOR ******************************
var marks=70;
var result=marks >= 60 ? "Allow for Interview " : "You Not Eligible";
console.log(result);


var age=21;
var ageRes = age >= 22 ? "Congratulations...." : "Better Luck Next Time";
console.log(ageRes);


//******************** EVEN OR ODD check usiny ternary operator***********************
console.log("EVEN OR ODD");
var myNumber = 7;
//Even - Divide by 2 and reminder is 0
console.log(myNumber%2 == 0);  //understand this it is comparing the value - reminder will be 1 so its comparing 1==0
var result = myNumber%2==0 ? "Even" : "Odd";
console.log(result);