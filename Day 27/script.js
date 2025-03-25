/* Q1: Find Output of the Following Code */
{
    let i = 11;
    i = i++ + ++i;
    console.log("Q1 Output:", i); // Expected Output: 24
}

/* Q2: Find Output of the Following Code */
{
    let a = 11, b = 22, c;
    c = a + b + a++ + b++ + ++a + ++b;
    console.log("Q2 a =", a); // Expected Output: 13
    console.log("Q2 b =", b); // Expected Output: 24
    console.log("Q2 c =", c); // Expected Output: 103
}

/* Q3: Find Output of the Following Code */
{
    let i = 0;
    i = i++ + --i + ++i - i--;
    console.log("Q3 Output:", i); // Expected Output: 0
}

/* Q4: Find Output of the Following Code */
{
    let b = true;
    b++;
    console.log("Q4 Output:", b); // Expected Output: 2
}

/* Q5: Find Output of the Following Code */
{
    let i = 1, j = 2, k = 3;
    let m = i-- - j-- - k--;
    console.log("Q5 i =", i); // Expected Output: 0
    console.log("Q5 j =", j); // Expected Output: 1
    console.log("Q5 k =", k); // Expected Output: 2
    console.log("Q5 m =", m); // Expected Output: -4
}

/* Q6: Find Output of the Following Code */
{
    let a = 1, b = 2;
    console.log("Q6 Output:", -b + ++a + ++b - -a); // Expected Output: 5
}

/* Q7: Find Output of the Following Code */
{
    let i = 19, j = 29, k;
    k = i-- - i++ + --j - ++j + --i - j-- + ++i - j++;
    console.log("Q7 i =", i); // Expected Output: 19
    console.log("Q7 j =", j); // Expected Output: 29
    console.log("Q7 k =", k); // Expected Output: -20
}

/* Q8: Identify the Syntax Error or Logical Issue */

{
    let i = 11;
    let j = --(i++); // Syntax Error: Cannot apply pre-decrement on (i++)
}


/* Q9: Find Output of the Following Code */
{
    let m = 0, n = 0;
    let p = --m * --n * n-- * m--;
    console.log("Q9 Output:", p); // Expected Output: 1
}

/* Q10: Find Output of the Following Code */
{
    let a = 1;
    a = a++ + ++a * --a - a--;
    console.log("Q10 Output:", a); // Expected Output: 5
}

/* Q11: Identify the Syntax Error or Logical Issue */

{
    let a = 11++; // Syntax Error: Invalid use of the increment operator
    console.log(a);
}


/* Q12: Find Output of the Following Code */
{
    let i = 0, j = 0;
    console.log("Q12 Output:", --i * i++ * ++j * j++); // Expected Output: 1
}

// Made By Mishra Sandip


