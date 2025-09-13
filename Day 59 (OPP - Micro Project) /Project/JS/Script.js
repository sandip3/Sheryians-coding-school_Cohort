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

// CRUD Opreation
{
    let txt_filed = document.querySelector(".text")
    let add_btn = document.querySelector(".add-task")

    add_btn.addEventListener("click", add_task)
    txt_filed.addEventListener("keydown", (ele) => {
        if (ele.key === "Enter") {
            add_task()
        }
    })


    view_task()

    function get_id() {
        let task_collaction = document.querySelector(".task_collection")
        let tasks = task_collaction.querySelectorAll(".tasks")
        // console.log(tasks);


        tasks.forEach((task) => {

            let dle_btn = task.querySelector(".rmv_btn")
            let update_btn = task.querySelector(".edit_btn")
            let div_id = task.getAttribute("data-task_id")

            update_btn.addEventListener("click", (ele) => {
                update_task(div_id)
            })
            dle_btn.addEventListener("click", (ele) => {
                remove_task(div_id)

            })

        })
    }

    // ADD Task
    function add_task() {
        let temp_txt = txt_filed.value

        let local_task = JSON.parse(localStorage.getItem("task"))
        let temp = local_task || []

        let temp_task = {
            id: new Date(),
            task: temp_txt
        }

        temp.push(temp_task)

        localStorage.setItem("task", JSON.stringify(temp))
        txt_filed.value = ``

        view_task()
    }

    // ViEW Task
    function view_task() {
        let task_collection = document.querySelector(".task_collection")
        task_collection.innerHTML = ``
        let temp_task = JSON.parse(localStorage.getItem("task")) || []

        temp_task.forEach((task, idx) => {
            let my_div = document.createElement("div")
            my_div.classList.add("tasks")
            my_div.setAttribute("data-task_id", task.id)
            my_div.innerHTML += `<span class="task"> ${idx + 1} </span>
                            <span class="task">${task.task}</span>
                            <span class="action_btn">
                                <button class="edit_btn">Edit <i class="ri-pencil-fill"></i></button>
                                <button class="rmv_btn">Remove <i class="ri-delete-bin-fill"></i></button>
                            </span>`

            task_collection.appendChild(my_div)
        })

        get_id()

    }

    // UPdate Task

    let current_id = null
    let flag = false

    function update_task(id) {
        console.log("Update Button Clicked ....");
        current_id = id

        let update_section = document.querySelector(".update-section")
        let local_temp = JSON.parse(localStorage.getItem("task")) || []

        let tsak_to_update = local_temp.find(task => task.id === id)

        if (tsak_to_update) {
            update_section.style.display = "flex";
            update_section.querySelector("p").innerHTML = `<span>Current task : </span> ${tsak_to_update.task}`
            update_section.querySelector("input").setAttribute("value", tsak_to_update.task)
        }

        if (!flag) {
            let update_section = document.querySelector(".update-section")
            let btn = update_section.querySelector("button")
            btn.setAttribute("type" , "button")
            

            btn.addEventListener("click", (e) => {
                e.preventDefault()

                if (!current_id) {
                    console.log("No Task is Selected");
                    return
                }

                let update_input = update_section.querySelector("input").value

                let temp_tasks = JSON.parse(localStorage.getItem("task")) || []
                let data = temp_tasks.findIndex(task => task.id === current_id)

                if (data !== -1) {
                    temp_tasks[data].task = update_input
                    localStorage.setItem("task", JSON.stringify(temp_tasks))
                    update_section.style.display = "none"
                    
                    view_task()
                    current_id = null
                }

            })

            flag = true
        }
    }


    // Remove Task
    function remove_task(id) {
        console.log("Remove Button Clicked ....");

        let local_task = JSON.parse(localStorage.getItem("task")) || []
        let update_task_data = local_task.filter(task => task.id !== id)

        localStorage.setItem("task", JSON.stringify(update_task_data))

        view_task()
    }
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
