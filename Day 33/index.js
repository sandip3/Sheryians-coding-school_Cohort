// ------------------------------------------------------------ Question - 1 ------------------------------------------------------------

// {
//     // * * *
//     // * * *
//     // * * *

//     let input = require("prompt-sync")()
//     let x = input("Enter Number : ")

//     for (let i = 1; i <= x; i++) {
//         for (let j = 1; j <= x; j++) {
//             process.stdout.write("* ")
//         }
//         console.log();
//     }
// }

// ------------------------------------------------------------ Question - 2 ------------------------------------------------------------

// {
//     // *
//     // * *
//     // * * *
//     // * * * *
//     // * * * * *

//     let in_data = require("prompt-sync")()
//     let x = in_data("Enter Number : ")

//     for (let i = 1; i <= 5; i++){
//         for (let j = 1; j <= i; j++){
//             process.stdout.write("* ")
//         }
//         console.log();

//     }
// }

// ------------------------------------------------------------ Question - 3 ------------------------------------------------------------

// {
//     // 1
//     // 1 2
//     // 1 2 3
//     // 1 2 3 4
//     // 1 2 3 4 5

//     let x = require("prompt-sync")()
//     let a = x("Enter Number : ")

//     for (let i = 1; i <= a; i++) {
//         for (let j = 1; j <= i; j++) {
//             process.stdout.write(`${j} `)
//         }
//         console.log();
//     }
// }

// ------------------------------------------------------------ Question - 4 ------------------------------------------------------------

// {
//     // A
//     // A B
//     // A B C
//     // A B C D
//     // A B C D E

//     let x = require("prompt-sync")()
//     let a = x("Enter Number : ")

//     for (i = 1; i <= a; i++){
//         for (let j = 65; j < (65 + i); j++){
//             process.stdout.write(`${String.fromCharCode(j)} `)
//         }
//         console.log();
//     }
// }

// ------------------------------------------------------------ Question - 5 ------------------------------------------------------------

// {
//     // * * * * *
//     // * * * *
//     // * * *
//     // * *
//     // *

//     let x = require("prompt-sync")()
//     let a = x("Enter Number : ")

//     for (let i = a; i >= 0; i--){
//         for (let j = 1; j <= i; j++){
//             process.stdout.write("* ")
//         }
//         console.log();

//     }
// }

// ------------------------------------------------------------ Question - 6 ------------------------------------------------------------

// {
//     //         *
//     //       * *
//     //     * * *
//     //   * * * *
//     // * * * * *

//     for (let i = 1; i <= 5; i++) {
//         let temp = 5 - i

//         for (let j = 1; j <= i; j++) {
//             while (temp > 0) {
//                 process.stdout.write("  ")
//                 temp--
//             }
//             if (temp === 0) {
//                 process.stdout.write("* ")
//             }
//         }
//         console.log();
//     }
// }

// ------------------------------------------------------------ Question - 7 ------------------------------------------------------------

// {
//     //     *
//     //    * *
//     //   * * *
//     //  * * * *
//     // * * * * *

//     for (let i = 1; i <= 5; i++) {
//         let temp = 5 - i

//         for (let x = 1; x <= temp; x++) {
//             process.stdout.write(" ") // Single space
//         }

//         for (let j = 1; j <= i; j++) {
//             process.stdout.write("* ")
//         }

//         console.log();

//     }
// }

// ------------------------------------------------------------ Question - 8 ------------------------------------------------------------

// {
//     // *       *
//     //  *     *
//     //   *   *
//     //    * *
//     //     *

// ------------------------------------------------------------ Static ------------------------------------------------------------

//     // for (let i = 0; i < 5; i++) {
//     //     let temp = i

//     //     while (temp > 0) {
//     //         process.stdout.write(" ")
//     //         temp -= 1
//     //     }

//     //     process.stdout.write("*")

//     //     if (i < 4) {
//     //         let temp2 = 7 - (2 * i)

//     //         for (j = 1; j <= temp2; j++) {
//     //             process.stdout.write(" ")
//     //         }

//     //         process.stdout.write("*")
//     //     }

//     //     console.log();

//     // }

// ------------------------------------------------------------ Dynamic ------------------------------------------------------------

// let row = 5

// for (let i = 0; i < row; i++) {
//     let temp = i

//     while (temp > 0) {
//         process.stdout.write(" ")
//         temp--
//     }

//     process.stdout.write("*")

//     if (i < (row - 1)) {
//         let gap = (2 * (row - i - 1)) - 1

//         for (let j = 1; j <= gap; j++) {
//             process.stdout.write(" ")
//         }

//         process.stdout.write("*")
//     }
//     console.log();
// }

// }

// ------------------------------------------------------------ Question - 9 ------------------------------------------------------------

// {
//     // *              *
//     //    *       *
//     //        *
//     //    *       *
//     // *               *

//     let row = 5
//     for (let i = 0; i < row; i++) {
//         for (let j = 0; j < row; j++) {
//             if ((i === j) || (i + j === row - 1)) {
//                 process.stdout.write("*")
//             }
//             else {
//                 process.stdout.write(" ")
//             }
//         }
//         console.log();

//     }
// }


