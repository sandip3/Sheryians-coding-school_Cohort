// {// Simulate a Food Delivery

//     // Task: Create a function orderFood that returns a promise.It should Resolve after 2 seconds with `🍕 Pizza delivered!`.  "

//     // Bonus: Add a chance to reject with `🚫 Delivery failed!`.

//     function orderFood() {

//         let pizaa = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 let random = Math.floor(Math.random() * 2)
//                 random ? resolve("🍕 Pizza delivered!") : reject("🚫 Delivery failed!")
//             }, 2000);
//         })

//         return pizaa
//     }

//     let food = orderFood()
//     food.then((x) => {
//         console.log(x);

//     }).catch(x => {
//         console.log(x);
//     })


// }

// // -------------------------------------------------------------

// {// 2. Chained Promises: User → Posts → Comments 

// // Task:

// // 1. Create getUser() → resolves with { id: 1, name: "Sandip" }
// // 2. getPosts (userid) resolves with list of post titles 
// // 3. getComments (postId) → resolves with comments 
// // Chain them together using .then() and log the final output.

// function getUser() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res({ id: 1, name: "Sandip" })
//         }, 2000)
//     })
// }

// function getPosts(userid) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(["Post Title 1 ", "Post Title 2 ", "Post Title 3 ", "Post Title 4 "])
//         }, 2000)
//     })
// }

// function getComments(postId) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(["Comment 1 ", "Comment 2 ", "Comment 3 ", "Comment 4 ", "Comment 5 "])
//         }, 2000)
//     })
// }


// getUser()
//     .then((x) => {
//         console.log(x);
//         return getPosts(x.id)
//     })
//     .then((x) => {
//         console.log(x);
//         return getComments(x[1])
//     })
//     .then((x) => {
//         console.log(x);
//     })
//     .finally((() => {
//         console.log("All Task Done");
//     }))
// }

// // -------------------------------------------------------------

//  ✅ 3. Fake API Delay

// Task:
// Write a function fakeApiCall(endpoint) that:
//  -  Accepts a string like "users" or "posts"
//  -  Resolves with some dummy data after a random delay (1-3 sec)

//     let delay = (Math.floor(Math.random() * 3) + 1) * 1000

//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(data[endpoint]);
//         }, delay)
//     })
// }

// fakeApiCall("user")
//     .then((x) => {
//         console.log(x);
//     })
