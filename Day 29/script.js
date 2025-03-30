// 1. Problem Statement: Indian Currency Notes Breakdown

// You need to write a program where the user inputs an amount in Indian Rupees, and the program should output the number of currency notes required to make up that amount using the largest denominations first.

// Denominations Available (Indian Rupees): ₹2000, ₹500, ₹200, ₹100, ₹50, ₹20, ₹10, ₹5, ₹2, ₹1

// Example 1:

// Input:
//     Amount: 4327
// Output:
//     ₹2000 x 2
//     ₹500 x 0
//     ₹200 x 1
//     ₹100 x 1
//     ₹50 x 0
//     ₹20 x 1
//     ₹10 x 0
//     ₹5 x 1
//     ₹2 x 1
//     ₹1 x 0

{
    // let Money = Number(prompt("Enter Money In Number "))
    let Money = Math.round(Math.random() * 100000)

    console.log(Money);


    let R2000 = 0
    let R500 = 0
    let R200 = 0
    let R100 = 0
    let R50 = 0
    let R20 = 0
    let R10 = 0
    let R5 = 0
    let R2 = 0
    let R1 = 0

    while (Money >= 2000) {
        Money -= 2000
        R2000++
    }
    while (Money >= 500) {
        Money -= 500
        R500++
    }
    while (Money >= 200) {
        Money -= 200
        R200++
    }
    while (Money >= 100) {
        Money -= 100
        R100++
    }
    while (Money >= 50) {
        Money -= 50
        R50++
    }
    while (Money >= 20) {
        Money -= 20
        R20++
    }
    while (Money >= 10) {
        Money -= 10
        R10++
    }
    while (Money >= 5) {
        Money -= 5
        R5++
    }
    while (Money >= 2) {
        Money -= 2
        R2++
    }
    while (Money >= 1) {
        Money -= 1
        R1++
    }

    console.log(Money);
    console.log(
        "R2000 : " + R2000,
        "R500 : " + R500,
        "R200 : " + R200,
        "R100 : " + R100,
        "R50 : " + R50,
        "R20 : " + R20,
        "R10 : " + R10,
        "R5 : " + R5,
        "R2 : " + R2,
        "R1 : " + R1,
    );
}

// ------------------------------------------

// 2.Write a program to accept rating of the movie as double and Movie name as String. 
// Check and print the category of movie based on rating. 

// Example -
// INPUT 
//     4.9 
// RRR 
//     OP - RR is a Super Hit.

{
    let Mov_name = prompt("Enter Movie Name ")
    let Mov_Rating = Number(prompt("Enter Movie rating  "))
    let Mov_Massage

    if (Mov_Rating >= 0 && Mov_Rating <= 2) {
        Mov_Massage = "Flop"
    }
    else if (Mov_Rating >= 2 && Mov_Rating <= 3.4) {
        Mov_Massage = "Semi-hit"
    }
    else if (Mov_Rating >= 3.5 && Mov_Rating <= 4.5) {
        Mov_Massage = "Hit"
    }
    else if (Mov_Rating >= 4.6 && Mov_Rating <= 5.0) {
        Mov_Massage = "Super Hit"
    }
    else {
        alert("Enter Proper Movie Rating")
    }

    console.log(`${Mov_name} is a ${Mov_Massage}`);

}

// ------------------------------------------

// 3. Write a program to calculate the salary as per the following table

let gender = prompt("Enter Your gender (M / F)")
let year_of_Servies = Number(prompt("Enter your year of servies"))
let qualifications = Number(prompt(`
    Enter Your Qualifications :
    Press 1 For Graduate
    Press 2 For Post-Graduate
    `))
let salary

(function () {
    if (!(gender == "M" || gender == "F")) {
        return
    }
    else if (!(qualifications == 1 || qualifications == 2)) {
        return
    }

    if (gender == "M") {
        if (year_of_Servies < 10) {
            // if (qualifications == 1) {
            //     salary = 7000
            // } else {
            //     salary = 10000
            // }

            salary = (qualifications == 1) ? 7000 : 10000

        } else {
            // if (qualifications == 1) {
            //     salary = 10000
            // } else {
            //     salary = 15000
            // }

            salary = (qualifications == 1) ? 10000 : 15000

        }
    } else {
        if (year_of_Servies < 10) {
            // if (qualifications == 1) {
            //     salary = 6000
            // } else {
            //     salary = 10000
            // }

            salary = (qualifications == 1) ? 6000 : 10000

        } else {
            // if (qualifications == 1) {
            //     salary = 90000
            // } else {
            //     salary = 12000
            // }

            salary = (qualifications == 1) ? 9000 : 12000

        }
    }

    console.log(`Your Year of Service is ${year_of_Servies}`);
    console.log(`Your salary is ${salary}`);
})()
