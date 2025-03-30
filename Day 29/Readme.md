# DSA Assignment 1: JavaScript Problems

This assignment consists of three JavaScript programs. Each program addresses a specific problem and is written as a separate code block.

---

## Problems

- **1. Indian Currency Notes Breakdown**
  - **Goal:** Compute the number of notes required for a given amount.
  - **Denominations:** ₹2000, ₹500, ₹200, ₹100, ₹50, ₹20, ₹10, ₹5, ₹2, ₹1.
  - **Example:**  
    - **Input:** 4327  
    - **Output:**  
      - ₹2000 x 2  
      - ₹500 x 0  
      - ₹200 x 1  
      - ₹100 x 1  
      - ₹50 x 0  
      - ₹20 x 1  
      - ₹10 x 0  
      - ₹5 x 1  
      - ₹2 x 1  
      - ₹1 x 0  
  - **Note:** Uses a random value or user input (commented out) and `while` loops to calculate counts.

---

- **2. Movie Rating Category**
  - **Goal:** Categorize a movie based on its rating.
  - **Input:**  
    - Movie name (String)  
    - Movie rating (Double)
  - **Categories:**  
    - 0 to 2: Flop  
    - 2 to 3.4: Semi-hit  
    - 3.5 to 4.5: Hit  
    - 4.6 to 5.0: Super Hit  
  - **Example:**  
    - **Input:** Rating 4.9, Movie "RRR"  
    - **Output:** "RRR is a Super Hit."
  - **Note:** Uses `prompt()` for inputs and if-else statements for category assignment.

---

- **3. Salary Calculation**
  - **Goal:** Calculate an employee's salary based on gender, years of service, and qualification.
  - **Inputs:**  
    - Gender: "M" or "F"  
    - Years of Service  
    - Qualification: 1 (Graduate) or 2 (Post-Graduate)
  - **Salary Rules:**
    - **Males:**  
      - Less than 10 years: Graduate ₹7000, Post-Graduate ₹10000  
      - 10 or more years: Graduate ₹10000, Post-Graduate ₹15000
    - **Females:**  
      - Less than 10 years: Graduate ₹6000, Post-Graduate ₹10000  
      - 10 or more years: Graduate ₹9000, Post-Graduate ₹12000
  - **Note:** Uses `prompt()` for inputs and a self-invoking function with conditional statements and ternary operators for calculation.

---

## How to Run

- **In a Browser:**
  - Save the code in a `.js` file.
  - Include it in an HTML file with a `<script>` tag.
  - Open the HTML file in your browser and view the console output.

- **With Node.js:**
  - Save the code in a `.js` file.
  - Replace `prompt()` with hardcoded values or use an alternative input method (since `prompt()` is not available in Node.js).
  - Run the file using the command:
    ```bash
    node script.js
    ```

---

Happy coding!
