let all_task_viwer = document.querySelectorAll(".tasks_viwer")
let all_tasks = document.querySelectorAll(".task")
let all_back_btn = document.querySelectorAll(".back")

all_task_viwer.forEach((elem) => {
    elem.addEventListener("click", () => {
        all_tasks[elem.id].style.display = "block"
    })
})

all_back_btn.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        // location.reload()
        all_tasks[idx].style.display = "none"
    })
})
