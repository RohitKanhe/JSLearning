var greet="Good Morning";
console.log(typeof greet);

console.log("Find The Total Number of charasterstics available into this string variable - greet");
var greetLength = greet.length;
console.log(greetLength);

console.log("Find the character by using Index Value");
var charAtIndex3= greet.charAt(5);
console.log("Character availabe at Index 3 is - ", charAtIndex3);

console.log("Find the Last Character");
var charAtLastIndex= greet.charAt(greetLength-1);
console.log("Last character Is : ", charAtLastIndex);

console.log("Find the Index By character Value ");
var indexOfM = greet.indexOf('M');
console.log("Index of Char M is : ",indexOfM);

console.log("Find Index of Char which is not availabe into this string : ", greet.indexOf('z'));
console.log("Index of o Char : ", greet.indexOf('o'));
console.log("Index of o Char using lastInedxOf : ", greet.lastIndexOf('o'));

var replaceResult = greet.replace("Morning", "Evening");
console.log(replaceResult);
console.log(greet);

console.log("Upper Case ", replaceResult.toUpperCase());
console.log("Lower Case ", replaceResult.toLowerCase());

var myName = "   Rohit  Kanhe   ";
var myNameAfterTrim=myName.trim();
console.log("Removing Extra start and End spaces using trim(): ", myNameAfterTrim, myName.length,myNameAfterTrim.length );


//Find the total extra spaces removed from the string - myName
var count= myName.length-myNameAfterTrim.length;
console.log(count);

//If you want to remove the start or end spaces
console.log(myName.trimStart(), myName.trimEnd());

//If you want to check any char includes in the string
console.log("includes()"); 
console.log("Is substring Mor includes in the greet or not : ", greet.includes("Mor"));
console.log("Is substring Afternoon includes in the greet or not : ", greet.includes("afternoon"));
console.log("Is substring o includes in the greet or not : ", greet.includes("o"));

//If you want want a slice of any string
console.log("slice() Method");
var sliceResult=greet.slice(5,12);
console.log(sliceResult);
console.log(greet.slice(1,6));

//If you want to split the string [IMPORTANT FOR INTERVIEW]
console.log("split() Method");
var greet = "Good Morning My Dear Friend";
var splitResult = greet.split(" ")
console.log(splitResult);
console.log(typeof splitResult );
console.log("Total Words: ", splitResult );



var myFriendList="Ratan Tata, Billgates, Stew Job, Elon Musk";
var splitMyFriendList = myFriendList.split(",");
console.log(splitMyFriendList);
console.log(splitMyFriendList.length);


 





