// Function with no Arguments and no return value
function langName(){
    console.log("Js is my favourite language")
    
    }
    langName()// function call or invoke




var firstName ="Rohit";
var lastName ="Kanhe";
var cllg="P.R Pote college of Engineering and Management Amravati";
    function personDetails(value1, value2, value3) { 
        console.log("My First Name is", value1, "and Last Name is", value2, "and I am studied in",value3);
        
    
    }
    personDetails(firstName, lastName, cllg); //Function call or Function invoke
    


    
    var str1="Virat";
    var str2="Anushka";

    var num1 = 1000;
    var num2 = 2000;
    
    function swapVariables(value1, value2) { //var value1 = num1, var value2 = num2
        console.log("Before Swap: ", value1, value2);
        var temp = value1;
        value1 = value2;
        value2 = temp;
        console.log("After Swap: ", value1, value2);
    
    }
    swapVariables(str1, str2); //Function call or Function invoke
    swapVariables(num1, num2);



    function addThreeValues(num1, num2, num3){
        var sum = num1 + num2 + num3;
        return sum;
        
        }
        var sumResult=addThreeValues(10.23, 600, 40);
        console.log(sumResult);
   

        function addThreestr(str1, str2, str3){
            var sum = str1 + str2 + str3;
            return sum;
            
            }
            var sumResult=addThreestr("Hello ","Good", " Morning");
            console.log(sumResult);