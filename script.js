// let alpha;

// alpha = prompt("Please enter your name","umer");
// const ans = alpha.split('').reverse().join('');

// console.log(ans);


// function reverseString(str){

// return str.split('').reverse().join('');

// }

// let word = prompt("Enter any string", "abcd");
//  let result = reverseString(word);
//  console.log(result);


// Find the Largest Number – Write a function that takes an array of numbers and returns the largest number.

// function largeNumber(arg) {
//     return Math.max(...arg);
// }

// let number = [99,88,77,154,1245,14785]
// let result = largeNumber(number);
// console.log("The lagest number from array is " + result);


// // Write a function that checks if a given word is a palindrome (reads the same forward and backward).
// function palindromeWord(arg) {
//     let result = arg.split('').reverse().join('');
//     if(result===arg){
//         console.log("Given word is palindrome")
//     }
//     else {
//         console.log("Given word is not palindrome");
//     }

// }

// let word = prompt("Enter any word ", "umer");
//  palindromeWord(word)

// Write a function that returns the factorial of a given number.

// function factorialNum(arg) {
//     let num;
//     num = Number(arg);
    
//     for(let i=arg-1; i>=1; i--) {
//         num = num*i;
//     }
//     return num;

// }


// let number = prompt("Enter any number for their factorial", "4");
// let result = factorialNum(number);
// console.log(result);

// Write a function that takes an array of numbers and returns the sum of all elements.

// function sumOfArray(arg) {
//     let sum = 0;
//    for(let i=0; i<arg.length; i++){
//         sum = sum + arg[i];
//     }
//     return sum;
// }
// let arr = prompt("Enter the number of array");
// let array = arr.split(",").map(Number);    // split used to seperate the numbers  // .map(number) converts string of array into numbers


// let result = sumOfArray(array);
// console.log(result);

// //FizzBuzz – Print numbers from 1 to 100, replacing multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both with "FizzBuzz".

// let number;
// for (number = 1; number <= 100; number++) {
//     if (number % 3 == 0 && number % 5 == 0) {
//         console.log(number, "-> FizzBuzz");
//     } else if (number % 3 == 0) {
//         console.log(number, "-> Fizz");
//     } else if (number % 5 == 0) {
//         console.log(number, "-> Buzz");
//     } else {
//         console.log(number);
//     }
// }

// Find Even Numbers – Write a function that takes an array and returns a new array containing only the even numbers.

// function evenArray(arg) {
//     let final = [];
//     for(let i=0; i<arg.length; i++){
//         if(arg[i] % 2 == 0){
//         final.push(arg[i]);
//     }
   
// }
// return final;
// }

// let arr = [1,4,8,5,7,9,8,2,10,14];
// let result = evenArray(arr);
// console.log(result);

// Count Vowels in a String – Write a function that counts the number of vowels in a given string.

// function countString(arg){
//    let letter =  arg.toLowerCase().split('');
//    let count = 0;
//    for(let i=0; i<letter.length; i++){
//     if(letter[i] == 'a' || letter[i] == 'e' || letter[i] == 'i' || letter[i] == 'o' || letter[i] == 'u' ) {
//         count++ ;
//     }
//    }
//    return count;


// }

// let word = prompt("Enter anu string", "Pakistan");
// let result = countString(word);
// console.log(result);

// Generate Random Number – Write a function that generates a random number between two given numbers.

// function randomNumber(min, max ){
//     let final = Math.random()*(max - min) + min;
//         return final;
// }

// let random = 3;
// let number = 8;
// let result = randomNumber(random, number);
// console.log(result);

// Return sum of two numbers

// function sum(arg1, arg2) {
//     let a = Number(arg1);
//     let b = Number(arg2);
//      let result ; 
//     result = a+b ;
//     return result;

// }

// let number1 = prompt("Enter First Number", "0");
// let number2 = prompt("Enter Second Number", "0");
// let result = sum(number1 , number2);
// console.log("Sum of two numbers is =" + result);

// CONVERT mINUTES INTO SECONDS

// function minIntoSec(arg) {
//     let number = arg * 60 ;
//     return number;

// }

// let mins = prompt("Enter number of minutes to convert into Seconds" , "1");
// let number = Number(mins);
// let result = minIntoSec(number);
// console.log(number +" minutes into seconds are " + result);

// PRINT THE NEXT NUMBER FROM THE INTEGER PASSED 

// function nextNumber(arg) {
//     let number = arg ;
//     number++;
//     return number;
// }
// let result = prompt("Enter any Number to get the next Number" , "0");
// let number = Number(result);        // Number() method converts the string into number;
// let increment = nextNumber(number);
// console.log(increment);

// TO FIND AREA OF TRIANGLE
// function triArea(length, height) {
//     let area ;
//     area = (length*height)/2;
//     return area ;

// }
// let length = +prompt("Enter length of triangle" ,"1");         // + before prompt converts string into number;
// let height = +prompt("Enter height of a triangle" ,"1");
// let result = triArea(length, height);
// console.log("Area of Triangle is = " + result);


// Convert Age to Days 
function ageToDays(age) {
    let days ;
    days = age * 365;
    return days;

}

let age = +prompt("Enter any age to convert into days" , "1");
let result = ageToDays(age);
console.log(age + " years contains " + result + " days");





