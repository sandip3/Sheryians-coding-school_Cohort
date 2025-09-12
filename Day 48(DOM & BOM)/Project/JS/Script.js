{

    let tasks = document.querySelector(".tasks")
    let task_grid = document.querySelector(".task-grid")

    let task_enter_filed = document.querySelector(".Task_enter_Filed")
    let add_btn = document.querySelector("#Input_btn")
    let clear_all = document.querySelector(".ri-delete-bin-5-fill")

    const update_div = document.querySelector(".Task_update_filled")
    const update_filed = update_div.querySelector(".update_Filed")
    const update_btn_modal = update_div.querySelector("#Input_Update_btn")

    let current_update_index = null // To store which task we're updating

    // Main Eventlistner
    task_enter_filed.addEventListener("keydown", Data_store)
    add_btn.addEventListener("click", Data_store)

    // Index 
    let temp_idx = localStorage.getItem("Task_obj")

    // Add Data
    function Data_store(x) {
        if (x.key === "Enter" || x.target.id === "Input_btn") {
            let idx = Number(new Date())

            let temp = task_enter_filed.value
            task_enter_filed.value = ""

            let obj = {
                "Index": idx,
                "Task": temp,
                "is_status": false
            }

            let temp_obj = JSON.parse(localStorage.getItem("Task_obj")) || []
            // console.log(temp_obj);

            temp_obj.push(obj)

            obj = JSON.stringify(temp_obj)
            localStorage.setItem("Task_obj", obj)

            task_view()

        }

    }

    // View Data
    function task_view() {
        let temp_task = localStorage.getItem("Task_obj")
        let obj = JSON.parse(temp_task)

        if (obj !== null) {
            task_grid.innerHTML = ""

            for (let i = 0; i < obj.length; i++) {

                let div = document.createElement("div")
                div.classList.add(i)
                div.setAttribute("data-index", obj[i].Index)
                div.setAttribute("draggable", true)

                if (obj[i].is_status === true) {
                    div.classList.add("Task_complete")
                }

                let clutter = ``

                clutter += `
                <span class="Task_index">${i + 1}</span>
                <span class="Task_Details">${obj[i].Task}</span>
                <span class="action_btn">
                <button class="update_btn">Update</button>
                <button class="delete_btn">Delete</button>
                <button class="complete_btn">Complete</button>
                </span>
                `

                div.insertAdjacentHTML("beforeend", clutter)
                task_grid.appendChild(div)

                let update_btn = div.querySelector(".update_btn")
                let delete_btn = div.querySelector(".delete_btn")
                let complete_btn = div.querySelector(".complete_btn")

                let temp = JSON.parse(localStorage.getItem("Task_obj"))

                if (temp[i].is_status === true) {
                    div.classList.add("Task_complete")
                    complete_btn.textContent = "Uncomplete"
                    complete_btn.style.backgroundColor = "yellow"
                    update_btn.style.display = "none"
                }
                else {
                    complete_btn.style.backgroundColor = "lime"
                    div.classList.remove("Task_complete")
                    complete_btn.textContent = "Complete"
                }

                // Delete Data
                delete_btn.addEventListener("click", (e) => {

                    console.info("Task delete");

                    temp = JSON.parse(localStorage.getItem("Task_obj"))
                    let gold_value = Number(div.getAttribute("data-index"))

                    console.log(temp);

                    let new_arr = temp.filter(task => task.Index !== gold_value)
                    console.log(gold_value);
                    console.log(temp);
                    console.log(new_arr);


                    temp = JSON.stringify(new_arr)
                    localStorage.setItem("Task_obj", temp)

                    div.remove()

                    task_view()
                })

                // Complete Data 
                complete_btn.addEventListener("click", () => {

                    temp = JSON.parse(localStorage.getItem("Task_obj"))

                    let temp_idx = Number(div.getAttribute("data-index"))
                    let task = temp.find(task => task.Index === temp_idx)

                    if (!(task)) return

                    task.is_status = !(task.is_status)

                    if (task.is_status) {
                        console.log("Task complete !!!");

                        div.classList.add("Task_complete")

                        update_btn.style.display = "none"

                        complete_btn.textContent = "Uncomplete"
                        complete_btn.style.backgroundColor = "yellow"
                    }
                    else {
                        console.log("Task is still Incomplete !!!");

                        div.classList.remove("Task_complete")

                        update_btn.style.display = "block"

                        complete_btn.textContent = "Complete"
                        complete_btn.style.backgroundColor = "lime"
                    }
                    localStorage.setItem("Task_obj", JSON.stringify(temp))


                })

                // Update Task
                // update_btn.addEventListener("click", () => {
                //     console.log("Updating Task ...");

                //     temp = JSON.parse(localStorage.getItem("Task_obj"))

                //     let temp_task_description = div.querySelector(".Task_Details")
                //     let temp_task_data = temp_task_description.textContent

                //     let update_div = document.querySelector(".Task_update_filled")
                //     let update_filed = update_div.querySelector(".update_Filed")

                //     update_div.style.display = "block"
                //     update_div.querySelector("span").textContent = temp_task_data
                //     update_filed.setAttribute("value", temp_task_data)

                //     // Events
                //     update_div.querySelector("#Input_Update_btn").addEventListener("click", task_update)
                //     update_filed.addEventListener("keypress", (e) => {
                //         if (e.key === "Enter") {
                //             task_update(e)
                //         }
                //     })

                //     // console.log(temp);

                //     // UPdate Function
                //     function task_update(ele) {

                //         // console.log(ele);
                //         // console.log("loda");
                //         // console.log(ele.key === "Enter");


                //         if (ele.key === "Enter" || ele.target.id === "Input_Update_btn") {
                //             let temp_data = update_filed.value
                //             let temp_index = div.getAttribute("data-index")

                //             let temp_location = temp.find(x => x.Index === Number(temp_index))

                //             if (temp_location) {
                //                 temp_location.Task = temp_data
                //             }

                //             localStorage.setItem("Task_obj", JSON.stringify(temp))

                //             task_view()
                //             update_div.style.display = "none"
                //         }
                //     }

                //     update_div.querySelector("#Input_Update_btn").removeEventListener("click", task_update)
                //     update_filed.removeEventListener("keypress", task_update)

                //     update_div.querySelector("#Input_Update_btn").addEventListener("click", task_update)
                //     update_filed.addEventListener("keypress", (e) => {
                //         if (e.key === "Enter") {
                //             task_update(e)
                //         }
                //     })

                //     console.log("Task Updated");


                // })
                update_btn.addEventListener("click", () => {
                    const temp_task_description = div.querySelector(".Task_Details").textContent

                    current_update_index = Number(div.getAttribute("data-index"))

                    update_div.style.display = "block"
                    update_div.querySelector("span").textContent = temp_task_description
                    update_filed.value = temp_task_description
                    update_filed.focus()
                })




            }
        }


    }

    task_view()

    function performUpdate() {
        if (current_update_index === null) return

        const updatedText = update_filed.value.trim()
        if (updatedText === "") return

        const temp = JSON.parse(localStorage.getItem("Task_obj"))
        const taskToUpdate = temp.find(t => t.Index === current_update_index)

        if (taskToUpdate) {
            taskToUpdate.Task = updatedText
            localStorage.setItem("Task_obj", JSON.stringify(temp))
        }

        task_view()
        update_div.style.display = "none"
        current_update_index = null
    }

    update_btn_modal.addEventListener("click", performUpdate)

    update_filed.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            performUpdate()
        }
    })


    // Clear All Task
    clear_all.addEventListener("click", () => {
        localStorage.removeItem("Task_obj")
        idx = 1
        console.log("All Task removed");
        location.reload()
    })



}
