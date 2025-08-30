// ----------------------------------------------------- Question - 1 --------------------------------------------------

// {
//     // sum of array element

//     let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//     let sum = 0

//     for (let i = 0; i < a.length; i++) {
//         sum += a[i]
//     }

//     console.log(sum);

// }


// ----------------------------------------------------- Question - 2 --------------------------------------------------

// {
//     // mex ele of array

//     let x = [1, 15, 12, 84, 65]

//     let max = 0
//     for (let i = 0; i < x.length; i++) {
//         if (max <= x[i]) {
//             max = x[i]
//         }
//     }

//     console.log(max);

// }

// ----------------------------------------------------- Question - 3 --------------------------------------------------

// {
//     // Second max ele of array 

//     let x = [1, 15, 12, 84, 65]

//     let max = 0
//     let max_2 = -Infinity

//     for (let i = 0; i < x.length; i++) {
//         if (max < x[i] ) {
//             max_2 = max
//             max = x[i]
//         } else if (max_2 < x[i] && x[i] !== max) {
//             max_2 = x[i]
//         }
//     }

//     console.log(max_2);

// }

// ----------------------------------------------------- Question - 4 --------------------------------------------------

// {

//     // Second small in array

//     let x = [1, 15, 12, 84, 65,-5,-2,-1,-7]
//     let min = Infinity
//     let min_2 = Infinity

//     for (let i = 0; i < x.length; i++){
//         if (min > x[i]) {
//             min_2 = min
//             min = x[i]
//         }
//         else if (min_2 > x[i] && x[i] !== min) {
//             min_2 = x[i]
//         }
//     }
//     console.log(min , min_2);


// }

// ----------------------------------------------------- Question - 5 --------------------------------------------------

// {
//     // rev array 

//     // --------------------------------------------------- Method - 1 ---------------------------------------------------

//     // let arr =  [1, 2, 3, 4, 5,6]

//     // console.log(arr);

//     // let j = arr.length -1
//     // for (let i = 0; i < arr.length; i++){

//     //     if (i === j) {
//     //         break
//     //     }
//     //     if (i < j) {
//     //         let temp = arr[i]
//     //         arr[i] = arr[j]
//     //         arr[j] = temp
//     //         j--
//     //     }
//     // }

//     // console.log(arr);


//     // --------------------------------------------------- Method - 2 ---------------------------------------------------

//     // let arr =  [1, 2, 3, 4, 5,6]

//     // let temp = []

//     // let j = arr.length -1

//     // for (let i = 0; i < arr.length; i++){

//     //     temp[i] = arr[j]
//     //     j--
//     // }

//     // console.log(arr);
//     // console.log(temp);


// }

// ----------------------------------------------------- Question - 6 --------------------------------------------------

// {
//     // all 0 to left and 1 to right 

//     let arr = [1, 1, 0, 1, 0, 1, 0]

//     let j = 0, i = 0

//     console.log(arr);

//     while (i < arr.length) {
//         if (arr[i] === 0) {

//             let temp = arr[i]

//             arr[i] = arr[j]
//             arr[j] = temp

//             j++
//         }
//         i++
//     }

//     console.log(arr);

// }

// ----------------------------------------------------- Question - 7 --------------------------------------------------

// {
//     let arr = [1, 2, 3, 4, 5, 6]

//     let temp = arr[0]

//     console.log(arr);

//     for (let i = 0; i < arr.length; i++){
//         if (i === arr.length - 1) {
//             arr[i] = temp
//             break
//         }

//         arr[i] = arr[i + 1]

//     }
//     console.log(arr);
// }

// ----------------------------------------------------- Question - 8 --------------------------------------------------

// let arr = [1, 2, 3, 4, 5, 6]

// let temp = arr[arr.length - 1]

// console.log(arr);

// for (let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1]
// }
// arr[0] = temp

// console.log(arr);


