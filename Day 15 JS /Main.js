// Assignments:

// 1. Age Category Message – 
// Ask the user for their age.
// If they are under 18,    print “You are a minor.” 
// If they are between 18 and 60,     print “You are an adult.” 
// If they are above 60,   print “You are a senior citizen.”

// let age = prompt("Enter Your Age : ")

// if (age > 60) {
//     console.log("You are a sinior Citizen");
//     alert("You are a sinior Citizen")
// }
// else if (age >= 18 && age >= 60) {
//     console.log("You are an Adult")
//     alert("You are an Adult")
// }
// else {
//     console.log("You are Minor")
//     alert("You are Minor")
// }

// ------------------

// 2. Even or Odd Sum – 
// Take two numbers from the user using prompt().
// If the sum of both numbers is even, 
// print “Even Sum”; 
// otherwise, 
// print “Odd Sum.”

// let num1 = Number(prompt("Enter One Number :"))
// let num2 = Number(prompt("Enter Second Number :"))

// let sum = num1 + num2

// if ((sum % 2) == 0) {
//     alert("Even Sum")
//     console.log("Even Sum")
// }
// else {
//     alert("Odd")
//     console.log("Odd Sum")
// }

// -----------------------------

// 3. Character Case Checker – 
// Ask the user for a single character.
// Check if it's uppercase, lowercase, or neither (not a letter).

// let chr_x = prompt("Enter Single Character")

// if (chr_x >= "A" && chr_x <="Z" ) {
//     alert("Character Upper case")

// }
// else if (chr_x >= "a" && chr_x <= "z") {
//     alert("Character Lower case")
// }
// else {
//     alert("Not a Latter only Number")
// }

// --------------------------------------

// 4. Largest of Three Numbers – 
// Take three numbers as input and 
// print the largest number among them without using Math.max().

// let Num_1 = prompt("Enter Frist Number : ")
// let Num_2 = prompt("Enter Second Number : ")
// let Num_3 = prompt("Enter Third Number : ")

// if (Num_1 == Num_2 || Num_1 == Num_3) {
//     alert("Bro those Number Are Same Chnage Number ")
// }
// else if (Num_1 < Num_3 && Num_2 < Num_3) {
//     alert("Third is Biggest ")
// }
// else if (Num_3 < Num_2 && Num_1 < Num_2) {
//     alert("Second is Biggest ")
// }
// else {
//     alert("Frist is Biggest ")
// }
// console.log("Num_1 : " + Num_1)
// console.log("Num_2 : " + Num_2)
// console.log("Num_3 : " + Num_3)

// --------------------------------------

// 5. Leap Year Checker – 
// Ask the user for a year and determine if it's a leap year or not.

// let year = Number(prompt("Enter Year : "))

// if ((year % 4) == 0) {
//     if (((year % 100) == 0) && ((year % 400) == 0)) {
//         alert("Leap Year")
//     }
//     else {
//         alert("Not Leap Year")
//     }
// }
// else {
//     alert("Not Leap Year")
// }

// --------------------------------------

// 6. Simple Calculator – 
// Ask the user for two numbers and an operator(+, -, *, /).
// Perform the operation and display the result.

// let num_1 = Number(prompt("Enter Number : "))
// let num_2 = Number(prompt("Enter Number : "))

// let operator = prompt("Enter Operator (+, -, *, /) : ")

// let ans = 0

// if (operator == '+') {
//     ans = num_1 + num_2
//     alert(ans)
// }
// else if (operator == '-') {
//     ans = num_1 - num_2
//     alert(ans)
// }
// else if (operator == '*') {
//     ans = num_1 * num_2
//     alert(ans)
// }
// else if (operator == '/') {
//     ans = num_1 / num_2
//     alert(ans)
// }
// else {
//     alert("Invalid Operator")
// }

// --------------------------------------

// 7. Positive, Negative, or Zero – 
// Take a number input and 
// check if it is positive, negative, or zero.

// let num = Number(prompt("Enter Nummber : "))

// if (num < 0) {
//     alert("Given number is 'Negative'")
// }
// else if (num > 0) {
//     alert("Given number is 'Positive'")
// }
// else if(num == 0) {
//     alert("Given number is 'Zero'")
// }
// else {
//     alert("Enter Number Only")
// }

// --------------------------------------

// 8. User Greeting – 
// Ask for the user's name and time (24-hour format). 
// Greet them accordingly:
//      5 AM–12 PM: "Good Morning, [Name]!"
//      12 PM–5 PM: "Good Afternoon, [Name]!"
//      5 PM–9 PM: "Good Evening, [Name]!"
//      9 PM–5 AM: "Good Night, [Name]!"

// let uname = prompt("Enter Your Name : ")
// let Time = Number(prompt("Enter Current Time Using 24-hours Format (5, 12) : "))

// console.log(x)


// if ((Time >= 5) && (Time <= 12)) {
//     console.log("Good Morning " + uname)
// }
// else if ((Time > 12) && (Time <= 17)) {
//     console.log("Good Afternoon " + uname)
// }
// else if ((Time > 17) && (Time <= 21)) {
//     console.log("Good Evening " + uname)
// }
// else if (((Time > 21) && (Time <= 24)) || (Time == 0) || ((Time >= 1) && (Time <= 4))) {
//     console.log("Good Night " + uname)
// }
// else {
//     console.log("Plase enter time in 24 Hour formate ")
// }

// --------------------------------------

// 9. Traffic Light System – 
// Ask the user for a traffic light color(red, yellow, green).
// Print appropriate messages:
// Red: "Stop!"
// Yellow: "Get Ready!"
// Green: "Go!"

// let light = prompt("What is color of trafic light (red, yellow, green) ")

// if (light == "red") {
// alert("Stop!")
// }
// else if (light == "yellow") {
//     alert("Get Ready !")
// }
// else if (light == "green") {
//     alert("Go!")
// }
// else {
//     alert("invalid Choice type : 'red' OR 'yellow' or 'green' ")
// }

// --------------------------------------

// 10. Multiplication Table – 
// Ask the user for a number and print its multiplication table up to 10.

// let num = Number(prompt("Enter Number to Mack Table"))

// for (let i = 1; i <= 10; i++) {
//     console.log(num, " * ", i, " = ", num * i)
// }


// --------------------------------------

// 11. Grade Calculator – 
// Ask the user for their marks(0 - 100). 
// Assign grades based on the range:
//      90 - 100: A
//      80 - 89: B
//      70 - 79: C
//      60 - 69: D
//      Below 60: F


// let num = prompt("Enter Your marks ")

// if (num >= 90 && num <= 100) {
//     alert("You got A")
// }
// else if (num >= 80 && num <= 89) {
//     alert("You got B")
// }
// else if (num >= 70 && num <= 79) {
//     alert("You got C")
// }
// else if (num >= 60 && num <= 69) {
//     alert("You got D")
// }
// else if (num <= 60) {
//     alert("You got F")
// }
// else {
//     alert("Invalid Input")
// }

// --------------------------------------

// 12. Simple Login System – 
// Set a predefined username and password.
// Ask the user to enter their credentials using prompt().
// If correct, print “Login Successful”; 
// otherwise, print “Incorrect username or password.”

// let Real_uname = "Sandip"
// let Real_Pword = "Sandip"

// let uname = prompt("Enter Your Username: ")
// let pword = prompt("Enter your Password:  ")

// if (Real_uname == uname && Real_Pword == pword) {
//     alert("Login Successful")
// }
// else {
//     alert("“Incorrect Username or password")
// }

// --------------------------------------

// 13. Swapping Without Third Variable – 
// Take two numbers from the user and 
// swap their values without using a third variable.

// let a = 20
// let b = 100

// console.log(a, b)

// a = a + b // 120 
// console.log(a)

// b = a - b // 20 
// console.log(b)

// a = a - b // 100 
// console.log(a)

// console.log(a, b)

// let a = 10
// let b = 20

// console.log(a, b);

// [a, b] = [b, a];

// console.log(a, b)

// --------------------------------------

// 14. FizzBuzz(Multiple of Both) – 
// Ask the user for a number.
// If it's a multiple of both 3 and 5, print “FizzBuzz”; 
// if only 3, print “Fizz”; 
// if only 5, print “Buzz”; 
// otherwise, print the number itself.

// let num = Number(prompt("Enter You Number : "))

// if (((num % 3) == 0) && ((num % 5) == 0)) {
//     alert("FizzBuzz")
// }
// else if ((num % 3) == 0) {
//     alert("Fizz")
// }
// else if ((num % 5) == 0) {
//     alert("Buzz")
// }
// else {
//     alert(num)
// }

// --------------------------------------

// 15. Number Reversal – 
// Take a three - digit number from the user and print its reverse. 
// (Example: 123 → 321).

// let num = Number(prompt("Enter NUmber : "))

// let rev, sum = 0

// while (num > 0) {
//     rev = num % 10
//     sum = sum * 10 + rev
//     num = Math.floor(num / 10)
// }

// console.log(sum)

// --------------------------------------

// 16. Sum of Digits – 
// Take a number from the user and 
// print the sum of its digits. 
// (Example: 123 → 1 + 2 + 3 = 6).

// let num = Number(prompt("Enter Number : "))
// let sum = 0

// while (num > 0) {
//  // Temp = num % 10
//     sum = sum + (num % 10)
//     num = Math.floor(num / 10)
// }

// console.log(sum)

// --------------------------------------

// 17. Palindrome Checker – 
// Ask the user for a word.
// Check if it reads the same forward and backward.
// Print “Palindrome” or “Not a Palindrome.”

// // let txt = prompt("Enter Number : ")
// // let rev = ""

// // for (let i = txt.length - 1; i >= 0; i--) {
// //     rev += txt[i]
// // }

// // if (rev == txt) {
// //     alert("Palindrome")
// // }
// // else {
// //     alert("Not Palindrome")
// // }

// let txt = prompt("Enter Number : ")
// let rev = txt.split().reverse().join()

// if (txt == rev) {
//     alert("Palindrome")
// }
// else {
//     alert("Not Palindrome")
// }

// --------------------------------------

// 18. Reverse Without String Methods – 
// Ask the user for a number and 
// reverse it without using .split(), .reverse(), or .join().

// let txt = prompt("Enter txt : ")
// let rev = ""

// for (let i = txt.length - 1; i >= 0; i--) {
//     rev += txt[i]
// }

// console.log("Original Text : ", txt)
// console.log("Reverse Text : ", rev)

// --------------------------------------

// 19. Find Second argest – 
// Take three numbers as input 
// and find the second largest number
// (without using sort() or Math.max()).

// let a = Number(prompt("Enter 1 Number"))
// let b = Number(prompt("Enter 2 Number"))
// let c = Number(prompt("Enter 3 Number"))

// if (((a < b) && (a > c)) || ((a < c) && (a > b))) {
//     console.log(a,"A Is Second largest Value")
// }
// else if (((b < c) && (b > a)) || ((b < a) && (b > c))) {
//     console.log(b, "B Is Second largest Value")
// }
// else if (((c < a) && (c > b)) || ((c < b) && (c > a))) {
//     console.log(c, "C Is Second largest Value")
// }
// else {
//     console.log("Invalid Input BSDK")
// }

// --------------------------------------

// 20. Find First Non-Repeating Character – 
// Ask the user for a word and 
// find the first character that does not repeat.
// Example: hello → h(since e, l, and o repeat).

// let str = prompt("Enter String : ")

// for (let i = 0; i < str.length; i++) {
//     let found = false

//     for (let j = 0; j < str.length; j++) {
//         if (i != j && str[i] === str[j]) {
//             found = true;
//             break;
//         }
//     }
//     if (found == false) {
//         console.log(str[i], " is frist Not repeting word")
//         break
//     }
// }

// --------------------------------------

// 21. Even Digit Counter – 
// Take a number from the user and 
// count how many even digits it has.

// let num = prompt("Enter Number : ")

// let even_digit = 0
// for (let i = 0; i < num.length; i++){
//     if ((num[i] % 2) == 0) {
//         even_digit++
//     }
// }
// console.log(even_digit)

// --------------------------------------

// 22.  Nested Condition Challenge – 
// Ask the user for their age and salary.
// Print a message based on conditions:
// If age is below 18, 
//      print “Not eligible”
// If age is 18 or more but salary is less than ₹20,000, 
//      print “Low Salary”
// If salary is ₹50,000 or more, 
//      print “High Salary”
// .Otherwise, 
//      print “Medium Salary”

// let age = Number(prompt("Enter Your age :"))
// let salary = Number(prompt("Enter Your Salary :"))

// if (age < 18) {
//     console.log("Not eligible");
// }
// else if (age >= 18 && salary < 20000) {
//     console.log("Low Salary");
// }
// else if (salary >= 50000) {
//     console.log("High Salary");
// }
// else {
//     console.log("Medium Salary");
// }

// --------------------------------------

// 23. Toggle Case – 
// Ask the user for a word and toggle the case of every character.
// Example: HeLLo → hEllO.

// let str = prompt("Enter String : ")
// let New_str = ""

// for (let i = 0; i < str.length; i++) {
//     if (str[i] >= "A" && str[i] <= "Z") {
//         New_str += str[i].toLowerCase()
//     }
//     else if (str[i] >= "a" && str[i] <= "z") {
//         New_str += str[i].toUpperCase()
//     }
//     else {
//         New_str += str[i]
//     }
// }

// console.log(str);
// console.log(New_str);

// --------------------------------------

// 24. Find the Missing Number in a Sequence – 
// Take a list of consecutive numbers(except one missing) and
//  find the missing number.
// Example: 1, 2, 3, 5 → Missing number is 4.

// let List_Data = [1, 2, 3, 5, 7, 8, 10]
// let Copy = []


// let List_First_item = List_Data[0]
// let List_Last_item = List_Data[List_Data.length - 1]

// let found = 0
// for (let i = List_First_item; i <= List_Last_item; i++) {
//     if (!(List_Data.includes(i))) {
//         found++;
//         Copy.push(i)
//     }
// }

// console.log("List Data : " , List_Data);
// console.log("Missing Data : ", Copy);

// --------------------------------------

// 25. Convert Number to Words – 
// Take a single digit number and
//  print it in words(Example: 1 → One, 2 → Two).

// let num = Number(prompt("Enter Single Digit Number (0,1,2,3.....8,9) : "))


// if (num < 10 && num > -1) {
//     switch (num) {
//         case 0:
//             console.log("zero");
//             break;

//         case 1:
//             console.log("One");
//             break;

//         case 2:
//             console.log("two");
//             break;

//         case 3:
//             console.log("three");
//             break;

//         case 4:
//             console.log("four");
//             break;

//         case 5:
//             console.log("five");
//             break;

//         case 6:
//             console.log("six");
//             break;

//         case 7:
//             console.log("seven");
//             break;

//         case 8:
//             console.log("eight");
//             break;

//         case 9:
//             console.log("Nine");
//             break;

//         default:
//             console.log("Invalid Input")
//             break;
//     }
// }
// else {
//     console.log("Enter Single Digit Number Ex : 0,1,2,3..,9");
// }
