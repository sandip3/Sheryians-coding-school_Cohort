// 1. ISBN Number

// Description:
//  An ISBN(International Standard Book Number) is a unique 10 - digit number assigned to books.The ISBN is valid if the sum of its digits, each multiplied by its position(1 to 10), is divisible by 11.

// Example
// Input: 02013145
// Output: Invalid ISB
// Explanation: The sum of the digits multiplied by their positions is not
// divisible by 11
// Input: 047195869
// Output: Valid ISB
// Explanation: (0×1 + 4×2 + 7×3 + … + 7×10) is divisible by 11.

// Hint: Use a loop to multiply each digit by its respective position and check divisibility by 11.

// {
//     // let num = Number(prompt("Enter 10 Digit Number"))
//     let num = 1234567890
//     let num_arr = [...num.toString()]

//     console.log(num_arr);

//     let x = []
//     if (isNaN(num) || (num_arr.length !== 10)) {
//         console.error("Enter Number Properly only 10 Digit Number");
//     } else {
//         num_arr.forEach((ele, index) => {
//             ele = Number(ele)
//             x.push(ele * (index + 1))
//         })

//         x = x.reduce((x, y) => x + y)
//     }

//     console.log((x % 11 === 0) ? "Valid ISBN Number" : "Invalid ISBN Number");
// }

// ------------------------

// 2. HCF / GCD

// Description:
//      The Highest Common Factor(HCF) or Greatest Common Divisor (GCD) of two numbers is the largest number that divides both numbers without leaving a remainder.

//     Example
// Input: a = 12, b = 18
// Output:
// Explanation: Factors of 12: { 1, 2, 3, 4, 6, 12 }, Factors of 18: { 1, 2, 3, 6, 9, 18 }.
// Common factors: { 1, 2, 3, 6 }. The highest is 6.

// Hint: Use the Euclidean algorithm: GCD(a, b) = GCD(b, a % b).

// ---------------------------------------------------- Method - 1 ----------------------------------------------------

// {
//     let arr1 = [], arr2 = []
//     let num1 = 12, num2 = 18

//     function Factor(num) {
//         let arr = []

//         for (let n = num; n >= 1; n--) {
//             if (num % n === 0) {
//                 arr.push(n)
//             }
//         }

//         return arr
//     }

//     function HCF(a, b) {
//         let hcf = []

//         for (let i = 0; i < a.length; i++) {
//             for (let j = 0; j < b.length; j++) {
//                 if (a[i] === b[j]) {
//                     hcf.push(a[i])
//                 }
//             }
//         }

//         hcf.sort((a,b) => b-a )

//         return hcf[0]
//     }

//     arr1 = Factor(num1)
//     arr2 = Factor(num2)

//     console.log(arr1);
//     console.log(arr2);

//     console.log(HCF(arr1,arr2));

//     // let final_Num = HCF(num1, num2)

//     // console.log(final_Num);

// }

// ---------------------------------------------------- Method - 2 ----------------------------------------------------

// {
//     let a = 25
//     let b = 150

//     console.log(a, b);

//     (a < b) ? [a, b] = [b, a] : [a, b] = [a, b]

//     console.log(a, b);

//     while (b !== 0) {
//         let c = a % b
//         a = b
//         b = c
//     }

//     console.log(a);
// }

// ---------------------------------------------------- Method - 3 ----------------------------------------------------

// {
//     let a = 12
//     let b = 18

//     console.log(a, b);

//     (a < b) ? [a, b] = [b, a] : [a, b]

//     console.log(a, b);

//     function GCD(x, y) {
//         if (y === 0) {
//             return x
//         }
//         else {
//             return GCD(y,x%y)
//         }
//     }

//     let x = GCD(a, b)

//     console.log(x);
// }

// ------------------------

// 3. Harshad Number

// Description: A number is a Harshad number if it is divisible by the sum of its digits.

//  Example

//      Input: 18
//      Output: Harshad Number

//      Explanation: Sum of digits(1 + 8) = 9, and 18 is divisible by 9.

// Hint: Extract digits using modulo (%) and integer division(//).

// {
//     let x = 19

//     let ans = 0

//     for (let i of x.toString()) {
//         i = Number(i)
//         ans += i
//     }

//     console.log((x % ans === 0) ? "Harshed Number" : "Not Harshed Number");
//     console.log(19 % 10);

// }

// ------------------------

// 4. Perfect Square

// Description: A number is a perfect square if it is the square of an integer.

//     Example
// Input: 2
// Output: Perfect Squar
// Explanation: 5 × 5 = 25.

// Hint: Use sqrt(N), check if it’s an integer.

// {
//     let a = 18
//     let sq = Math.sqrt(a)
//     console.log(Number.isInteger(sq) ? "Perfect Sqrt" : "Im-Perfect Sqrt")
//     console.log(sq);

// }

// ------------------------

// 5. Abundant Number

// Description: A number is abundant if the sum of its proper divisors is greater
// than the number itself.

//     Example
// Input: 12
// Output: Abundant Number
// Explanation: Proper divisors: 1, 2, 3, 4, 6 → Sum = 16(greater than 12).

//     Hint: Use a loop to find proper divisors.

// {
//     let x = 12

//     let z = []

//     for (let i = 1; i <= x / 2; i++) {
//         if (x % i === 0) {
//             z.push(i)
//         }
//     }

//     console.log(z);

//     z = z.reduce((x, y) => x + y, 0)
//     console.log(z);

//     console.log((z > x) ? "Abundant Number" : "Not Abundant Number" );
// }

// ------------------------

// 6. Fibonacci Series using Loop

// Description: Print Fibonacci series up to N terms using a loop.

//     Example
// Input: N = 6
// Output: 0, 1, 1, 2, 3, 5

// Hint: Use a loop and store previous two numbers.

// {
//     let n = 6

//     let a = 0
//     let b = 1

//     let fibo = [a, b]

//     for (let x = 2; x < n; x++) {
//         let c = a + b
//         fibo.push(c)
//         a = b
//         b = c
//     }

//     console.log(fibo);
// }

// ------------------------

// 7. Find Numbers with Exactly X Divisors

// Description: Find numbers that have exactly X divisors.

//     Example
// Input: X = 3
// Output: 4, 9, 25, 49
// Explanation: These numbers have exactly three divisors.

//     Hint: Use prime factorization.

// {
//     let num = []

//     function is_prime(x) {

//         if (x <= 1) return false

//         for (let i = 2; i * i <= x; i++) {
//             if (x % i === 0) {
//                 return false
//             }
//         }

//         return true
//     }

//     function divisior_checker(x, range) {
//         let arr = []

//         if (x === 3) {

//             for (let i = 2; i * i <= range; i++) {
//                 if (is_prime(i)) {
//                     arr.push(i * i)
//                 }
//             }

//             return arr
//         }
//     }

//     let x = divisior_checker(3,100)
//     console.log(x);
// }

// {
//     function Num_Divisor(Num, Limit) {
//         let arr = []
//         for (let i = 1; i <= Limit; i++) {
//             let factor = 2

//             for (let j = 2; j * j <= i; j++) {
//                 if (i % j === 0) {
//                     factor++
//                     if (j !== i / j) {
//                         factor++
//                     }
//                 }
//             }

//             if (factor === Num) {
//                 arr.push(i)
//             }
//         }

//         return arr

//     }

//     let x = Num_Divisor(3, 100)
//     console.log(x);

// }

// ------------------------

// 8. Prime Factors in Java

// Description: Find all prime factors of a number.

//     Example
// Input: 30
// Output: 2, 3, 5

// Hint: Use division method.

// --------------------------------------------------------------- method - 1 --------------------------------------------------------------

// {
//     function factor(n) {
//         let Fact_arr = [n]

//         for (let i = 1; i <= n/2; i++) {
//             if (n % i === 0) {
//                 Fact_arr.push(i)
//             }
//         }

//         return Fact_arr
//     }

//     function is_prime (n) {
//         if (n <= 1) return false

//         for (let i = 2; i * i <= n; i++){
//             if (n % i === 0) {
//                 return false
//             }
//         }

//         return true
//     }

//     let fact = factor(15).filter(x => is_prime(x))

//     console.log(fact)
//     console.log(factor(15));

// }

// ------------------------------------------------------------------- method - 2 ---------------------------------------------------------

// {
//     function prime_factor(n) {
//         let arr = []
//         let i = 2

//         while (i * i <= n) {
//             if (n % i === 0) {
//                 arr.push(i)

//                 while (n % i === 0) {
//                     n = n / i
//                 }
//             }
//             else {
//                 i++
//             }
//         }

//         if (n > 1) {
//             arr.push(n)
//         }

//         return arr
//     }

//     console.log(prime_factor(30));

// }

// {
//     function prime_fact(n) {

//         let fact = []
//         let i = 2

//         while (i * i <= n) {
//             if (n % i === 0) {
//                 fact.push(i)

//                 while (n % i === 0) {
//                     n = n / i
//                 }
//             }
//             else {
//                 i++
//             }
//         }

//         if (n > 1) {
//             fact.push(n)
//         }

//         return fact
//     }

//     console.log(prime_fact(30));

// }

// ------------------------

// 9. Calculate Area using Switch Statement

// Description: Find the area of a circle, rectangle, or triangle using switch.

//     Example
// Input: Choice = Circle, Radius = 5
//     Output: Area = 78.5

// Hint: Use switch with case statements.

// {
//     let x = true
//     while (x) {

//         let Choice = Number(prompt(`
//             Select From Follwong :
//             Press 1 for Find the area of a circle
//             Press 2 for Find the area of a rectangle
//             Press 3 for Find the area of a triangle
//             Press 0 for Exit
//             `));

//         let ans = 0
//         if (Number.isInteger(Choice)) {
//             switch (Choice) {
//                 case 0:
//                     x = false
//                     break
//                 case 1:
//                     let r = parseFloat(prompt("Enter Radius value: "))
//                     ans = Math.PI * (r * r)
//                     break
//                 case 2:
//                     let l = parseFloat(prompt("Enter Length value: "))
//                     let w = parseFloat(prompt("Enter width value: "))
//                     ans = l * w
//                     break
//                 case 3:
//                     let b = parseFloat(prompt("Enter Base value: "))
//                     let h = parseFloat(prompt("Enter Height value: "))
//                     ans = (b * h) / 2
//                     break
//                 default:
//                     alert("Press Number ( 1 / 2 / 3 )");
//                     break
//             }

//         } else {
//             alert("Press Number ( 1 / 2 / 3 )");
//         }

//         if (ans) alert(`Answer : ${ans}`);

//     }
// }

// ------------------------

// 10. Neon Number

// Description: A number where the sum of digits of its square equals the number itself.

//     Example
// Input:9
// Output: Neon Number
// Explanation:
//      9² = 81,
//      sum of digits ( 8 + 1 ) = 9.

// Hint: Find square, sum digits, compare.

// {
//     let num = Number(prompt("Enter Number : "))
//     let sq = num * num
//     let ans = (String(sq)).split("").reduce((accu, ele) => Number(ele) + accu,0)

//     if (num === ans) {
//         alert(`${num} is Neon Number `)
//     }
//     else {
//         alert(`${num} is Not Neon Number `)
//     }
// }

// ------------------------

// 11. Sum of Even Indexed Fibonacci Numbers

// Description: Find the sum of Fibonacci numbers at even indices up to the 2Nth Fibonacci number.

//     Example
// Input: N = 4
//     Output: 33

// Hint: Use a loop and maintain a sum for even - indexed elements.

// {
//     let orginal_num = 5;
//     let num = 2 * orginal_num;

//     function fibo(n) {
//         let x = 0,
//             y = 1,
//             z = 0,
//             arr = [x, y];

//         for (let i = 2; i < n; i++) {
//             z = x + y;
//             x = y;
//             y = z;

//             arr.push(z);
//         }
//         console.log(arr);

//         let ans = arr.filter((ele, index) => index % 2 === 0).reduce((accu, ele) => accu + ele, 0);

//         console.log(ans);
//     }

//     fibo(num);
// }

// ------------------------

// 12. Find the Largest Digit in a Number

// Description: Find the largest digit in a given number.

//     Example
// Input: 54829
// Output: 9

// Hint: Extract digits using modulo (% 10) and compare.

// --------------------------------------------------------------- method - 1 --------------------------------------------------------------

// {
//     let n = 147852963;
//     let num = String(n).split("").map((x) => Number(x)).sort((x,y) => y-x)
//     console.log(num[0]);
// }

// --------------------------------------------------------------- method - 2 --------------------------------------------------------------

// {
//     let n = 147852963;
//     let num1, max = 0

//     while (n > 0) {
//         num1 = n % 10
//         n = parseInt(n / 10)

//         max < num1 ? max = num1: max
//         max = Math.max(max, num1)
//     }

//     console.log(max);
// }

// --------------------------------------------

// 13. Find LCM of Two Numbers

// Description: Find the Least Common Multiple(LCM) of two numbers.

//     Example
// Input: a = 12, b = 15
// Output: 60

// Hint: LCM can be found using the formula: LCM(a, b) = (a × b) / GCD(a, b).

// --------------------------------------------------------------- method - 2 --------------------------------------------------------------

// {
//     function factor(num) {
//         let arr = [];
//         for (let i = 1; i <= num; i++) {
//             if (num % i === 0) {
//                 arr.push(i);
//             }
//         }
//         return arr;
//     }

//     function GCD(a, b) {
//         let num1 = factor(a);
//         let num2 = factor(b);
//         let arr = [];

//         for (let i of num1) {
//             if (num2.includes(i)) {
//                 arr.push(i);
//             }
//         }

//         arr = Math.max(...arr);

//         return arr;
//     }

//     function LCM(a, b) {

//         return (a * b) / GCD(a, b)
//     }

//     console.log(LCM(12, 15));
// }

// --------------------------------------------------------------- method - 2 --------------------------------------------------------------

// {
//     function GCD(num1, num2) {
//         while (num2 !== 0) {
//             [num1, num2] = [num2, num1 % num2]
//         }

//         return num1
//     }

//     function LCM(num1, num2) {
//         return (num1 * num2)/ GCD(num1,num2)
//     }

//     console.log(LCM(12, 15));
// }

// ------------------------

// 14. Find the Sum of Even Digits in a Number

// Description: Find the sum of all even digits in a given number.

//     Example
// Input: 2384
// Output: 14

// Hint: Extract digits using % 10, check if even(digit % 2 == 0), add to sum.

// {
//     num = 2384
//     let ans = 0

//     while (num > 0) {
//         let temp = num % 10
//         // ans = (temp % 2 === 0) ? ans += temp : ans
//         ans += (temp % 2 === 0) ? temp : 0
//         let num = parseInt(num / 10)
//     }

//     console.log(ans);

// }

// ------------------------

// 15. Number of Days in a Month

// Description: Find the number of days in a given month and year(to handle leap years).

//     Example
// Input: Month = 2, Year = 2024
// Output: 29

// Hint: Use conditions
// 31 Days: Jan, Mar, May, Jul, Aug, Oct, Dec
// 30 Days: Apr, Jun, Sep, Nov
// February: 28 or 29(check for leap year using year % 4 == 0 but not year %
//     100 != 0 unless year % 400 == 0).

// {
//     let Day_31 = [1, 3, 5, 7, 8, 10, 12]
//     let Day_30 = [4, 6, 9, 11]

//     let year = Number(prompt("Enter Year"))
//     let Month = Number(prompt("Enter Month"))
//     let days = 28

//     let leap = false

//     if ((year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0))) {
//         leap = true
//     }

//     if (Day_31.includes(Month)) days = 31
//     if (Day_30.includes(Month)) days = 30
//     if (Month === 2 && leap) days = 29

//     console.log(`
//         Year : ${year}
//         Month : ${Month}
//         Day : ${days} (Day's in current month)
//         leap Year : ${leap ? 'Yes': 'No'}
//         `);

// }



