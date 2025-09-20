{
    // 1. Fake API with Random Data  

    // - Simulate a fake API that returns random data after a random delay(1 - 2 seconds).  
    // - Resolve with data based on the endpoint(`"user"`, `"posts"`, etc.).

    function fackAPI(endpoint) {

        let data = {
            user: [
                "John Doe",
                "Jane Smith",
                "Alex Brown",
                "Chris Johnson",
                "Emily Davis"
            ],
            posts: [
                "How to learn JavaScript",
                "Top 10 React Tips",
                "Understanding Async Await",
                "CSS Grid vs Flexbox",
                "Introduction to Node.js"
            ],
            Ph_Num: [
                "555-1234",
                "555-5678",
                "555-8765",
                "555-4321",
                "555-9876"
            ],
            age: Math.floor(Math.random() * 65) + 15,
            gender: Math.floor(Math.random() * 2) + 1 === 1 ? "Man" : "Woman"
        }

        return new Promise((res, rej) => {
            let delay = (Math.floor(Math.random() * 2) + 1) * 1000

            setTimeout(() => {
                res(data[endpoint])
            }, delay)

        })
    }

    fackAPI("user").then((x) => {
        console.log(x);
    })
}

// ------------------------------------------------------------------------------------------

{
    // 2. Simulated Order Process

    // - Chain promises like`getOrder()`, `processPayment()`, and`shipOrder()`.  
    // - Log each stage in the process.

    function getOrder() {
        return new Promise((res, rej) => {
            let Decide = Math.floor(Math.random() * 2)

            setTimeout(() => {
                Decide ? res("Order Placed Success fully") : rej("Order got Rejected ")
            }, (Decide + 2) * 1000)
        })
    }
    function processPayment() {
        let Decide = Math.floor(Math.random() * 2)

        return new Promise((res, rej) => {

            setTimeout(() => {
                Decide ? res("Payment Transaction Completed Successfully") : rej("Payment Transaction Rejected")
            }, (Decide + 2) * 1000)
        })
    }
    function shipOrder() {
        let x = (Math.floor(Math.random() * 3) + 1) * 1000
        return new Promise((res, rej) => {
            setTimeout(() => {
                res("Order has reached destination")
            }, x)
        })
    }

    getOrder()
        .then((x) => {
            console.warn(x);
            return processPayment()
        })
        .then((x) => {
            console.warn(x);
            return shipOrder()
        })
        .then((x) => {
            console.warn(x);
        })
        .catch((x) => {
            console.error(x);
        })
        .finally(() => {
            console.log("Thank you for using our service..");
        })
}

// ------------------------------------------------------------------------------------------
{

    // 3. Check Weather(Chained Promises)
    //   - Chain`getLocation()`, `getWeather(location)`, and`getForecast(weather)` functions.
    //   - Log the result of each stage.


    function getLocation() {
        return new Promise((res, rej) => {
            let x = Math.floor(Math.random() * 2)
            setTimeout(() => {
                // x ? res("Surat") : rej("Can't Access Your Location")
                res("Surat")
            }, (x + 2) * 1000)
        })
    }
    function getWeather(location) {
        return new Promise((res, rej) => {
            let x = Math.floor(Math.random() * 2)
            setTimeout(() => {
                // x ? res("31 C") : rej("Can't get weather Of this Location ")
                res("33 c")
            }, (x + 2) * 1000)
        })
    }
    function getForecast(weather) {
        return new Promise((res, rej) => {
            let x = Math.floor(Math.random * 2)
            setTimeout(() => {
                // x ? res("it's Raining ") : rej("Can't Access Your Location")
                res("it's Raining ")
            }, (x + 2) * 1000)
        })
    }

    function delay_call(text, delay) {
        return new Promise((res) => {
            setTimeout(() => {
                console.log(text);
                res()
            }, delay)
        })
    }




    getLocation()
        .then((x) => {
            console.log("Fetching Location ....");
            return delay_call(x, 2000)
                .then(() => getWeather(x))
        })
        .then((x) => {
            console.log("Fetching Weather Status ....");
            return delay_call(x, 2000)
                .then(() => getForecast(x))
        })
        .then((x) => {
            console.log("Fetching Forecast Status ....");
            return delay_call(x, 2000)
        })
        .catch((x) => {
            return delay_call(x, 2000)
        })
        .finally(() => {
            console.log("That was Status Of Today !!");
        })
}

// ------------------------------------------------------------------------------------------

{

// 4. Simple Fake API with Error Handling
//     - Create a fake API that resolves with data for `"data"` endpoint or rejects for others.  
//     - Handle success and failure with `.then()` and`.catch()`.
    function fackAPI(x) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                if (x === "data") {
                    res("Here is Your Data ")
                }
                else {
                    rej("Bro, Item Not Found")
                }
            }, 2000)
        })
    }

    fackAPI("Loda ").then((x) => {
        console.warn(x);
    }).catch((x) => {
        console.error(x);
    })
}

// ------------------------------------------------------------------------------------------

{
// 5. Delay Between Multiple Tasks
//   - Create a delay function `delayTask(ms)` that resolves after a given delay.
//   - Chain multiple delays together and log messages after each one.

    function delayTask(ms) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res("Loda Loda Loda ");
            }, ms)
        })
    }

    delayTask(1000)
        .then((x) => {
            console.log(x);
            return delayTask(2000)
        }).then((x) => {
            console.log(x);
            return delayTask(1000)
        }).then((x) => {
            console.log(x);
        })
}
// ------------------------------------------------------------------------------------------

{
// 6. Chained Data Fetching(User → Posts → Comments)
//     - Chain`getUser()`, `getPosts(userid)`, and`getComments(postId)` functions.  
//     - Log the data step - by - step.

    function getUser() {
        let user = {
            id: 1,
            name: "Sandip",
            age: 50
        }
        return new Promise((res, rej) => {
            res(user.id)
        })
    }
    function getPosts(userid) {
        let post = ["New Web Dev ...", "Old Theme ...", "How to do ..."]

        return new Promise((res) => {
            res(post)
        })
    }
    function getComments(postId) {
        let comment = ["this is Good", "Unique Content", "Nice Idea"]

        return new Promise((res) => {
            res(comment)
        })
    }

    getUser()
        .then((x) => {
            console.log(x)
            return getPosts(x)
        })
        .then((x) => {
            console.log(x);
            return getComments(x)
        })
        .then((x) => {
            console.log(x);
        })
}


// ------------------------------------------------------------------------------------------

{
    // 7. Retry Failed API Call (Promise with Retry Logic)
    //  - Create a function apiCall() that resolves or rejects randomly.
    //  - If it fails, retry up to 3 times before giving up.

    function fackAPI() {
        return new Promise((res, rej) => {
            let x = Math.floor(Math.random() * 2)
            setTimeout(() => {
                x ? res("User : Sandip") : rej("Error in Access API")
            }, (x + 2) * 1000)
        })
    }

    function Attampt_try(Attampt) {
        fackAPI()
            .then((x) => {
                console.log(x);
            })
            .catch((x) => {
                console.log(x);
                if (Attampt > 0) {
                    console.warn(`Retrying ${3 - Attampt + 1}`);
                    Attampt_try(Attampt - 1)
                } else {
                    console.error("Giveing Up NOw After 3 Try");

                }
            })
    }

    Attampt_try(3)
}
