# Promises & Chained Promises Practice Tasks

This file contains all the practice tasks: [Practice.js](./Practice.js)

## Level 1 (Easy)

- **Fake API with Random Data**  
  - **Task:**
    - Simulate a fake API that returns random data after a random delay (1-2 seconds).  
    - Resolve with data based on the endpoint (`"user"`, `"posts"`, etc.).
  - **Goal:**  
    - Practice resolving promises with data and simulating API delays.

- **Simulated Order Process**  
  - **Task:**  
    - Chain promises like `getOrder()`, `processPayment()`, and `shipOrder()`.  
    - Log each stage in the process.
  - **Goal:**  
    - Practice chaining promises step-by-step.

- **Check Weather (Chained Promises)**  
  - **Task:**  
    - Chain `getLocation()`, `getWeather(location)`, and `getForecast(weather)` functions.  
    - Log the result of each stage.
  - **Goal:**  
    - Understand chaining and how each promise flows into the next.

- **Simple Fake API with Error Handling**  
  - **Task:**  
    - Create a fake API that resolves with data for `"data"` endpoint or rejects for others.  
    - Handle success and failure with `.then()` and `.catch()`.
  - **Goal:**  
    - Practice basic error handling with `.catch()`.

- **Delay Between Multiple Tasks**  
  - **Task:**  
    - Create a delay function `delayTask(ms)` that resolves after a given delay.  
    - Chain multiple delays together and log messages after each one.
  - **Goal:**  
    - Practice handling multiple delays with chained promises.

---

## Level 2 (Medium)

- **Chained Data Fetching (User → Posts → Comments)**  
  - **Task:**  
    - Chain `getUser()`, `getPosts(userid)`, and `getComments(postId)` functions.  
    - Log the data step-by-step.
  - **Goal:**  
    - Learn to chain promises with data passed between steps.

- **Retry Failed API Call (Promise with Retry Logic)**  
  - **Task:**  
    - Create a function `apiCall()` that resolves or rejects randomly.  
    - If it fails, retry up to 3 times before giving up.
  - **Goal:**  
    - Understand retry logic and promise error handling.
