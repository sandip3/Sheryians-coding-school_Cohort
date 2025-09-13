class Task {
    constructor(task, id = null, isComplete = false) {
        this.id = id || (new Date()).toString()
        this.task = task
        this.isComplete = isComplete
    }

    updateTask(new_Task) {
        this.task = new_Task
    }

    isComplete_toggle() {
        this.isComplete = !this.isComplete
    }
}

class TaskManager {
    constructor() {
        let task_array = JSON.parse(localStorage.getItem("tasks")) || []
        if (0 < task_array.length) {
            this.tasks = task_array.map(task => new Task(task.task, task.id, task.isComplete))
        } else {
            this.tasks = []
        }

    }

    add_task(new_task) {
        let task = new Task(new_task)
        this.tasks.push(task)
        this.save()
    }

    remove_task(id) {
        let new_array = this.tasks.filter(task => task.id !== id)
        this.tasks = new_array
        this.save()
    }

    update_task(id, new_task) {
        let task = this.tasks.find(task => task.id === id)
        // console.log(task);

        task.updateTask(new_task)
        // console.log(task);

        this.save()
    }

    save() {
        let task_arr = this.tasks.map(task => ({
            id: task.id,
            task: task.task,
            isComplete: task.isComplete
        }))
        localStorage.setItem("tasks", JSON.stringify(task_arr))
    }
}

let task_manager = new TaskManager()

// task_manager.add_task("loda 4   ")
// task_manager.remove_task("Sat Sep 13 2025 17:52:12 GMT+0530 (India Standard Time)")
// task_manager.update_task("Sat Sep 13 2025 17:59:40 GMT+0530 (India Standard Time)", "Do DSA ")


// Task View
function task_view() {
    let tasks_collection = document.querySelector(".task_collection")
    tasks_collection.innerHTML = ``

    let task_data = JSON.parse(localStorage.getItem("tasks")) || []

    task_data.forEach((task, idx) => {
        let div = document.createElement("div")
        div.classList.add("tasks")
        div.setAttribute("data-task_id", task.id)

        div.innerHTML += `<span class="id"> ${idx + 1} </span>
                            <span class="task">${task.task}</span>
                            <span class="action_btn">
                                <button class="edit_btn">Edit <i class="ri-pencil-fill"></i></button>
                                <button class="rmv_btn">Remove <i class="ri-delete-bin-fill"></i></button>
                            </span>`

        tasks_collection.appendChild(div)
        task_remover_updater()
    })
}
task_view()

// Add Task
{
    let task_add_section = document.querySelector(".add-task_section")
    let task_add_input_filed = task_add_section.querySelector(".Task_add")
    let task_add_btn = task_add_section.querySelector("button")

    task_add_btn.addEventListener("click", task_add)

    task_add_input_filed.addEventListener("keydown", (events) => {
        if (events.key === "Enter") {
            task_add()
        }
    })

    function task_add() {
        let task_add_input_filed = task_add_section.querySelector(".Task_add")
        let task_value = task_add_input_filed.value

        task_manager.add_task(task_value)

        task_view()
        task_add_input_filed.value = ""
    }
}

// Remove / UPdate Task
function task_remover_updater() {
    let tasks_collection = document.querySelector(".task_collection")
    let tasks = tasks_collection.querySelectorAll(".tasks")

    tasks.forEach((task) => {
        let rmv_btn = task.querySelector(".rmv_btn")
        let update_btn = task.querySelector(".edit_btn")
        let id = task.getAttribute("data-task_id")
        let task_text = task.querySelector(".task").innerHTML

        // console.group()
        // console.log( " Rm : " +rmv_btn);
        // console.log(update_btn);
        // console.log( " ID :" +id);
        // console.log( " TT :" +task_text);
        // console.groupEnd()

        rmv_btn.addEventListener("click", () => {
            task_remove(id)
            console.log("remove");

        })

        update_btn.addEventListener("click", () => {
            task_update(id, task_text)
            console.log("Update");


        })

    })
}

// remove section
function task_remove(id) {
    task_manager.remove_task(id)
    task_view()
}

// UPdate section
function task_update(id, text) {
    let update_section = document.querySelector(".update-section")

    let update_section_view = update_section.querySelector("p")
    let update_section_btn = update_section.querySelector("button")
    let update_section_filed = update_section.querySelector("input")

    update_section.style.display = "flex"
    update_section_view.innerHTML = text
    update_section_filed.setAttribute("value", text)

    update_section_btn.addEventListener("click", task_update_main)
    update_section_filed.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            task_update_main()
        }
    })

    function task_update_main() {
        let update_section_filed = update_section.querySelector("input")

        let txt = update_section_filed.value
        // console.log(txt);

        task_manager.update_task(id, txt)
        update_section.style.display = "none"
        task_view()

    }

}

// Theme
{
    let theme = document.querySelector(".theme")

    let theme_flag = false
    theme.addEventListener("click", () => {
        document.body.classList.toggle("dark_theme")
    })
}

// NAv 

{
    let top = 0
    let my_nav = document.querySelector("nav")

    window.addEventListener("scroll", () => {
        let current_top = document.documentElement.scrollTop || window.pageYOffset

        if (top < current_top) {
            my_nav.classList.add("nav-hide")
        }
        else {
            my_nav.classList.remove("nav-hide")
        }


        top = current_top < 0 ? 0 : current_top
    })
}

// Navigation button
{
    let btn = document.querySelector(".sec-1").querySelectorAll("button")

    btn[0].addEventListener("click", () => {
        history.back()
    })
    btn[1].addEventListener("click", () => {
        location.reload()
    })
    btn[2].addEventListener("click", () => {
        history.forward()
    })
}

// Browser Info

if (sessionStorage.getItem("session_count") === null) {
    sessionStorage.setItem("session_count", 1)
}

{
    let url = document.querySelector(".url")
    let browser_info = document.querySelector(".browser_info")
    let os_platform = document.querySelector(".os_platform")
    let session_count = document.querySelector(".session_count")
    let count = Number(sessionStorage.getItem("session_count"))
    let location_ele = document.querySelector(".location")

    let current_url = location.host
    let os = navigator.platform
    let browser = navigator.userAgent

    url.innerHTML = `Current URL : <span>${current_url}</span>`
    browser_info.innerHTML = `Browser : <span>${browser}</span>`
    os_platform.innerHTML = `OS Platform : <span>${os}</span>`
    session_count.innerHTML = `Session Visit Count : <span>${count}</span>`


    // Session count
    if (location.reload) {
        count++
        sessionStorage.setItem("session_count", count)
    }

    let your_location = navigator.geolocation.getCurrentPosition(success_location, error_location,)

    function success_location(position) {
        let la = position.coords.latitude;
        let lo = position.coords.longitude;

        location_ele.innerHTML = ` Location : ${la} , ${lo}`
    }
    function error_location(error) {
        console.log("Error : " + error.message);
    }


}
