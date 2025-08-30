/* Assignment 1: Age Category Message */
// Ask the user for their age.
// If they are under 18, print “You are a minor.” 
// If they are between 18 and 60, print “You are an adult.” 
// If they are above 60, print “You are a senior citizen.”
{
    let age = prompt("Enter Your Age : ");

    if (age > 60) {
        console.log("You are a senior Citizen");
        alert("You are a senior Citizen");
    } else if (age >= 18 && age <= 60) {
        console.log("You are an Adult");
        alert("You are an Adult");
    } else {
        console.log("You are Minor");
        alert("You are Minor");
    }
}

/* Assignment 2: Even or Odd Sum */
// Take two numbers from the user using prompt().
// If the sum of both numbers is even, print “Even Sum”; otherwise, print “Odd Sum.”
{
    let num1 = Number(prompt("Enter One Number :"));
    let num2 = Number(prompt("Enter Second Number :"));
    let sum = num1 + num2;

    if (sum % 2 === 0) {
        alert("Even Sum");
        console.log("Even Sum");
    } else {
        alert("Odd Sum");
        console.log("Odd Sum");
    }
}

/* Assignment 3: Character Case Checker */
// Ask the user for a single character.
// Check if it's uppercase, lowercase, or neither (not a letter).
{
    let chr_x = prompt("Enter Single Character");

    if (chr_x >= "A" && chr_x <= "Z") {
        alert("Character Upper case");
    } else if (chr_x >= "a" && chr_x <= "z") {
        alert("Character Lower case");
    } else {
        alert("Not a Letter (or it might be a number)");
    }
}

/* Assignment 4: Largest of Three Numbers */
// Take three numbers as input and print the largest number among them without using Math.max().
{
    let Num_1 = prompt("Enter First Number : ");
    let Num_2 = prompt("Enter Second Number : ");
    let Num_3 = prompt("Enter Third Number : ");

    if (Num_1 == Num_2 || Num_1 == Num_3) {
        alert("Bro, those numbers are the same. Change numbers.");
    } else if (Num_1 < Num_3 && Num_2 < Num_3) {
        alert("Third is Biggest");
    } else if (Num_3 < Num_2 && Num_1 < Num_2) {
        alert("Second is Biggest");
    } else {
        alert("First is Biggest");
    }
    console.log("Num_1 : " + Num_1);
    console.log("Num_2 : " + Num_2);
    console.log("Num_3 : " + Num_3);
}

/* Assignment 5: Leap Year Checker */
// Ask the user for a year and determine if it's a leap year or not.
{
    let year = Number(prompt("Enter Year : "));

    if ((year % 4) === 0) {
        if ((year % 100 === 0) && (year % 400 !== 0)) {
            alert("Not a Leap Year");
        } else {
            alert("Leap Year");
        }
    } else {
        alert("Not a Leap Year");
    }
}

/* Assignment 6: Simple Calculator */
// Ask the user for two numbers and an operator (+, -, *, /).
// Perform the operation and display the result.
{
    let num_1 = Number(prompt("Enter Number : "));
    let num_2 = Number(prompt("Enter Number : "));
    let operator = prompt("Enter Operator (+, -, *, /) : ");
    let ans = 0;

    if (operator === '+') {
        ans = num_1 + num_2;
        alert(ans);
    } else if (operator === '-') {
        ans = num_1 - num_2;
        alert(ans);
    } else if (operator === '*') {
        ans = num_1 * num_2;
        alert(ans);
    } else if (operator === '/') {
        ans = num_1 / num_2;
        alert(ans);
    } else {
        alert("Invalid Operator");
    }
}

/* Assignment 7: Positive, Negative, or Zero */
// Take a number input and check if it is positive, negative, or zero.
{
    let num = Number(prompt("Enter Number : "));

    if (num < 0) {
        alert("Given number is 'Negative'");
    } else if (num > 0) {
        alert("Given number is 'Positive'");
    } else if (num === 0) {
        alert("Given number is 'Zero'");
    } else {
        alert("Enter Number Only");
    }
}

/* Assignment 8: User Greeting */
// Ask the user for a name and time (24-hour format). 
// Greet them accordingly:
//   5 AM–12 PM: "Good Morning, [Name]!"
//   12 PM–5 PM: "Good Afternoon, [Name]!"
//   5 PM–9 PM: "Good Evening, [Name]!"
//   9 PM–5 AM: "Good Night, [Name]!"
{
    let uname = prompt("Enter Your Name : ");
    let Time = Number(prompt("Enter Current Time Using 24-hour Format (0-23) : "));

    if (Time >= 5 && Time <= 12) {
        console.log("Good Morning " + uname);
    } else if (Time > 12 && Time <= 17) {
        console.log("Good Afternoon " + uname);
    } else if (Time > 17 && Time <= 21) {
        console.log("Good Evening " + uname);
    } else if ((Time > 21 && Time <= 24) || (Time >= 0 && Time < 5)) {
        console.log("Good Night " + uname);
    } else {
        console.log("Please enter time in 24-hour format");
    }
}

/* Assignment 9: Traffic Light System */
// Ask the user for a traffic light color (red, yellow, green).
// Print appropriate messages:
//   Red: "Stop!"
//   Yellow: "Get Ready!"
//   Green: "Go!"

{
    let light = prompt("What is the color of the traffic light (red, yellow, green) ");

    if (light === "red") {
        alert("Stop!");
    } else if (light === "yellow") {
        alert("Get Ready!");
    } else if (light === "green") {
        alert("Go!");
    } else {
        alert("Invalid choice. Type: 'red', 'yellow', or 'green'");
    }
}

/* Assignment 10: Multiplication Table */
// Ask the user for a number and print its multiplication table up to 10.
{
    let num = Number(prompt("Enter Number to make Table"));

    for (let i = 1; i <= 10; i++) {
        console.log(num, " * ", i, " = ", num * i);
    }
}

/* Assignment 11: Grade Calculator */
// Ask the user for their marks (0 - 100). 
// Assign grades based on the range:
//   90 - 100: A
//   80 - 89: B
//   70 - 79: C
//   60 - 69: D
//   Below 60: F

{
    let marks = prompt("Enter Your Marks ");

    if (marks >= 90 && marks <= 100) {
        alert("You got A");
    } else if (marks >= 80 && marks <= 89) {
        alert("You got B");
    } else if (marks >= 70 && marks <= 79) {
        alert("You got C");
    } else if (marks >= 60 && marks <= 69) {
        alert("You got D");
    } else if (marks < 60) {
        alert("You got F");
    } else {
        alert("Invalid Input");
    }
}

/* Assignment 12: Simple Login System */
// Set a predefined username and password.
// Ask the user to enter their credentials using prompt().
// If correct, print “Login Successful”; otherwise, print “Incorrect username or password.”

{
    let Real_uname = "Sandip";
    let Real_Pword = "Sandip";

    let unameInput = prompt("Enter Your Username: ");
    let pwordInput = prompt("Enter your Password:  ");

    if (Real_uname === unameInput && Real_Pword === pwordInput) {
        alert("Login Successful");
    } else {
        alert("Incorrect Username or Password");
    }
}

/* Assignment 13: Swapping Without Third Variable */
// Take two numbers and swap their values without using a third variable.

{
    let a = 20, b = 100;
    console.log("Before swapping: a =", a, ", b =", b);

    // Swap using arithmetic
    a = a + b;
    b = a - b;
    a = a - b;
    console.log("After swapping (arithmetic): a =", a, ", b =", b);

    // Swap using array destructuring
    let x = 10, y = 20;
    console.log("Before swapping: x =", x, ", y =", y);
    [x, y] = [y, x];
    console.log("After swapping (destructuring): x =", x, ", y =", y);
}

/* Assignment 14: FizzBuzz (Multiple of Both) */
// Ask the user for a number.
// If it's a multiple of both 3 and 5, print “FizzBuzz”;
// if only 3, print “Fizz”;
// if only 5, print “Buzz”;
// otherwise, print the number itself.
{
    let number = Number(prompt("Enter Your Number : "));

    if (number % 3 === 0 && number % 5 === 0) {
        alert("FizzBuzz");
    } else if (number % 3 === 0) {
        alert("Fizz");
    } else if (number % 5 === 0) {
        alert("Buzz");
    } else {
        alert(number);
    }
}

/* Assignment 15: Number Reversal */
// Take a three-digit number from the user and print its reverse.
// Example: 123 → 321.
{
    let numInput = Number(prompt("Enter Number : "));
    let rev = 0;

    while (numInput > 0) {
        let digit = numInput % 10;
        rev = rev * 10 + digit;
        numInput = Math.floor(numInput / 10);
    }
    console.log("Reversed Number:", rev);
}

/* Assignment 16: Sum of Digits */
// Take a number from the user and print the sum of its digits.
// Example: 123 → 1 + 2 + 3 = 6.
{
    let numVal = Number(prompt("Enter Number : "));
    let sum = 0;

    while (numVal > 0) {
        sum += numVal % 10;
        numVal = Math.floor(numVal / 10);
    }
    console.log("Sum of Digits:", sum);
}

/* Assignment 17: Palindrome Checker */
// Ask the user for a word.
// Check if it reads the same forward and backward.
// Print “Palindrome” or “Not a Palindrome.”

{
    let word = prompt("Enter a word: ");
    let reversed = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }

    if (word === reversed) {
        alert("Palindrome");
    } else {
        alert("Not a Palindrome");
    }
}

/* Assignment 18: Reverse Without String Methods */
// Ask the user for a text and reverse it without using .split(), .reverse(), or .join().
{
    let text = prompt("Enter text: ");
    let revText = "";

    for (let i = text.length - 1; i >= 0; i--) {
        revText += text[i];
    }
    console.log("Original Text:", text);
    console.log("Reversed Text:", revText);
}

/* Assignment 19: Find Second Largest */
// Take three numbers as input and find the second largest number 
// (without using sort() or Math.max()).
{
    let num1Val = Number(prompt("Enter 1st Number"));
    let num2Val = Number(prompt("Enter 2nd Number"));
    let num3Val = Number(prompt("Enter 3rd Number"));

    if ((num1Val < num2Val && num1Val > num3Val) || (num1Val < num3Val && num1Val > num2Val)) {
        console.log(num1Val, "is the second largest value");
    } else if ((num2Val < num3Val && num2Val > num1Val) || (num2Val < num1Val && num2Val > num3Val)) {
        console.log(num2Val, "is the second largest value");
    } else if ((num3Val < num1Val && num3Val > num2Val) || (num3Val < num2Val && num3Val > num1Val)) {
        console.log(num3Val, "is the second largest value");
    } else {
        console.log("Invalid Input");
    }
}

/* Assignment 20: Find First Non-Repeating Character */
// Ask the user for a word and find the first character that does not repeat.
// Example: "hello" → 'h' (since 'e', 'l', and 'o' repeat).
{
    let inputStr = prompt("Enter String: ");

    for (let i = 0; i < inputStr.length; i++) {
        let found = false;
        for (let j = 0; j < inputStr.length; j++) {
            if (i !== j && inputStr[i] === inputStr[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            console.log(inputStr[i], "is the first non-repeating character");
            break;
        }
    }
}

/* Assignment 21: Even Digit Counter */
// Take a number from the user and count how many even digits it has.
{
    let numberStr = prompt("Enter Number: ");
    let evenDigitCount = 0;

    for (let i = 0; i < numberStr.length; i++) {
        if (Number(numberStr[i]) % 2 === 0) {
            evenDigitCount++;
        }
    }
    console.log("Even Digit Count:", evenDigitCount);
}

/* Assignment 22: Nested Condition Challenge */
// Ask the user for their age and salary.
// Print a message based on conditions:
//   If age is below 18, print “Not eligible”
//   If age is 18 or more but salary is less than ₹20,000, print “Low Salary”
//   If salary is ₹50,000 or more, print “High Salary”
//   Otherwise, print “Medium Salary”
{
    let userAge = Number(prompt("Enter Your Age: "));
    let userSalary = Number(prompt("Enter Your Salary: "));

    if (userAge < 18) {
        console.log("Not eligible");
    } else if (userAge >= 18 && userSalary < 20000) {
        console.log("Low Salary");
    } else if (userSalary >= 50000) {
        console.log("High Salary");
    } else {
        console.log("Medium Salary");
    }
}

/* Assignment 23: Toggle Case */
// Ask the user for a word and toggle the case of every character.
// Example: "HeLLo" → "hEllO"
{
    let inputWord = prompt("Enter String: ");
    let toggledWord = "";

    for (let i = 0; i < inputWord.length; i++) {
        if (inputWord[i] >= "A" && inputWord[i] <= "Z") {
            toggledWord += inputWord[i].toLowerCase();
        } else if (inputWord[i] >= "a" && inputWord[i] <= "z") {
            toggledWord += inputWord[i].toUpperCase();
        } else {
            toggledWord += inputWord[i];
        }
    }
    console.log("Original:", inputWord);
    console.log("Toggled:", toggledWord);
}

/* Assignment 24: Find the Missing Number in a Sequence */
// Take a list of consecutive numbers (with one or more missing) and find the missing number(s).
// Example: [1, 2, 3, 5] → Missing number is 4.
{
    let listData = [1, 2, 3, 5, 7, 8, 10];
    let missingNumbers = [];

    let firstItem = listData[0];
    let lastItem = listData[listData.length - 1];

    for (let i = firstItem; i <= lastItem; i++) {
        if (!listData.includes(i)) {
            missingNumbers.push(i);
        }
    }
    console.log("List Data:", listData);
    console.log("Missing Numbers:", missingNumbers);
}

/* Assignment 25: Convert Number to Words */
// Take a single digit number and print it in words.
// Example: 1 → "One", 2 → "Two"
{
    let singleDigit = Number(prompt("Enter Single Digit Number (0-9): "));

    if (singleDigit >= 0 && singleDigit < 10) {
        switch (singleDigit) {
            case 0:
                console.log("Zero");
                break;
            case 1:
                console.log("One");
                break;
            case 2:
                console.log("Two");
                break;
            case 3:
                console.log("Three");
                break;
            case 4:
                console.log("Four");
                break;
            case 5:
                console.log("Five");
                break;
            case 6:
                console.log("Six");
                break;
            case 7:
                console.log("Seven");
                break;
            case 8:
                console.log("Eight");
                break;
            case 9:
                console.log("Nine");
                break;
            default:
                console.log("Invalid Input");
                break;
        }
    } else {
        console.log("Enter a single digit number, e.g., 0,1,2,3..,9");
    }
}

/* Additional Snippet: Variable Assignment and Type Checking */
{
    let a = 10;
    console.log(a);
    console.log(typeof a);
}
